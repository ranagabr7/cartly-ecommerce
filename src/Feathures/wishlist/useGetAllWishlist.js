import { useQuery } from '@tanstack/react-query';
import { getAllWishlist } from '../../services/apiWishlist';

export function useGetAllWishlist() {
  const { isPending, data: favouriteProduct } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getAllWishlist,
  });
  // console.log(favouriteProduct);
  
  return { isPending, favouriteProduct };
}
