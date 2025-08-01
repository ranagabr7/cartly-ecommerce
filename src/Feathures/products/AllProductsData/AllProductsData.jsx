import React, { useContext, useState } from 'react';
import Search from '../../../ui/Search/Search';
import Pagination from '../../../ui/Pagination/Pagination';
import styles from './AllProductsData.module.css';
import Filters from '../../../ui/Filters/Filters';
import { useAllProducts } from '../useAllProducts';
import Spinner from '../../../ui/Spinner/Spinner';
import { formateCurrency } from '../../../utils/healpers';
import { Link, useNavigate } from 'react-router';
import { HiOutlineHeart } from 'react-icons/hi2';
import { cartContext } from '../../../Context/CartContextProvider';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import toast from 'react-hot-toast';

export default function AllProductsData() {
  const navigate = useNavigate();
  const [isAdding, setisAdding] = useState(null);
  const { addToCart } = useContext(cartContext);
  const { isPending, products } = useAllProducts();
  if (isPending) return <Spinner />;
  const { data } = products;
  // console.log('products', data);

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
  return (
    <div className="my-8">
      {/* search and filters */}
      <div className="my-5 flex items-center justify-around gap-2">
        <Search />
        <Filters />
      </div>
      <div className="flex flex-col">
        {/* all products */}
        <div className={`${styles.cards} `}>
          {data?.map((product) => (
            <div
              className="relative w-full max-w-sm rounded-md border border-gray-200 bg-white px-2 shadow-sm transition-colors duration-1000 hover:border-blue-300"
              key={product.id}
            >
              <button className="absolute top-1 right-1">
                <span className="cursor-pointer text-2xl font-bold hover:text-red-600">
                  <HiOutlineHeart className="hover:fill-red-600" />
                </span>
              </button>
              <div onClick={() => navigate(`/product/${product.id}`)}>
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
                className="mb-3 w-full rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 focus:outline-none"
              >
                {isAdding === product.id ? <SpinnerMini /> : 'Add to cart'}
              </button>
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className="self-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
