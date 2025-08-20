import axios from 'axios';

export async function getAllWishlist() {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function addToWishlistApi({ productId }) {
  try {
    const { data } = await axios.post(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      { productId },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function removeFromWishlist(productId) {
  // console.log(productId);
  
  try {
    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
