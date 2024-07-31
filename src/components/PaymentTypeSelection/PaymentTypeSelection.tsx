import React from 'react';

const PaymentTypeSelection: React.FC = () => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold text-customBlue mb-4">
        Selecciona el tipo de pago
      </h2>
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center">
          <img
            src="path/to/icon1.png"
            alt="Icon Pago mensual"
            className="mb-2"
          />
          <button className="bg-customBlue text-white px-6 py-3 rounded-lg">
            Pago mensual
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/icon2.png" alt="Icon Único pago" className="mb-2" />
          <button className="bg-customBlue text-white px-6 py-3 rounded-lg">
            Único pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTypeSelection;
