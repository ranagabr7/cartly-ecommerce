import { useQuery } from '@tanstack/react-query';
import { getSpecificProduct } from '../../services/apiProducts';
import { useParams } from 'react-router';

export function useProductDetails() {
  const { id } = useParams();
  const {
    isPending,
    data: productItem,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getSpecificProduct(id),
  });
  return { isPending, productItem, error };
}
