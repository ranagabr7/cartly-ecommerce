import React, { useContext } from 'react';
import { cartContext } from '../../../Context/CartContextProvider';
import { FaRegTrashCan } from 'react-icons/fa6';
import { formateCurrency } from '../../../utils/healpers';
import toast from 'react-hot-toast';
export default function CartDetails() {
  const { products, updateCount, removeCartItem } = useContext(cartContext);
  //   console.log(products);
  async function handleRemove(id) {
    try {
      await removeCartItem(id);
      toast.success('Removed successfully');
    } catch (error) {
      console.log(error);
      toast.error('Removed faild');
    }
  }
  async function handleUpdateCount(id, count) {
    try {
      await updateCount(id, count);
      toast.success('Update count successfully');
    } catch (error) {
      console.log(error);
      toast.error('Update count faild');
    }
  }

  return (
    <div>
      {products?.map((item) => (
        <div
          key={item._id}
          className="flex flex-col gap-0 border border-gray-50 py-2 md:flex-row md:items-center md:justify-between md:gap-5"
        >
          <div className="md:jusitfy-between flex items-center gap-8 md:w-[35%]">
            {/* image */}
            <div className="h-1/2 w-1/2">
              <img
                src={item.product.imageCover}
                alt={item.product.title.split(' ').slice(0, 2).join(' ')}
                className="w-full"
              />
            </div>
            {/* title & brand */}
            <div className="w-full">
              <p className="font-semibold text-gray-700">
                {item.product.title.split(' ').slice(0, 2).join(' ')}
              </p>
              <p className="mt-3 text-xs font-semibold text-blue-500">
                Brand : {item.product.brand.name}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-0 pt-10 md:w-[65%] md:pt-0">
            {/* count */}
            <div className="">
              <div
                className={`flex w-fit items-center gap-4 rounded-full bg-blue-50 px-4 py-2`}
              >
                <button
                  disabled={item.count === 1 ? true : false}
                  onClick={() =>
                    handleUpdateCount(item.product._id, item.count - 1)
                  }
                  type="button"
                  className="cursor-pointer px-1 text-lg font-bold text-blue-600 disabled:opacity-35"
                >
                  -
                </button>

                <span className="text-md text-md text-blue-600">
                  {item.count}
                </span>
                <button
                  onClick={() =>
                    handleUpdateCount(item.product._id, item.count + 1)
                  }
                  type="button"
                  className="cursor-pointer px-1 text-lg font-bold text-blue-600"
                >
                  +
                </button>
              </div>
            </div>
            {/* price */}
            <div className="flex flex-col font-semibold text-gray-700">
              <p>{formateCurrency(item.price * item.count)}</p>
              <p className="text-sm font-medium text-gray-400">
                {formateCurrency(item.price)}/per Item
              </p>
            </div>
            {/* remove */}
            <div className="flex items-center gap-0.5 text-sm font-medium text-red-600 lg:text-lg">
              <span className="cursor-pointer">
                <FaRegTrashCan />
              </span>
              <button
                type="button"
                className="cursor-pointer hover:underline"
                onClick={() => handleRemove(item.product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
