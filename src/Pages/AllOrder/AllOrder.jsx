import React from 'react';
import AllOrders from '../../Feathures/payment/AllOrders/AllOrders';

export default function AllOrder() {
  return (
    <section className="mx-auto mt-2 w-full px-1 md:px-4">
      <h1 className="mb-4 text-center text-2xl font-semibold text-gray-600 uppercase">
        All orders
      </h1>
      <AllOrders />
    </section>
  );
}
