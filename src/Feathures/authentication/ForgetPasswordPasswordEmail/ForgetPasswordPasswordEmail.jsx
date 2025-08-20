import React from 'react';
import { useForgetPasswordEmail } from '../useForgetPasswordEmail';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export default function ForgetPasswordPasswordEmail() {
  const { forgetPasswordEmail, isForgetPassword } = useForgetPasswordEmail();
  const forgetPasswordSchema = z.object({
    email: z
      .email({ message: 'Enter valid Email' })
      .nonempty({ message: 'This field is required' }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(forgetPasswordSchema),
  });
  function onSubmit(data) {
    // console.log('data', data);
    forgetPasswordEmail(data, {
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
          disabled={isForgetPassword}
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

      <div className="mb-1 flex flex-col gap-2 py-[12px]">
        <button
          type="submit"
          disabled={isForgetPassword}
          className="cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed"
        >
          {!isForgetPassword ? 'Forget Password' : <SpinnerMini />}
        </button>
      </div>
    </form>
  );
}
