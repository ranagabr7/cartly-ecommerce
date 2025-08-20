import React, { useContext, useState } from 'react';
import styles from './Wishlist.module.css';
import { HiOutlineHeart } from 'react-icons/hi2';
import WishlistButton from '../WishlistButton';
import { useGetAllWishlist } from '../useGetAllWishlist';
import Spinner from '../../../ui/Spinner/Spinner';
import { formateCurrency } from '../../../utils/healpers';
import toast from 'react-hot-toast';
import { cartContext } from '../../../Context/CartContextProvider';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import Empty from '../../../ui/Empty/Empty';
export default function Wishlist() {
  const { isPending, favouriteProduct } = useGetAllWishlist();
  const { addToCart } = useContext(cartContext);
  const [isAdding, setisAdding] = useState(null);
  if (isPending) return <Spinner />;
  const { data } = favouriteProduct;
  // console.log(data);

  // handle add to cart
  async function handleAddProduct(id) {
    setisAdding(id);
    const data = await addToCart(id);
    // console.log('add', data);
    if (data) {
      toast.success(data.message);
      setisAdding(null);
    } else {
      setisAdding(null);
      toast.error('Faild add to cart');
    }
  }
  if (data.length === 0)
    return <Empty>There is no product for this wishlist</Empty>;
  return (
    <div>
      <div className={`${styles.cards} `}>
        {data?.map((product) => (
          <div
            className="relative w-full max-w-sm rounded-md border border-gray-200 bg-white px-2 shadow-sm transition-colors duration-1000 hover:border-blue-300"
            key={product.id}
          >
            <WishlistButton productId={product.id} />
            <div>
              {/* image */}
              <div>
                <img
                  className="w-full rounded-t-lg p-3"
                  src={product.imageCover}
                  alt={product.name}
                />
              </div>
              {/* head content */}
              <div className="px-4 pb-3">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-gray-700">
                    {product.title.split(' ').slice(0, 2).join(' ')}
                  </h3>
                </div>
                {/* rating and price */}
                <div className="mt-4 flex w-full items-center justify-between gap-2">
                  <div className="flex items-center">
                    <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-[var(--main-color)]">
                      {product.ratingsAverage}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-700">
                    {formateCurrency(product.price)}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleAddProduct(product.id)}
              type="button"
              className="mb-3 w-full cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 focus:outline-none"
            >
              {isAdding === product.id ? <SpinnerMini /> : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
