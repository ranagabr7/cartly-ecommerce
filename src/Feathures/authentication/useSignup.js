import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../services/apiAuthentication';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isSignup, mutate: signup } = useMutation({
    mutationFn: (values) => signUp(values),
    onSuccess: (user) => {
      //   console.log('tastack', user);
      queryClient.setQueryData(['user'], user);
      toast.success('Signup successfully');
      navigate('/login');
    },
    onError: (error) => {
    //   console.log('tanstack', error);
      toast.error(error.response?.data?.message||error.message);
    },
  });
  return { signup, isSignup };
}
