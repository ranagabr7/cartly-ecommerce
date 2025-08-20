import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { removeFromWishlist } from '../../services/apiWishlist';

export function useDeletefromWislist() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: DeleteFromWishlist } = useMutation({
    mutationFn: (productId) => removeFromWishlist(productId),
    onSuccess: () => {
      toast.success('Product removed successfully from your wishlist');
      queryClient.invalidateQueries({
        queryKey: ['wishlist'],
      });
    },
    onError: () => {
      toast.error('Faild to remove the product from your wishlist');
    },
  });
  return { isDeleting, DeleteFromWishlist };
}
