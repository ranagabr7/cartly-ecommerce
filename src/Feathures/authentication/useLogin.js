import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logIn } from '../../services/apiAuthentication';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContextProvider';

export function useLogin() {
  const { setToken } = useContext(authContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isLogin, mutate: login } = useMutation({
    mutationFn: (values) => logIn(values),
    onSuccess: (user) => {
      // console.log('tastack', user);
      // console.log('token', user.token);
      setToken(user.token);
      localStorage.setItem('token', user.token);
      queryClient.setQueryData(['user'], user);
      toast.success('Login successfully');
      // setToken(user.token);
      navigate('/products');
    },
    onError: (error) => {
      //   console.log(error);
      //   toast.error('Invalid email or password');
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'Invalid email or password',
      );
    },
  });

  return { login, isLogin };
}
