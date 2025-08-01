import axios from 'axios';

export async function getAllBrands() {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/brands',
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function getSubBrand(id) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
