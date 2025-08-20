import axios from 'axios';
import { PAGE_SIZE } from '../ui/Pagination/Pagination';

export async function getAllProducts(page = 1, limit = PAGE_SIZE) {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/products',
      {
        params: {
          page,
          limit,
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function getAllProductsCategory(categoryId) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function getSpecificProduct(productId) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
