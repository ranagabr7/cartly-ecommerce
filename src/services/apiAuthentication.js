import axios from 'axios';

export async function signUp(values) {
  // console.log('api',values);
  try {
    const { data } = await axios.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      values,
    );
    // console.log('api',data);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error) throw new Error(error.response.data.message);
  }
}
export async function logIn(values) {
  // console.log('api',values);
  try {
    const { data } = await axios.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      values,
    );
    // console.log('api',data);

    return data;
  } catch (error) {
    console.log(error.response?.data?.message);
    if (error) throw new Error(error.response.data.message);
  }
}
