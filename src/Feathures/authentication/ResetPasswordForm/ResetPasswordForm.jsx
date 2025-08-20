import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import { useResetPassword } from '../useResetPassword';

export default function ResetPasswordForm() {
  const { isResetPassword, resetPassword } = useResetPassword();
  const restPasswordSchema = z.object({
    email: z
      .email({ message: 'Enter valid Email' })
      .nonempty({ message: 'This field is required' }),

    newPassword: z
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
    resolver: zodResolver(restPasswordSchema),
  });
  function onSubmit(data) {
    // console.log('data', data);
    resetPassword(data, {
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
          disabled={isResetPassword}
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
          htmlFor="newPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          New password
        </label>
        <input
          type="password"
          id="newPassword"
          disabled={isResetPassword}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('newPassword')}
        />
        {errors.newPassword && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.newPassword.message}
          </div>
        )}
      </div>
      <div className="mb-1 flex flex-col gap-2 py-[12px]">
        <button
          type="submit"
          disabled={isResetPassword}
          className="cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed"
        >
          {!isResetPassword ? 'Login' : <SpinnerMini />}
        </button>
      </div>
    </form>
  );
}
