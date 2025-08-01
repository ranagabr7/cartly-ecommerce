import React from 'react';
import { IoLogoYoutube } from 'react-icons/io';
import { HiChevronRight } from 'react-icons/hi2';
import styles from './Footer.module.css';
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="px-14 py-8 bg-white">
      <div>
        <div className={styles.mainUL}>
          <div className="mb-8 flex flex-wrap justify-between space-x-4 md:flex-nowrap">
            {/* about */}
            <div>
              <h2 className="pb-2 font-bold text-gray-800 uppercase">about</h2>
              <ul className="mainUL">
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Terms &amp; Conditions</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Free Shipping</span>
                </li>
              </ul>
            </div>
            {/* need help */}
            <div>
              <h2 className="pb-2 font-bold text-gray-800 uppercase">
                Need Help?
              </h2>
              <ul className="mainUL">
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span> Chat with us</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Help Center</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Contact us</span>
                </li>
              </ul>
            </div>
            {/* best brand */}
            <div>
              <h2 className="pb-2 font-bold text-gray-800 uppercase">
                Best Brands
              </h2>

              <ul className="mainUL">
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Apple</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Samsung</span>
                </li>
                <li>
                  <span>
                    <HiChevronRight />
                  </span>
                  <span>Dell</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* social */}
        <div className="flex flex-col-reverse items-center  border-t border-gray-100 text-gray-500 md:flex-row md:justify-evenly">
          <p className="mt-2 text-sm">©Design And Code By Rana Gabr</p>
          <ul className=" mt-2 flex items-center justify-center text-xl">
            <li className="w-8 cursor-pointer hover:text-blue-600">
              <span>
                <FaSquareFacebook />
              </span>
            </li>
            <li className="w-8 cursor-pointer hover:text-pink-700">
              <span>
                <FaInstagram />
              </span>
            </li>
            <li className="w-8 cursor-pointer hover:text-sky-500">
              <span>
                <FaSquareTwitter />
              </span>
            </li>
            <li className="w-8 cursor-pointer hover:text-red-600">
              <span>
                <IoLogoYoutube />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
