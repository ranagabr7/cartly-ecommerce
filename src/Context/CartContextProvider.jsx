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
  const [cartId, setcartId] = useState(0);
  // const [isLoading, setisLoading] = useState(false);
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
      getUserCart();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      if (error) throw new Error(error.response.data.message);
    }
  }
  async function getUserCart() {
    try {
      // setisLoading(true);
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
      setcartId(data.data._id);
      return data;
    } catch (error) {
      // setisLoading(false);
      console.log(error.response.data.message);
      if (error) throw new Error(error.response.data.message);
    }
  }
  async function updateCount(id, count) {
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count: count,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      );
      setnumOfItems(data.numOfCartItems);
      setproducts(data.data.products);
      settotalPrice(data.data.totalCartPrice);
      setcartId(data.data._id);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      if (error) throw new Error(error.response.data.message);
    }
  }
  async function removeCartItem(id) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      );
      setnumOfItems(data.numOfCartItems);
      setproducts(data.data.products);
      settotalPrice(data.data.totalCartPrice);
      setcartId(data.data._id);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      if (error) throw new Error(error.response.data.message);
    }
  }
  useEffect(
    function () {
      if (token !== null) {
        getUserCart();
      }
    },
    [token],
  );
  return (
    <cartContext.Provider
      value={{
        setnumOfItems,
        setproducts,
        settotalPrice,
        getUserCart,
        addToCart,
        numOfItems,
        products,
        totalPrice,
        updateCount,
        removeCartItem,
        cartId,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
