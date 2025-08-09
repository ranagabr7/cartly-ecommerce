import axios from 'axios';

export async function cashPayment({ cartId, values }) {
  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      values,
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error) throw new Error(error.response.data.message);
  }
}

export async function onlinePayment({ cartId, values }) {
  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5000`,
      values,
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    );
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error) throw new Error(error.response.data.message);
  }
}
export async function getAllUserOrder(userId) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    );

    // console.log(data);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error) throw new Error(error.response.data.message);
  }
}
