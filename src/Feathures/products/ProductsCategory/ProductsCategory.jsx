import React from 'react';
import useProductsCategory from '../useProductsCategory';
import Spinner from '../../../ui/Spinner/Spinner';
import { Link, useNavigate } from 'react-router';
import styles from './ProductsCategory.module.css';
import { formateCurrency } from '../../../utils/healpers';
import useMoveBack from '../../../hooks/useMoveBack';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import Empty from '../../../ui/Empty/Empty';
import { HiOutlineHeart } from 'react-icons/hi2';
const ProductsCategory = () => {
  const { productsCategory, isPending, error } = useProductsCategory();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isPending) return <Spinner />;
  const { data } = productsCategory;

  function handleNavigateCart() {
    navigate('/cart');
  }
  //   console.log(data);
  if (data.length === 0)
    return <Empty>There is no product for this category</Empty>;
  return (
    <section className="pt-5">
      <div className="flex justify-end">
        <ButtonType type="back" onClick={moveBack}>
          &larr; Back
        </ButtonType>
      </div>
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
              onClick={handleNavigateCart}
              type="button"
              className="mb-3 w-full rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCategory;
