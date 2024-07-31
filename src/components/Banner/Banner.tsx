import React from 'react';
import { useNavigate } from 'react-router-dom';
import { banner } from '../../utils/images';

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white pt-20">
      <img src={banner} alt="Banner" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center justify-start p-4 md:p-10">
        <div className="text-left text-gray-900 max-w-full md:max-w-2xl w-full">
          <h1 className="font-bold mb-4 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Impulsa el potencial de tu empresa con{' '}
            <span className="text-secondaryPurple">Smart MBA</span>
          </h1>
          <p className="mt-12 mb-12 text-gray-700 text-md sm:text-lg md:text-xl">
            <span className="font-bold text-gray-900">
              Descubre nuestros programas Growth Accelerator y Master Management
            </span>{' '}
            y elige el que mejor se adapte para lograr el crecimiento de tu
            organización.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="mt-12 bg-secondaryPurple text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-secondaryPurple transition duration-300 font-medium text-sm sm:text-base md:text-lg"
          >
            Inscríbete aquí
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
