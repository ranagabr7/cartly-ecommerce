import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCashPayment } from '../useCashPayment';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import { cartContext } from '../../../Context/CartContextProvider';
import toast from 'react-hot-toast';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import OnlinePayment from '../OnlinePayment/OnlinePayment';
import { useIsMutating } from '@tanstack/react-query';
import { useOnlinePayment } from '../useOnlinePayment';

export default function PaymentDetails() {
  const [paymentMethod, setpaymentMethod] = useState('');
  const { cashPayment, isPayment } = useCashPayment();
  const { onlinePayment, isOnlinePayment } = useOnlinePayment();
  const { setnumOfItems, setproducts, settotalPrice } = useContext(cartContext);
  const paymentSchema = z.object({
    details: z
      .string({ message: 'Details must be string' })
      .nonempty({ message: 'This field is required' })
      .min(4, { message: 'Details must be at least 4 characters' })
      .max(800, { message: 'Details must be at most 800 characters' }),
    city: z
      .string({ message: 'City must be string' })
      .nonempty({ message: 'This field is required' })
      .max(200, { message: 'City must be at most 200 characters' }),

    phone: z
      .string()
      .min(1, { message: 'This field is required' })
      .regex(/^(002|\+2)?01[0125][0-9]{8}$/, {
        message: 'Enter Egyption number',
      })
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
    resolver: zodResolver(paymentSchema),
  });
  //   function detectAndCall(data){
  //     if(){
  // cashPayment(data)
  //     }else{
  // onlinePayment(data)
  //     }
  //   }
  function onSubmit(data) {
    if (!paymentMethod) return;
    const allData = {
      shippingAddress: {
        ...data,
      },
    };
    if (paymentMethod === 'cash') {
      cashPayment(
        { allData },
        {
          onSuccess: () => {
            setnumOfItems(0);
            setproducts([]);
            settotalPrice(0);
          },
          onSettled: () => {
            reset();
          },
        },
      );
    } else if (paymentMethod === 'online') {
      onlinePayment(
        { allData },
        {
          onSuccess: () => {
            setnumOfItems(0);
            setproducts([]);
            settotalPrice(0);
          },
          onSettled: () => {
            reset();
          },
        },
      );
    }
  }
  return (
    <form
      className="flex flex-col bg-white px-[40px] py-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* details */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="details"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Enter Details
        </label>
        <textarea
          id="details"
          disabled={isPayment}
          className="dark:shadow-xs-light block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('details')}
        />
        {errors.details && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.details.message}
          </div>
        )}
      </div>
      {/* city */}
      <div className="mb-1 flex flex-col gap-2 py-[5px]">
        <label
          htmlFor="city"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Your city
        </label>
        <input
          type="text"
          id="city"
          disabled={isPayment}
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed"
          {...register('city')}
        />
        {errors.city && (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! </span>
            {errors.city.message}
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
          disabled={isPayment}
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
      <div className="flex flex-col py-[5px]">
        <ButtonType
          type="primary"
          disabled={isPayment}
          onClick={() => setpaymentMethod('cash')}
        >
          {!isPayment ? 'Cash Payment' : <SpinnerMini />}
        </ButtonType>
        {/* online payment */}
        <ButtonType
          type="secondary"
          disabled={isOnlinePayment}
          onClick={() => setpaymentMethod('online')}
        >
          {!isOnlinePayment ? 'Online Payment' : <SpinnerMini />}
        </ButtonType>
      </div>
    </form>
  );
}
