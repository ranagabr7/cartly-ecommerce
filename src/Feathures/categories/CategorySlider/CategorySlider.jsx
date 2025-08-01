import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useCategorySlider from '../useCategorySlider';
import Spinner from '../../../ui/Spinner/Spinner';
import { useNavigate } from 'react-router';

function CategorySlider() {
  const { categorySlider, isPending, error } = useCategorySlider();

  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // initialSlide: 0,
    autoplaySpeed: 4000,
    variableWidth: false,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  if (isPending) return <Spinner />;
  const { data } = categorySlider;
  // console.log(data);

  function handleNavigate(categoryId) {
    navigate(`/productsCategory/${categoryId}`);
  }
  return (
    <section className="">
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item._id} className="cursor-pointer">
              <div
                className="mb-9 flex flex-col items-center hover:text-blue-600"
                onClick={() => handleNavigate(item._id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[120px] w-[120px] rounded-full lg:h-[150px] lg:w-[150px]"
                />
                <p className="mt-5 text-gray-500 transition-colors duration-500 hover:text-blue-600">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CategorySlider;
