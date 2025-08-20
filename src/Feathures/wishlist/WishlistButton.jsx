import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi2';
import { useAddToWishlist } from './useAddToWishlist';
import { useDeletefromWislist } from './useDeletefromWislist';
import { useGetAllWishlist } from './useGetAllWishlist';
export default function WishlistButton({ productId }) {
  // console.log(productId);

  const { isPending, addToWishlist } = useAddToWishlist();
  const { isDeleting, DeleteFromWishlist } = useDeletefromWislist();
  const { favouriteProduct } = useGetAllWishlist();
  // console.log(favouriteProduct);

  const wishlistproductId = favouriteProduct?.data.map(
    (favItem) => favItem.id || '',
  );
  const isInWishlist = wishlistproductId?.includes(productId);
  // console.log(wishlistproductId);

  // function handleAddToWishlist(id) {
  //   addToWishlist({ productId: id });
  // }
  // function handleDeleteFromWishlist(id) {
  //   DeleteFromWishlist(id);
  // }
  function handleToggleWishlidt(id) {
    if (isInWishlist) {
      DeleteFromWishlist(productId);
    } else {
      addToWishlist({ productId: id });
    }
  }

  return (
    <button
      className="absolute top-1 right-1"
      //   onClick={() => handleAddToWishlist(productId)}
      // onClick={() => handleDeleteFromWishlist(productId)}
      onClick={(e) => {
        e.stopPropagation()
        handleToggleWishlidt(productId);
      }}
    >
      {/* <span className="cursor-pointer text-2xl font-bold">
        <HiOutlineHeart />
      </span> */}
      <span>
        <HiOutlineHeart
          className={`cursor-pointer text-2xl font-bold ${isInWishlist ? 'fill-red-600 text-red-600' : ''}`}
        />
      </span>
    </button>
  );
}
