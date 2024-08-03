import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
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
    autoplaySpeed: 5000,
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
    ),
    appendDots: (dots: string) => (
      <div className="bg-secondaryPurple">
        <ul className="flex justify-center items-center space-x-2">{dots}</ul>
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
    <div className="py-24 bg-gray-100">
      <div className="text-center mb-8 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-customBlue mb-8 max-w-xs mx-auto"
        >
          ¿Por qué elegir Smart MBA?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Nuestros dos programas ofrecen una experiencia de aprendizaje integral
          que te proporcionará todo lo que necesitas para llevar tu empresa al
          siguiente nivel
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 mb-8"
            >
              <div className="flex items-center bg-white shadow-md rounded-lg p-6 min-h-[200px] max-h-[200px]">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-12 w-12 mr-8 self-center"
                />
                <div className="text-start">
                  <h3 className="text-sm font-bold mb-2 text-secondaryPurple">
                    {benefit.title}:{' '}
                    <span className="text-customBlack font-normal">
                      {benefit.text}
                    </span>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BenefitsCarousel;
