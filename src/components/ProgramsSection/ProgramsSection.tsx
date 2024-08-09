import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import {
  growthlogo,
  masterlogo,
  benefitimg,
  bannercourse,
  bgcourses,
} from '../../utils/images';
import { useGetCoursesById } from '../../hooks/useGetCoursesById/useGetCoursesById';
import { Course } from '../../types/ApiDto';
import './custom-slick.css';

const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: growthCourse,
    isLoading: isLoadingGrowth,
    isError: isErrorGrowth,
    error: errorGrowth,
  } = useGetCoursesById(1);
  const {
    data: masterCourse,
    isLoading: isLoadingMaster,
    isError: isErrorMaster,
    error: errorMaster,
  } = useGetCoursesById(2);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleGrowthCourseClick = (course: Course) => {
    navigate('/growthcourse', { state: { course } });
  };

  const handleMasterCourseClick = (course: Course) => {
    navigate('/mastercourse', { state: { course } });
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: growthRef, inView: growthInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: masterRef, inView: masterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="bg-secondaryPurple mb-6">
        <ul className="flex justify-center items-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-32 md:bg-cover"
      style={{
        backgroundImage: `url(${bgcourses})`,
        backgroundPosition: 'bottom center',
      }}
    >
      <style>
        {`
      @media (min-width: 768px) {
        .md\\:bg-cover {
          background-image: url(${bannercourse}) !important;
        }
      }
    `}
      </style>

      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-customBlue mb-8">
            ¿Qué te ofrecemos?
          </h2>
          <div className="flex justify-center">
            <p className="text-lg text-customBlack text-center max-w-lg">
              <span className="font-bold text-customBlue">
                Dos programas adaptados
              </span>{' '}
              a necesidades diferentes según el rol que cumples en tu empresa:
            </p>
          </div>
        </motion.div>

        {/* Mobile Version Carousel */}
        <div className="md:hidden bg-white p-4">
          <div className="relative bg-white">
            <Slider {...settings}>
              <div className="px-2">
                <div
                  ref={growthRef}
                  className="bg-white rounded-3xl p-6 text-center flex flex-col justify-between h-auto min-h-[300px]"
                >
                  <div className="flex-grow">
                    <img
                      src={growthlogo}
                      alt="Growth Accelerator Logo"
                      className="mx-auto mb-6"
                    />
                    {isLoadingGrowth ? (
                      <p className="text-gray-700 mb-6">Cargando...</p>
                    ) : isErrorGrowth ? (
                      <p className="text-red-500 mb-6">
                        {errorGrowth?.message}
                      </p>
                    ) : growthCourse ? (
                      <p className="text-customBlack mb-6">
                        En el dinámico y competitivo mundo empresarial,{' '}
                        <span className="font-bold text-customBlack">
                          el éxito no es cuestión de suerte.
                        </span>{' '}
                        Requiere una visión clara, estrategias efectivas y una
                        ejecución impecable.{' '}
                        <span className="font-bold text-customBlack">
                          Si eres el dueño de una empresa,
                        </span>{' '}
                        <span className="font-bold text-secondaryPurple">
                          {growthCourse.course_name}
                        </span>{' '}
                        <span className="font-bold text-customBlack">
                          es tu aliado
                        </span>{' '}
                        perfecto para alcanzar estos objetivos.
                      </p>
                    ) : (
                      <p className="text-gray-700 mb-6">
                        Información no disponible.
                      </p>
                    )}
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        growthCourse && handleGrowthCourseClick(growthCourse)
                      }
                      className="inline-block bg-secondaryPurple text-white px-12 py-3 rounded-3xl hover:bg-customBlue transition duration-300 mt-4"
                      style={{ width: 'auto' }}
                    >
                      Ver más <span className="ml-2">&rsaquo;</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div
                  ref={masterRef}
                  className="bg-white rounded-3xl p-6 text-center flex flex-col justify-between h-auto min-h-[300px]"
                >
                  <div className="flex-grow">
                    <img
                      src={masterlogo}
                      alt="Master Management Logo"
                      className="mx-auto mb-10 p-8"
                    />
                    {isLoadingMaster ? (
                      <p className="text-gray-700 mb-6">Cargando...</p>
                    ) : isErrorMaster ? (
                      <p className="text-red-500 mb-6">
                        {errorMaster?.message}
                      </p>
                    ) : masterCourse ? (
                      <p className="text-gray-700 mb-4">
                        En el entorno laboral moderno, los gerentes que pueden
                        dirigir con eficacia e inspirar a sus equipos son la
                        clave para el éxito de cualquier organización.{' '}
                        <span className="font-bold text-customBlack">
                          Si eres el gerente de una empresa,
                        </span>
                        <span className="font-bold text-secondaryPurple">
                          {masterCourse.course_name}
                        </span>{' '}
                        está diseñado para ayudarte a{' '}
                        <span className="font-bold text-customBlack">
                          alcanzar ese nivel de excelencia.
                        </span>
                      </p>
                    ) : (
                      <p className="text-gray-700 mb-6">
                        Información no disponible.
                      </p>
                    )}
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        masterCourse && handleMasterCourseClick(masterCourse)
                      }
                      className="inline-block bg-secondaryPurple text-white px-12 py-3 rounded-3xl hover:bg-customBlue transition duration-300 mt-4"
                      style={{ width: 'auto' }}
                    >
                      Ver más <span className="ml-2">&rsaquo;</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Web Version */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-44 py-12">
          <motion.div
            ref={growthRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              growthInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 1 }}
            className="bg-white shadow-2xl rounded-3xl p-6 text-center w-full md:w-1/3 flex flex-col justify-between h-auto min-h-[300px] max-w-sm"
          >
            <div className="flex-grow">
              <img
                src={growthlogo}
                alt="Growth Accelerator Logo"
                className="mx-auto mb-6"
              />
              {isLoadingGrowth ? (
                <p className="text-gray-700 mb-6">Cargando...</p>
              ) : isErrorGrowth ? (
                <p className="text-red-500 mb-6">{errorGrowth?.message}</p>
              ) : growthCourse ? (
                <p className="text-customBlack mb-6">
                  En el dinámico y competitivo mundo empresarial, {''}
                  <span className="font-bold text-customBlack">
                    el éxito no es cuestión de suerte.
                  </span>{' '}
                  {''}
                  Requiere una visión clara, estrategias efectivas y una
                  ejecución impecable.{' '}
                  <span className="font-bold text-customBlack">
                    Si eres el dueño de una empresa,
                  </span>{' '}
                  <span className="font-bold text-secondaryPurple">
                    {growthCourse.course_name}
                  </span>{' '}
                  <span className="font-bold text-customBlack">
                    es tu aliado
                  </span>{' '}
                  perfecto para alcanzar estos objetivos.
                </p>
              ) : (
                <p className="text-gray-700 mb-6">Información no disponible.</p>
              )}
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  growthCourse && handleGrowthCourseClick(growthCourse)
                }
                className="inline-block bg-secondaryPurple text-white px-12 py-3 rounded-3xl hover:bg-customBlue transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Ver más <span className="ml-2">&rsaquo;</span>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            ref={masterRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              masterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 1 }}
            className="bg-white shadow-2xl rounded-3xl p-6 text-center w-full md:w-1/3 flex flex-col justify-between h-auto min-h-[300px] max-w-sm"
          >
            <div className="flex-grow">
              <img
                src={masterlogo}
                alt="Master Management Logo"
                className="mx-auto mb-10 p-8"
              />
              {isLoadingMaster ? (
                <p className="text-gray-700 mb-6">Cargando...</p>
              ) : isErrorMaster ? (
                <p className="text-red-500 mb-6">{errorMaster?.message}</p>
              ) : masterCourse ? (
                <p className="text-gray-700 mb-4">
                  En el entorno laboral moderno, los gerentes que pueden dirigir
                  con eficacia e inspirar a sus equipos son la clave para el
                  éxito de cualquier organización. {''}
                  <span className="font-bold text-customBlack">
                    Si eres el gerente de una empresa,
                  </span>
                  <span className="font-bold text-secondaryPurple">
                    {''} {masterCourse.course_name}
                  </span>{' '}
                  está diseñado para ayudarte a{' '}
                  <span className="font-bold text-customBlack">
                    alcanzar ese nivel de excelencia.
                  </span>
                </p>
              ) : (
                <p className="text-gray-700 mb-6">Información no disponible.</p>
              )}
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  masterCourse && handleMasterCourseClick(masterCourse)
                }
                className="inline-block bg-secondaryPurple text-white px-12 py-3 rounded-3xl hover:bg-customBlue transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Ver más <span className="ml-2">&rsaquo;</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center items-center mt-12 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={benefitimg}
            alt="Imagen ilustrativa"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-8 flex flex-col justify-center text-center md:text-left md:w-1/2">
            <p className="text-gray-700 mb-4">
              No importa si eres un empresario buscando llevar tu empresa a
              nuevas alturas o un gerente deseando mejorar tus habilidades de
              liderazgo, nuestros programas están enfocados en que logres ese
              éxito empresarial que estás buscando.
              <br />
              <span className="font-bold mt-8 block">
                ¡Únete a la transformación para el éxito empresarial!
              </span>
            </p>

            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegisterClick}
                className="inline-block bg-secondaryPurple text-white px-6 py-2 rounded-full hover:bg-secondaryPurple-dark transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Inscríbete aquí
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgramsSection;
