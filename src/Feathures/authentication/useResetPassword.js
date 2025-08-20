import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { resetPasswordApi } from "../../services/apiAuthentication";
import { authContext } from "../../Context/AuthContextProvider";
import toast from "react-hot-toast";

export function useResetPassword() {
  const { setToken } = useContext(authContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isResetPassword, mutate: resetPassword } = useMutation({
    mutationFn: (values) => resetPasswordApi(values),
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

  return { isResetPassword, resetPassword };
}
