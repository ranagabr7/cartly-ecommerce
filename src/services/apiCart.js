import axios from 'axios';

// export async function addProductToCart(productId) {
//   try {
//     const { data } = await axios.post(
//       'https://ecommerce.routemisr.com/api/v1/cart',
//       {
//         productId: productId,
//       },
//       {
//         headers: {
//           token: localStorage.getItem('token'),
//         },
//       },
//     );
//     // console.log('api cart', data);
//     return data;
//   } catch (error) {
//     console.log(error.response.data.message);
//     if (error) throw new Error(error.response.data.message);
//   }

// }
export async function getUserCart() {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    // console.log('api cart', data);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error) throw new Error(error.response.data.message);
  }
}
