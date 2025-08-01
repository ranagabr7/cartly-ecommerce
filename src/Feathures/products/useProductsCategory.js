import { useQuery } from '@tanstack/react-query';
import { getAllProductsCategory } from '../../services/apiProducts';
import { useParams } from 'react-router';

export default function useProductsCategory() {
  const {categoryId} = useParams();
  //   console.log(categoryId);

  const {
    isPending,
    data: productsCategory,
    error,
  } = useQuery({
    queryKey: ['productsCategory', categoryId],
    queryFn: () => getAllProductsCategory(categoryId),
  });
 

  return { productsCategory, isPending, error };
}
