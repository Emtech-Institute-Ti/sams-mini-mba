import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onlinepayment, cashpayment } from '../../utils/images';

const PaymentMethodSelection: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleCashPaymentClick = () => {
    navigate('/paymentcash');
  };

  const handleOnlinePaymentClick = () => {
    navigate('/coursedate');
  };
  return (
    <div className="relative bg-white p-16 rounded-lg text-center w-full max-w-5xl mx-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 text-2xl"
      ></button>
      <h2 className="text-2xl font-bold text-secondaryPurple mb-8">
        ¡Registro exitoso!
      </h2>
      <hr className="my-8 border-secondaryPurple w-1/6 mx-auto" />
      <h2 className="text-2xl font-bold text-secondaryPurple mb-12">
        Selecciona el método de pago
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-center">
          <img
            src={cashpayment}
            alt="Icon Pago en caja"
            className="w-16 h-16 mb-4"
          />
          <button
            className="bg-secondaryPurple text-white px-8 py-3 rounded-full mt-4 hover:bg-customBlue-dark transition duration-300"
            onClick={handleCashPaymentClick}
          >
            Pago en caja
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={onlinepayment}
            alt="Icon Pago en línea"
            className="w-16 h-16 mb-4"
          />
          <button
            className="bg-secondaryPurple text-white px-8 py-3 rounded-full mt-4 hover:bg-customBlue-dark transition duration-300"
            onClick={handleOnlinePaymentClick}
          >
            Pago en línea
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;
