import React, { useContext, useEffect } from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { NavLink } from 'react-router';
import Logo from '../Logo/Logo';
import AuthIcon from '../AuthIcon/AuthIcon';
import styles from './MainNav.module.css';
import { authContext } from '../../Context/AuthContextProvider';
import { cartContext } from '../../Context/CartContextProvider';
import { useGetAllWishlist } from '../../Feathures/wishlist/useGetAllWishlist';
const MainNav = () => {
  const { numOfItems } = useContext(cartContext);
  const { token, setToken } = useContext(authContext);

  return (
    <>
      <nav className="fixed start-0 top-0 z-20 w-full bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <div>
            <Logo />
          </div>
          {/* toggle */}
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <AuthIcon />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-gray-500 p-2 text-sm text-gray-500 hover:bg-gray-50 focus:ring-1 focus:ring-gray-50 focus:outline-none md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* links */}
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul
              className={`rtl:space-x-reverse" mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0`}
            >
              <li className="border-b-2 border-b-gray-100 py-1 md:border-none md:py-0">
                <NavLink
                  to="/products"
                  className={`${styles.active} block rounded-sm px-3 py-2 text-gray-700 md:bg-transparent md:p-0`}
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li className="border-b-2 border-b-gray-100 py-1 md:border-none md:py-0">
                <NavLink
                  to="/brands"
                  className={`${styles.active} block rounded-sm px-3 py-2 text-gray-700 md:bg-transparent md:p-0`}
                >
                  Brands
                </NavLink>
              </li>
              <li className="border-b-2 border-b-gray-100 py-1 md:border-none md:py-0">
                <NavLink
                  to="/categories"
                  className={`${styles.active} block rounded-sm border-b-gray-100 px-3 py-2 text-gray-700 md:bg-transparent md:p-0`}
                >
                  Categories
                </NavLink>
              </li>
              {token && (
                <>
                  <li className="border-b-2 border-b-gray-100 py-1 md:border-none md:py-0">
                    <NavLink
                      to="/wishList"
                      className={`${styles.active} block rounded-sm px-3 py-2 text-gray-700 md:bg-transparent md:p-0`}
                    >
                      WishList
                    </NavLink>
                  </li>
                  <li className="relative border-b-2 border-b-gray-100 py-1 md:border-none md:py-0">
                    <NavLink
                      to="/cart"
                      className={`${styles.active} block rounded-sm px-3 py-2 text-gray-700 md:bg-transparent md:p-0`}
                    >
                      Cart
                      <div className="absolute -top-0 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white md:-end-3 md:-top-2">
                        {numOfItems}
                      </div>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
// <Navbar >
//   <div className="flex md:order-2">
//     <Button>Get started</Button>
//     <NavbarToggle />
//   </div>
//   <NavbarCollapse>
//     <NavLink to="/products">Products</NavLink>
//     <NavLink to="/brands">Brands</NavLink>
//     <NavLink to="/categories">Categories</NavLink>
//   </NavbarCollapse>
// </Navbar>
