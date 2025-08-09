import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignup } from '../useSignup';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import toast from 'react-hot-toast';
import { cartContext } from '../../../Context/CartContextProvider';
export default function SignupForm() {
  const { signup, isSignup } = useSignup();
useContext(cartContext)
  const signupSchema = z
    .object({
      name: z
        .string({ message: 'Name must be string' })
        .nonempty({ message: 'This field is required' })
        .min(4, { message: 'Name must be at least 4 characters' })
        .max(200, { message: 'Name must be at most 200 characters' }),

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

      rePassword: z.string().nonempty({ message: 'This field is required' }),
      // .min(1, { message: 'Password must be at least 6 characters' })

      phone: z
        .string()
        .min(1, { message: 'This field is required' })
        .regex(/^(002|\+2)?01[0125][0-9]{8}$/, {
          message: 'Enter Egyption number',
        })
        .nonempty({ message: 'This field is required' }),
    })
    .refine((data) => data.password === data.rePassword, {
      message: 'Password should match ',
      path: ['rePassword'],
    });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data) {
    // console.log('data', data);
    signup(data, {
      onSettled: () => reset(),
    });
  }
  return (
    <form
      className="flex flex-col bg-white px-[40px] py-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* name */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          disabled={isSignup}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('name')}
        />
        {errors.name && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.name.message}
          </div>
        )}
      </div>
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
          disabled={isSignup}
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
          disabled={isSignup}
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
      {/*rePassword */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700 capitalize"
        >
          confirm password
        </label>
        <input
          type="password"
          id="rePassword"
          disabled={isSignup}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('rePassword')}
        />
        {errors.rePassword && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.rePassword.message}
          </div>
        )}
      </div>
      {/*phone */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-700 capitalize"
        >
          phone
        </label>
        <input
          type="tel"
          disabled={isSignup}
          id="phone"
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('phone')}
        />
        {errors.phone && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.phone.message}
          </div>
        )}
      </div>
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <button
          type="submit"
          disabled={isSignup}
          className="cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed"
        >
          {!isSignup ? 'Signup' : <SpinnerMini />}
        </button>
      </div>
    </form>
  );
}
