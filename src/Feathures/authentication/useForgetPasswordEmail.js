import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { forgetPasswordEmailApi } from '../../services/apiAuthentication';
import { useNavigate } from 'react-router';

export function useForgetPasswordEmail() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isForgetPassword, mutate: forgetPasswordEmail } =
    useMutation({
      mutationFn: (values) => forgetPasswordEmailApi(values),
      onSuccess: (user) => {
        queryClient.setQueryData(['user'], user);
        toast.success('Reset code sent to your email');
        navigate('/resetCode');
      },
      onError: (error) => {
        //   console.log(error);
        toast.error('There is no user registered with this email address');
      },
    });

  return { forgetPasswordEmail, isForgetPassword };
}
