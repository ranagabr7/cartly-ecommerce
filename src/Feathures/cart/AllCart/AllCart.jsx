import React, { useContext, useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartDetails from '../CartDetails/CartDetails';
import { cartContext } from '../../../Context/CartContextProvider';
import Empty from '../../../ui/Empty/Empty';
import Spinner from '../../../ui/Spinner/Spinner';

function AllCart() {
  const { products, getUserCart } = useContext(cartContext);
  const [isLoading, setisLoading] = useState(false);
  
  async function handleGetCart() {
    try {
      setisLoading(true);
      const { data } = await getUserCart();
      setisLoading(false);
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  }
  useEffect(() => {
    handleGetCart();
  }, []);

  if (isLoading) return <Spinner />;
  if (products.length === 0)
    return <Empty>There is no product for this cart</Empty>;

  return (
    <div className="bg-white">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row">
        {/* cart details */}
        <div className="mt-5 mb-0 w-full border border-gray-100 bg-white px-2 py-4 md:mb-5 md:w-[70%] md:px-5">
          <CartDetails />
        </div>
        {/* order summary */}
        <div className="mb-5 md:mt-5 md:w-[30%]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default AllCart;
