import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../services/apiProducts';


export function useAllProducts() {
  
  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return { isPending, products, error };
}
