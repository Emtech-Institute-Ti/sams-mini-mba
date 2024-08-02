import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  playbutton,
  videobackground,
  checkcircle,
  maskback,
} from '../../utils/images';

const HeaderWithVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseClick = () => {
    setShowVideo(false);
  };

  const handleVideoEnded = () => {
    setShowVideo(false);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="relative bg-cover bg-center py-12 md:ml-12 rounded-l-lg md:rounded-l-2xl lg:rounded-l-3xl"
      style={{
        backgroundImage: `url(${maskback})`,
        backgroundPosition: 'center top',
      }}
      ref={ref}
    >
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 pt-12"
        >
          <h1 className="text-4xl font-bold text-secondaryPurple mb-16">
            ¿Estás listo para tu transformación empresarial?
          </h1>
          <p className="text-lg text-gray-700 mb-16">
            Imagina tener a tu disposición todas las herramientas y
            conocimientos necesarios para superar cualquier desafío empresarial.
            Visualiza un entorno en el que cada obstáculo se convierte en una
            oportunidad de crecimiento y cada problema en un trampolín hacia el
            éxito.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-1/2 mb-8 md:mb-0 relative"
          >
            <div
              className="relative w-full h-auto rounded-lg shadow-lg cursor-pointer md:-ml-16"
              onClick={handlePlayClick}
            >
              <img
                src={videobackground}
                alt="Video Thumbnail"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={playbutton} alt="Play Button" className="h-28 w-28" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:w-1/2 relative md:ml-8 md:pl-8"
          >
            <h2 className="text-2xl font-bold text-customBlue mb-8">
              Smart MBA está aquí{' '}
              <span className="text-customBlue font-normal">
                para convertir esa visión en realidad:
              </span>
            </h2>
            <p className="text-lg text-customBlack mb-24">
              Diseñado para acompañarte en el crecimiento de tu empresa:
            </p>
            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 md:-ml-40 w-full max-w-xl mx-auto">
              <img src={checkcircle} alt="Check Circle" className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-bold text-secondaryPurple mb-2">
                  A través de actividades y herramientas de vanguardia
                </h3>
                <p className="text-gray-700">
                  podrás llevar a un entorno real y poner en práctica al
                  instante mejoras y buenas prácticas que marcarán la diferencia
                  dentro de tu empresa.
                </p>
              </div>
            </div>

            <hr className="hidden md:block my-8 border-t-4 border-secondaryPurple w-full md:w-3/4 lg:w-1/6 mx-auto md:ml-0" />
          </motion.div>
        </motion.div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <video
              className="w-full h-auto"
              src="src/assets/videos/test.mp4"
              autoPlay
              controls
              onEnded={handleVideoEnded}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWithVideo;
