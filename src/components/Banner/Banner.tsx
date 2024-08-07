import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { banner, bannermob } from '../../utils/images';

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white pt-20">
      <img
        src={banner}
        alt="Banner"
        className="hidden md:block w-full h-auto object-cover"
      />
      <img
        src={bannermob}
        alt="Banner"
        className="block md:hidden w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left md:text-left text-gray-900 max-w-full md:max-w-2xl w-full bg-opacity-70 p-4 md:p-6 rounded-lg mt-36 md:mt-0"
        >
          <h1 className="font-bold mb-4 leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
            <span className="text-customblack">
              Impulsa el potencial de tu empresa con{' '}
            </span>
            <span className="text-secondaryPurple font-bold">Smart MBA</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 mb-6 text-lg sm:text-xl md:text-xl"
          >
            <span className="font-bold text-customblack">
              Descubre nuestros programas Growth Accelerator y Master Management
            </span>{' '}
            y elige el que mejor se adapte para lograr el crecimiento de tu
            organización.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            onClick={() => navigate('/register')}
            className="bg-secondaryPurple text-white px-9 py-4 sm:px-8 sm:py-3 rounded-full hover:bg-secondaryPurple transition duration-300 font-medium text-lg sm:text-xl"
          >
            Inscríbete aquí
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
