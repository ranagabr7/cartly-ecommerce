import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../services/apiCategories';

export function useAllCategories() {
  const { isPending, data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
  return { isPending, categories };
}
