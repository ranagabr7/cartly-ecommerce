import axios from 'axios';

export async function getAllProducts() {
  try {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/products',
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
