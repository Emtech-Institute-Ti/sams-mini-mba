import React from 'react';
import { growthlogo } from '../../utils/images';

const DateSelection: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white p-8 shadow-lg rounded-lg">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={growthlogo}
          alt="Growth Accelerator Logo"
          className="mx-auto mb-4"
        />
        <p className="text-gray-700">
          Te preparamos para liderar con visión estratégica en un mercado
          competitivo. Inscríbete hoy y sé parte de una comunidad dedicada al
          desarrollo empresarial.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-xl font-bold text-customBlue mb-4">
          Selecciona una fecha de inicio
        </h3>
        <p className="text-gray-700 mb-4">Próxima fecha de inicio:</p>
        <label className="block mb-4">
          <input type="radio" name="date" value="2024-09-10" checked /> 10 de
          Septiembre 2024
        </label>
        <p className="text-gray-700 mb-4">Siguientes fechas:</p>
        <label className="block mb-2">
          <input type="radio" name="date" value="2024-10-10" /> 10 de Octubre
          2024
        </label>
        <label className="block mb-2">
          <input type="radio" name="date" value="2024-11-10" /> 10 de Noviembre
          2024
        </label>
        <label className="block mb-2">
          <input type="radio" name="date" value="2024-12-10" /> 10 de Diciembre
          2024
        </label>
        <button className="bg-customBlue text-white px-6 py-3 rounded-lg mt-4">
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DateSelection;
