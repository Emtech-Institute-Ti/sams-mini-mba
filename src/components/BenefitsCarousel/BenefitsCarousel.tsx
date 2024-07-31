import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom-slick.css';
import { benefits } from '../../utils/benefitsData';

const BenefitsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mx-1"></div>
    ),
    appendDots: (dots) => (
      <div className="bg-cus rounded-full p-4 flex justify-center items-center mx-auto w-fit">
        <ul className="flex justify-center items-center">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-customBlue mb-4">
          ¿Por qué elegir Smart MBA?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nuestros dos programas ofrecen una experiencia de aprendizaje integral
          que te proporcionará todo lo que necesitas para llevar tu empresa al
          siguiente nivel
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-6 h-72">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-12 w-12 mb-4"
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-2 text-customBlue">
                    {benefit.title}:
                  </h3>
                  <p className="text-sm text-gray-700">{benefit.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BenefitsCarousel;
