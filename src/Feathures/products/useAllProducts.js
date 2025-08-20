import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllProducts } from '../../services/apiProducts';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../ui/Pagination/Pagination';

export function useAllProducts() {
  const [searchParams] = useSearchParams();
  const limit = PAGE_SIZE;
  const queryClient = useQueryClient();
  // pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { isPending, data: products } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getAllProducts(page, limit),
  });

  const numberOfPages = products?.metadata?.numberOfPages ?? 1;
  // prefetching
  if (page < numberOfPages) {
    queryClient.prefetchQuery({
      queryKey: ['products', page + 1],
      queryFn: () => getAllProducts(page + 1, limit),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['products', page - 1],
      queryFn: () => getAllProducts(page - 1, limit),
    });
  }
  return { isPending, products, page, limit };
}
