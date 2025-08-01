import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import { useNavigate } from 'react-router';
import { useLogin } from '../useLogin';

export default function LoginForm() {
  const { login, isLogin } = useLogin();
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z
      .email({ message: 'Enter valid Email' })
      .nonempty({ message: 'This field is required' }),

    password: z
      .string()
      .nonempty({ message: 'This field is required' })
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
        message:
          'Password must be at least 8 characters long and include upper and lowercase letters and a number',
      })
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(50, { message: 'Password must be at most 50 characters' }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  });
  function onSubmit(data) {
    // console.log('data', data);
    login(data, {
      onSettled: () => reset(),
    });
  }
  return (
    <form
      className="flex flex-col bg-white p-[40px] py-[24px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* email */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          disabled={isLogin}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('email')}
        />
        {errors.email && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.email.message}
          </div>
        )}
      </div>
      {/* password */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          disabled={isLogin}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('password')}
        />
        {errors.password && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.password.message}
          </div>
        )}
      </div>
      {/* forgetpassword */}
      <span
        className="mb-2 cursor-pointer self-end text-gray-500 hover:text-[var(--main-color)]"
        onClick={() => navigate('/forgetPassword')}
      >
        Forget Password?
      </span>
      {/* button login */}
      <div className="mb-1 flex flex-col gap-2 py-[12px]">
        <button
          type="submit"
          disabled={isLogin}
          className="cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed"
        >
          {!isLogin ? 'Login' : <SpinnerMini />}
        </button>
      </div>
      <div className="flex gap-1 self-center">
        <p className="text-gray-700">create Account?</p>
        <span
          className="mb-2 cursor-pointer self-end text-gray-500 underline hover:text-[var(--main-color)]"
          onClick={() => navigate('/signup')}
        >
          signup
        </span>
      </div>
    </form>
  );
}
