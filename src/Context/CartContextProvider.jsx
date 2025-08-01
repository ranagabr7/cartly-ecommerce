import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authContext } from './AuthContextProvider';
// import { getUserCart } from '../services/apiCart';

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const { token } = useContext(authContext);
  const [numOfItems, setnumOfItems] = useState(0);
  const [products, setproducts] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  //   add product to cart
  async function addToCart(productId) {
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/cart',
        {
          productId: productId,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      );
      // console.log('api cart', data);
      setnumOfItems(data.numOfCartItems);
      setproducts(data.data.products);
      settotalPrice(data.data.totalCartPrice);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      if (error) throw new Error(error.response.data.message);
    }
  }

  useEffect(
    function () {
      async function getUserCart() {
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
          setnumOfItems(data.numOfCartItems);
          setproducts(data.data.products);
          settotalPrice(data.data.totalCartPrice);
          return data;
        } catch (error) {
          console.log(error.response.data.message);
          if (error) throw new Error(error.response.data.message);
        }
      }
      if (token !== null) {
        getUserCart();
      }
    },
    [token],
  );
  return (
    <cartContext.Provider
      value={{ addToCart, numOfItems, products, totalPrice }}
    >
      {children}
    </cartContext.Provider>
  );
}
