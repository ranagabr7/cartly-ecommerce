import React from 'react';
import PaymentDetails from '../../Feathures/payment/PaymentDetails/PaymentDetails';

export default function Payment() {
  return (
    <section className="mx-0 my-5 w-full px-5 md:mx-auto md:max-w-[80%] lg:max-w-[60%]">
      <div className="">
        <h1 className="mb-4 text-2xl font-semibold text-gray-600 uppercase text-center">
          personal data
        </h1>
        <PaymentDetails />
      </div>
    </section>
  );
}
