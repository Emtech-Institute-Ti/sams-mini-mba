import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { growthlogo, arrowright } from '../../utils/images';
import { useSubscriptionTypes } from '../../hooks/useSubscriptionTypes/useSubscriptionTypes';
import { useGetCoursesById } from '../../hooks/useGetCoursesById/useGetCoursesById';

const DateSelection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { courseId } = location.state || {};

  const {
    data: subscriptionData,
    isLoading: subscriptionLoading,
    error: subscriptionError,
  } = useSubscriptionTypes();

  const {
    data: courseData,
    isLoading: courseLoading,
    error: courseError,
  } = useGetCoursesById(courseId);

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSubscription, setSelectedSubscription] = useState<string>('');
  const [nextDate, setNextDate] = useState<string>('');
  const [otherDates, setOtherDates] = useState<string[]>([]);

  useEffect(() => {
    if (courseData?.course?.course_next_opening_dates) {
      const allDates: string[] = courseData.course.course_next_opening_dates;

      if (allDates.length > 0) {
        const sortedDates = allDates.sort(
          (a, b) => new Date(a).getTime() - new Date(b).getTime()
        );
        setNextDate(sortedDates[0]);
        setOtherDates(sortedDates.slice(1));
        setSelectedDate(sortedDates[0]);
      } else {
        console.error('No hay fechas disponibles en courseData');
      }
    } else {
      console.error('courseData no contiene fechas de apertura', courseData);
    }
  }, [courseData]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleSubscriptionChange = (type: string) => {
    setSelectedSubscription(type);
  };

  const handleNextClick = () => {
    navigate('/paymentcash', {
      state: { selectedDate, selectedSubscription, courseId },
    });
  };

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-screen-md mx-auto">
      <div className="p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-secondaryPurple">
        <img
          src={growthlogo}
          alt="Growth Accelerator Logo"
          className="mb-4 mx-auto"
        />
        <p className="text-gray-700 mb-6">
          Te preparamos para liderar con visión estratégica en un mercado
          competitivo. Inscríbete hoy y sé parte de una comunidad dedicada al
          desarrollo empresarial.
        </p>
        <div className="flex items-center text-customBlue font-bold">
          <img src={arrowright} className="h-6 w-6 mr-2" />
          <span>¡Tu futuro comienza aquí!</span>
        </div>
      </div>
      <div className="p-6 md:p-8 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold text-secondaryPurple mb-6 text-center md:text-left">
          Selecciona una fecha de inicio
        </h3>
        {courseLoading ? (
          <p className="text-gray-700 text-center">
            Cargando fechas de inicio...
          </p>
        ) : courseError ? (
          <p className="text-red-500 text-center">{courseError.message}</p>
        ) : (
          <>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="startDate"
                  value={nextDate}
                  checked={selectedDate === nextDate}
                  onChange={() => handleDateChange(nextDate)}
                  className="form-radio text-secondaryPurple"
                />
                <span className="ml-2 font-semibold text-customBlue">
                  {new Date(nextDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </label>
            </div>
            <hr className="mb-6 border-secondaryPurple" />
            <div className="mb-6">
              <p className="mb-4">Siguientes fechas:</p>
              <div className="flex flex-col space-y-4">
                {otherDates.map((date) => (
                  <label key={date} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="startDate"
                      value={date}
                      checked={selectedDate === date}
                      onChange={() => handleDateChange(date)}
                      className="form-radio text-customBlue"
                    />
                    <span className="ml-2">
                      {new Date(date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <hr className="mb-6 border-secondaryPurple" />
          </>
        )}

        {subscriptionLoading ? (
          <p className="text-gray-700 text-center">
            Cargando tipos de suscripción...
          </p>
        ) : subscriptionError ? (
          <p className="text-red-500 text-center">
            {subscriptionError.message}
          </p>
        ) : (
          subscriptionData && (
            <div className="mb-6">
              <p className="mb-4">Selecciona el tipo de pago:</p>
              <div className="flex flex-col space-y-4">
                {subscriptionData.subscriptionTypes.map((type) => (
                  <label
                    key={type.subscription_tp_id}
                    className="inline-flex items-center"
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      value={type.subscription_tp_name}
                      checked={
                        selectedSubscription === type.subscription_tp_name
                      }
                      onChange={() =>
                        handleSubscriptionChange(type.subscription_tp_name)
                      }
                      className="form-radio text-customBlue"
                    />
                    <span className="ml-2">
                      {type.subscription_tp_name === 'Monthly'
                        ? 'Pago mensual'
                        : 'Pago permanente'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )
        )}
        <div className="flex justify-center">
          <button
            onClick={handleNextClick}
            className="bg-secondaryPurple text-white py-2 px-8 rounded-full hover:bg-customBlue-dark transition duration-300"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default DateSelection;
