import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Orders from './Pages/Orders/Orders';
import Login from './Pages/Login/Login';
import Brands from './Pages/Brands/Brands';
import Categories from './Pages/Categories/Categories';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import Signup from './Pages/Signup/Signup';
import WishList from './Pages/WishList/WishList';
import AppLayout from './ui/AppLayout/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Brand from './Pages/Brand/Brand';
import SubCategoryProduct from './Pages/SubCategoryProduct/SubCategoryProduct';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import ResetCode from './Pages/ResetCode/ResetCode';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import AuthContextProvider from './Context/AuthContextProvider';
import ProtectedRoute from './ui/ProtectedRoute/ProtectedRoute';
import CartContextProvider from './Context/CartContextProvider';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <AuthContextProvider>
                <CartContextProvider>
                  <AppLayout />
                </CartContextProvider>
              </AuthContextProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/wishList"
              element={
                <ProtectedRoute>
                  <WishList />
                </ProtectedRoute>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/brands" element={<Brands />} />
            <Route path={`/brand/:barndId`} element={<Brand />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/resetCode" element={<ResetCode />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route
              path={`/productsCategory/:categoryId`}
              element={<SubCategoryProduct />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        containerStyle={{ margin: '50px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '12px 24px',
            backgroundColor: 'oklch(97% 0.014 254.604)',
            color: 'oklch(48.8% 0.243 264.376)',
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
