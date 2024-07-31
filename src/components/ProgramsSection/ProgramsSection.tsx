import React from 'react';
import { useNavigate } from 'react-router-dom';
import { growthlogo, masterlogo, benefitimg } from '../../utils/images';
import useGetCourses from '../../hooks/useGetCourses/useGetCourses';

const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();
  const { data: courses, loading, error } = useGetCourses();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleGrowthCourseClick = () => {
    navigate('/growthcourse');
  };

  const handleMasterCourseClick = () => {
    navigate('/mastercourse');
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const growthCourse = courses?.find((course) => course.course_id === 1);
  const masterCourse = courses?.find((course) => course.course_id === 2);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/2 flex flex-col justify-between h-auto min-h-[300px] flex-grow">
            <div className="flex-grow">
              <img
                src={growthlogo}
                alt="Growth Accelerator Logo"
                className="mx-auto mb-auto"
              />
              {growthCourse ? (
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
              <button
                onClick={handleGrowthCourseClick}
                className="inline-block bg-secondaryPurple text-white px-6 py-2 hover:bg-customBlue-dark transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Ver más
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/2 flex flex-col justify-between h-auto min-h-[300px] flex-grow">
            <div className="flex-grow">
              <img
                src={masterlogo}
                alt="Master Management Logo"
                className="mx-auto mb-10 p-6"
              />
              {masterCourse ? (
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
              <button
                onClick={handleMasterCourseClick}
                className="inline-block bg-secondaryPurple text-white px-6 py-2 hover:bg-customBlue-dark transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
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
              <span className="font-bold">
                ¡Únete a la transformación para el éxito empresarial!
              </span>
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleRegisterClick}
                className="inline-block bg-secondaryPurple text-white px-6 py-2 rounded-full hover:bg-secondaryPurple-dark transition duration-300 mt-4"
                style={{ width: 'auto' }}
              >
                Inscríbete aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
