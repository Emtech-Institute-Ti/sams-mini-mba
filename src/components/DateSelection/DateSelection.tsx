import React, { useEffect, useState } from 'react';
import { growthlogo } from '../../utils/images';
import { useSubscriptionTypes } from '../../hooks/useSubscriptionTypes/useSubscriptionTypes';
import { useGetCourses } from '../../hooks/useGetCourses/useGetCourses';

const DateSelection: React.FC = () => {
  const {
    data: subscriptionData,
    isLoading: subscriptionLoading,
    error: subscriptionError,
  } = useSubscriptionTypes();

  const {
    data: courseData,
    isLoading: courseLoading,
    error: courseError,
  } = useGetCourses();

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSubscription, setSelectedSubscription] = useState<string>('');
  const [nextDate, setNextDate] = useState<string>('');
  const [otherDates, setOtherDates] = useState<string[]>([]);

  useEffect(() => {
    if (courseData && Array.isArray(courseData)) {
      const allDates: string[] = courseData.flatMap(
        (course) => course.course_next_opening_dates || []
      );
      if (allDates.length > 0) {
        const sortedDates = allDates.sort(
          (a, b) => new Date(a).getTime() - new Date(b).getTime()
        );
        setNextDate(sortedDates[0]);
        setOtherDates(sortedDates.slice(1));
        setSelectedDate(sortedDates[0]); // Set the first available date as the default selected date
      }
    }
  }, [courseData]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSubscriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedSubscription(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Tipo de suscripción seleccionada:', selectedSubscription);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg max-w-6xl mx-auto overflow-hidden">
      <div className="w-full md:w-1/2 p-8 bg-gray-50 flex flex-col items-center">
        <img
          src={growthlogo}
          alt="Growth Accelerator Logo"
          className="mx-auto mb-4 w-32 md:w-48"
        />
        <p className="text-gray-700 text-center">
          Te preparamos para liderar con visión estratégica en un mercado
          competitivo. Inscríbete hoy y sé parte de una comunidad dedicada al
          desarrollo empresarial.
        </p>
        <p className="text-customBlue text-center mt-4 font-bold">
          ¡Tu futuro comienza aquí!
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h3 className="text-xl font-bold text-secondaryPurple mb-4 text-center">
          Selecciona una fecha de inicio
        </h3>
        <p className="text-gray-700 mb-4 text-center">
          Próxima fecha de inicio:
        </p>
        {courseLoading ? (
          <p className="text-gray-700 text-center">
            Cargando fechas de inicio...
          </p>
        ) : courseError ? (
          <p className="text-red-500 text-center">{courseError.message}</p>
        ) : (
          <>
            {nextDate && (
              <div className="mb-4 text-center">
                <input
                  type="radio"
                  id={nextDate}
                  name="date"
                  value={nextDate}
                  checked={selectedDate === nextDate}
                  onChange={handleDateChange}
                  className="mr-2"
                />
                <label htmlFor={nextDate} className="text-customBlue font-bold">
                  {new Date(nextDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </label>
              </div>
            )}
            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-700 mb-4 text-center">Siguientes fechas:</p>
            {otherDates.map((date) => (
              <div key={date} className="mb-2 text-center">
                <input
                  type="radio"
                  id={date}
                  name="date"
                  value={date}
                  checked={selectedDate === date}
                  onChange={handleDateChange}
                  className="mr-2"
                />
                <label htmlFor={date}>
                  {new Date(date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </label>
              </div>
            ))}
          </>
        )}

        {subscriptionLoading && !subscriptionData && (
          <p className="text-gray-700 text-center">
            Cargando tipos de suscripción...
          </p>
        )}
        {subscriptionError && !subscriptionData && (
          <p className="text-red-500 text-center">
            {subscriptionError.message}
          </p>
        )}
        {subscriptionData && (
          <div className="mt-4">
            <h4 className="text-lg font-bold text-secondaryPurple mb-2 text-center">
              Tipos de suscripción:
            </h4>
            <ul>
              {subscriptionData.subscriptionTypes.map(
                (type: {
                  subscription_tp_id: number;
                  subscription_tp_name: string;
                }) => (
                  <li
                    key={type.subscription_tp_id}
                    className="mb-2 text-center"
                  >
                    <input
                      type="radio"
                      id={type.subscription_tp_name}
                      name="subscription"
                      value={type.subscription_tp_name}
                      checked={
                        selectedSubscription === type.subscription_tp_name
                      }
                      onChange={handleSubscriptionChange}
                      className="mr-2"
                    />
                    <label htmlFor={type.subscription_tp_name}>
                      {type.subscription_tp_name === 'Monthly'
                        ? 'Mensual'
                        : 'Permanente'}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        <button
          className="bg-secondaryPurple text-white px-16 py-3 rounded-full mt-4 block mx-auto"
          onClick={handleSubmit}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DateSelection;
