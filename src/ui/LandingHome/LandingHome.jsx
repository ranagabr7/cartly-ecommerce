import React from 'react';
import image from './../../assets/images/header_img.png';
import CategorySlider from '../../Feathures/categories/CategorySlider/CategorySlider';
import ButtonType from '../ButtonType/ButtonType';
import { useNavigate } from 'react-router';
const LandingHome = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-20 overflow-hidden">
      {/* landing home */}
      <div className="relative">
        <div className="absolute top-[20%] left-0 mx-9 w-[280px] md:my-12 md:w-[350px]">
          <h2 className="mb-8 text-3xl font-bold text-gray-700">
            Unlock the trends. Shop now!
          </h2>
          <p className="text-xs text-gray-500">
            Discover abayas, shoes, and jewelry crafted for elegance. Your go-to
            fashion hub for timeless style and grace.
          </p>
          <ButtonType type="primary" onClick={() => navigate('/products')}>
            Shop Now
          </ButtonType>
        </div>
        <div>
          <img src={image} alt="header" className="w-full" />
        </div>
      </div>
      {/* our product */}
      <div className="mx-auto my-20 max-w-[800px] lg:max-w-4xl">
        <div className="mb-14 text-center">
          <h3 className="mb-6 text-3xl font-bold text-blue-500">
            Explore Our Products
          </h3>
          <p className="text-gray-400">
            Explore our collection of handpicked products – stylish, practical,
            and made just for you. Find your next favorite piece today!
          </p>
        </div>
        <CategorySlider />
      </div>
    </section>
  );
};

export default LandingHome;
