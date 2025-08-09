import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { cashPayment as cashPaymentApi } from '../../services/apiPayment';
import { useNavigate, useParams } from 'react-router';

export function useCashPayment() {
  const { cartId } = useParams();
  // console.log(cartId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isPayment, mutate: cashPayment } = useMutation({
    mutationFn: ({ values }) => cashPaymentApi({ cartId, values }),
    onSuccess: (user) => {
      // console.log('user', user.data);
      toast.success('successfully cash payment');
      queryClient.setQueryData(['cashpayment'], user.data);
      navigate('/allorders');
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        error.response?.data?.message || error.message || 'error cash payment',
      );
    },
  });
  return { cashPayment, isPayment };
}
