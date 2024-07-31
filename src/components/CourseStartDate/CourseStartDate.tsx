import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { growthlogo, arrowright } from '../../utils/images';

const CourseStartDate: React.FC = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState<'monthly' | 'permanent'>('monthly');
  const [selectedDate, setSelectedDate] = useState('10 de Septiembre 2024');

  const handleNextClick = () => {
    console.log('Selected Date:', selectedDate);
    console.log('Payment Type:', paymentType);
    navigate('/folioform');
  };

  const handlePaymentTypeChange = (type: 'monthly' | 'permanent') => {
    setPaymentType(type);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row max-w-screen-md mx-auto">
      <div className="md:w-1/2 p-8 flex flex-col justify-center border-r border-gray-200">
        <img src={growthlogo} alt="Growth Accelerator Logo" />
        <p className="text-gray-700 mb-6">
          Te preparamos para liderar con visión estratégica en un mercado competitivo. Inscríbete hoy y sé parte de una comunidad dedicada al desarrollo empresarial.
        </p>
        <div className="flex items-center text-customBlue font-bold">
          <img src={arrowright} className="h-6 w-6 mr-2" />
          <span>¡Tu futuro comienza aquí!</span>
        </div>
      </div>
      <div className="md:w-1/2 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold text-secondaryPurple mb-6">
          Selecciona una fecha de inicio
        </h3>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="startDate"
              value="10 de Septiembre 2024"
              checked={selectedDate === '10 de Septiembre 2024'}
              onChange={() => handleDateChange('10 de Septiembre 2024')}
              className="form-radio text-secondaryPurple"
            />
            <span className="ml-2 font-semibold text-customBlue">
              10 de Septiembre 2024
            </span>
          </label>
        </div>
        <hr className="mb-6 border-secondaryPurple" />
        <div className="mb-6">
          <p className="mb-4">Siguientes fechas:</p>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="startDate"
                value="10 de Octubre 2024"
                checked={selectedDate === '10 de Octubre 2024'}
                onChange={() => handleDateChange('10 de Octubre 2024')}
                className="form-radio text-customBlue"
              />
              <span className="ml-2">10 de Octubre 2024</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="startDate"
                value="10 de Noviembre 2024"
                checked={selectedDate === '10 de Noviembre 2024'}
                onChange={() => handleDateChange('10 de Noviembre 2024')}
                className="form-radio text-customBlue"
              />
              <span className="ml-2">10 de Noviembre 2024</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="startDate"
                value="10 de Diciembre 2024"
                checked={selectedDate === '10 de Diciembre 2024'}
                onChange={() => handleDateChange('10 de Diciembre 2024')}
                className="form-radio text-customBlue"
              />
              <span className="ml-2">10 de Diciembre 2024</span>
            </label>
          </div>
        </div>
        <hr className="mb-6 border-secondaryPurple" />
        <div className="mb-6">
          <p className="mb-4">Selecciona el tipo de pago:</p>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentType"
                value="monthly"
                checked={paymentType === 'monthly'}
                onChange={() => handlePaymentTypeChange('monthly')}
                className="form-radio text-customBlue"
              />
              <span className="ml-2">Pago mensual</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentType"
                value="permanent"
                checked={paymentType === 'permanent'}
                onChange={() => handlePaymentTypeChange('permanent')}
                className="form-radio text-customBlue"
              />
              <span className="ml-2">Pago permanente</span>
            </label>
          </div>
        </div>
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

export default CourseStartDate;
