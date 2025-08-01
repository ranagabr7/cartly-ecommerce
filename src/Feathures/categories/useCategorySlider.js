import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../services/apiCategories';

export default function useCategorySlider() {
  const {
    data: categorySlider,
    isPending,
    error,
  } = useQuery({
    queryKey: ['categorySlider'],
    queryFn: getAllCategories,
  });

  
  return { categorySlider, isPending, error };
}
