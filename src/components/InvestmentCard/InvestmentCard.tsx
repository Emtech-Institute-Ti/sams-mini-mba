import React from 'react';
import { maskpng } from '../../utils/images';
import { formatPrice } from '../../utils/formatPrice';
import useGetCourses from '../../hooks/useGetCourses/useGetCourses';

const InvestmentCard: React.FC = () => {
  const { data: courses, loading, error } = useGetCourses();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const course = courses ? courses[0] : null;

  return (
    <div
      className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-8 md:p-16 lg:p-32 xl:p-52 relative"
      style={{
        backgroundImage: `url(${maskpng})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondaryPurple mb-4 absolute top-8 md:top-12 lg:top-16">
        Inversión del programa
      </h2>
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 text-center shadow-lg mt-20 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto flex flex-col justify-center items-center">
        <p className="text-lg md:text-xl lg:text-2xl text-customBlue mb-4">
          6 Pagos mensuales de:
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondaryPurple mb-2">
          ${course ? formatPrice(course.course_monthly_payment) : ''}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-customBlue mb-6">
          o un pago único de{' '}
          <span className="font-bold text-customBlue">
            ${course ? formatPrice(course.course_full_payment) : ''}
          </span>
        </p>
        <button className="mt-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-gradient-to-r from-secondaryPurple to-thirdBlue text-white text-sm md:text-lg lg:text-xl rounded-full shadow-lg hover:from-blue-800 hover:to-blue-600">
          Inscribirme &gt;
        </button>
      </div>
    </div>
  );
};

export default InvestmentCard;
