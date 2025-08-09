import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { onlinePayment as onlinePaymentApi } from '../../services/apiPayment';
import { useParams } from 'react-router';

export function useOnlinePayment() {
  const { cartId } = useParams();
  // console.log(cartId);
  const queryClient = useQueryClient();
  const { isPending: isOnlinePayment, mutate: onlinePayment } = useMutation({
    mutationFn: ({ values }) => onlinePaymentApi({ cartId, values }),
    onSuccess: (user) => {
      toast.success('successfully online payment');
      console.log(user.session.success_url);
      // window.open(user.session.url)
      window.open(user.session.url,'_self')
      queryClient.setQueryData(['onlinepayment'], user.session.success_url);
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'error online payment',
      );
    },
  });
  return { onlinePayment, isOnlinePayment };
}
