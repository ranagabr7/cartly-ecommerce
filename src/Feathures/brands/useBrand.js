import { useQuery } from '@tanstack/react-query';
import { getSubBrand } from '../../services/apiBrands';
import { useParams } from 'react-router';

export default function useBrand() {
  const { barndId } = useParams();
  const {
    data: brand,
    isPending,
    error,
  } = useQuery({
    queryKey: ['brand', barndId],
    queryFn: () => getSubBrand(barndId),
  });
  return { brand, isPending, error };
}
