import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToWishlistApi } from '../../services/apiWishlist';
import toast from 'react-hot-toast';

export function useAddToWishlist() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addToWishlist } = useMutation({
    mutationFn: ({ productId }) => addToWishlistApi({ productId }),
    onSuccess: () => {
      toast.success('Product added successfully to your wishlist');
      queryClient.invalidateQueries({
        queryKey: ['wishlist'],
      });
    },
    onError: () => {
      toast.error('Faild to add the product to your wishlist');
    },
  });
  return { isPending, addToWishlist };
}
