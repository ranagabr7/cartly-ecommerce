import axios from 'axios';

export async function getAllCategories() {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/categories',
    );
    return data

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
