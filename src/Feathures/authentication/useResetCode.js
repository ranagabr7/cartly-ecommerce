import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { resetCodeApi } from '../../services/apiAuthentication';

export function useResetCode() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isResetCode, mutate: resetCode } =
    useMutation({
      mutationFn: (values) => resetCodeApi(values),
      onSuccess: (user) => {
   
        queryClient.setQueryData(['user'], user);
        toast.success('success');
      
        navigate('/resetPassword');
      },
      onError: (error) => {
        //   console.log(error);
        toast.error('Reset code is invalid or has expired');
      },
    });

  return { resetCode, isResetCode };
}
