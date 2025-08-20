import React, { useContext, useState } from 'react';
import { useProductDetails } from '../useProductDetails';
import Spinner from '../../../ui/Spinner/Spinner';
import { formateCurrency } from '../../../utils/healpers';
import { useNavigate, useParams } from 'react-router';
import { HiOutlineHeart, HiOutlineStar } from 'react-icons/hi2';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useMoveBack from '../../../hooks/useMoveBack';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import { cartContext } from '../../../Context/CartContextProvider';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import toast from 'react-hot-toast';
import WishlistButton from '../../wishlist/WishlistButton';

export default function ProductDetails() {
  const [isAdding, setisAdding] = useState(false);
  const { addToCart } = useContext(cartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isPending, productItem } = useProductDetails();
  const moveBack = useMoveBack();
  if (isPending) return <Spinner />;
  const { data } = productItem;
  // console.log(data);

  // handle add to cart
  async function handleAddProduct() {
    setisAdding(true);
    const data = await addToCart(id);
    // console.log(data);
    if (data) {
      toast.success(data.message);
      setisAdding(false);
    } else {
      setisAdding(false);
      toast.error('Faild add to cart');
    }
  }
  return (
    <div>
      <div className="mt-1 mb-3 flex justify-end">
        <ButtonType type="back" onClick={moveBack}>
          &larr; Back
        </ButtonType>
      </div>
      <div className="relative">
        <WishlistButton productId={data.id} />
        <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow-md md:flex-row">
          {/* image */}
          <div className="w-full overflow-hidden md:w-1/4">
            <img
              className="w-full rounded-t-lg object-cover md:rounded-none md:rounded-s-lg"
              src={data.imageCover}
              alt={data.title}
            />
          </div>
          {/* content */}
          <div className="flex w-full flex-col justify-between p-4 leading-normal md:w-2/3">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              {data.title.split(' ').slice(0, 2).join(' ')}
            </h3>
            <div>
              <p className="mb-3 font-normal text-gray-500">
                {data.description}
              </p>
              <p className="text-[var(--main-color)]">{data.category.name}</p>
            </div>
            <div>
              {/* rating and price */}
              <div className="mt-10 flex w-full items-center justify-between gap-2">
                <div className="flex items-center">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={data.ratingsAverage}
                    readOnly
                  />

                  <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-[var(--main-color)]">
                    {data.ratingsAverage}
                  </span>
                </div>
                <span className="text-lg font-bold text-gray-700">
                  {formateCurrency(data.price)}
                </span>
              </div>
              {/* cart */}
              <div className="mt-20">
                <button
                  onClick={handleAddProduct}
                  type="button"
                  className="mb-3 w-full cursor-pointer rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 focus:outline-none"
                >
                  {isAdding ? <SpinnerMini /> : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
