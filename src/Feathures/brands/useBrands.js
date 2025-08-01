import { useQuery } from '@tanstack/react-query';
import { getAllBrands } from '../../services/apiBrands';

export function useBrands() {
  const {
    isPending,
    data: brands,
    error,
  } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands,
  });
  return { isPending, brands, error };
}
