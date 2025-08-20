import React from 'react';
import { formateCurrency } from '../../../utils/healpers';
import styles from './ProductGrid.module.css';
import { useNavigate } from 'react-router';
import WishlistButton from '../../wishlist/WishlistButton';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';

export default function ProductGrid({ products, onAddToCart, isAdding }) {
  const navigate = useNavigate();
  if (products.length === 0)
    return (
      <div className="mx-auto w-full mt-9 mb-5 rounded-xl bg-white px-20 py-10 text-center shadow-xl">
        <h1 className="text-2xl font-bold text-blue-500 capitalize">
        No products available right now !
        </h1>
      </div>
    );
  return (
    <div className={`${styles.cards} `}>
      {products?.map((product) => (
        <div
          className="relative w-full max-w-sm rounded-md border border-gray-200 bg-white px-2 shadow-sm transition-colors duration-1000 hover:border-blue-300"
          key={product.id}
        >
          <WishlistButton productId={product.id} />
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
            onClick={() => onAddToCart(product.id)}
            type="button"
            className="mb-3 w-full rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 focus:outline-none"
          >
            {isAdding === product.id ? <SpinnerMini /> : 'Add to cart'}
          </button>
        </div>
      ))}
    </div>
  );
}
