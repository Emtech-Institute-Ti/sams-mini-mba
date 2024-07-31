import React, { useEffect, useState } from 'react';
import { cashpayment, growthlogo } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import useGenerateBarcode from '../../hooks/useGenerateBardcode/useGenerateBardcode';


const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();
  const [generateBarcode, barcodeResponse] = useGenerateBarcode();
  const [hasFetched, setHasFetched] = useState(false);
  const [paymentType, setPaymentType] = useState<1 | 2>(1); // Default to 1

  const handlePaymentTypeChange = (type: 1 | 2) => {
    setPaymentType(type);
  };

  useEffect(() => {
    const fetchBarcode = async () => {
      const payload = {}; // Define el payload si es necesario
      await generateBarcode(payload, paymentType);
      setHasFetched(true);
    };

    if (!hasFetched) {
      fetchBarcode();
    }
  }, [generateBarcode, hasFetched, paymentType]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <img
            src={cashpayment}
            alt="Cash Payment Icon"
            className="h-16 w-16"
          />
        </div>
        <h2 className="text-xl font-bold text-secondaryPurple mb-8">
          Realizar tu pago en caja con el siguiente código:
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8 flex justify-between items-start">
          <div className="w-1/2 pr-8 border-r border-secondaryPurple">
            <p className="text-sm font-semibold mb-4">Número de folio</p>
            <img
              src={growthlogo}
              alt="Growth Accelerator Logo"
              className="h-auto w-auto mb-6"
            />
            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
              List item
              <br />
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg mb-6">
              List item
              <br />
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </p>
            {barcodeResponse.data ? (
              <img
                src={`data:image/png;base64,${barcodeResponse.data.barcodes[paymentType === 1 ? 'monthly' : 'fully']}`}
                alt="Barcode"
                className="h-auto w-auto mx-auto"
              />
            ) : (
              <p>Cargando código de barras...</p>
            )}
          </div>
        </div>
        <div className="mt-8">
          <button
            className="bg-secondaryPurple text-white px-8 py-4 rounded-full hover:bg-customBlue-dark transition duration-300"
            onClick={() => navigate('/folioform')}
          >
            Valida tu folio
          </button>
        </div>
        <div className="mt-4">
          <button
            className={`px-4 py-2 rounded-full ${paymentType === 1 ? 'bg-secondaryPurple text-white' : 'bg-gray-200'}`}
            onClick={() => handlePaymentTypeChange(1)}
          >
            Pago Mensual
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-full ${paymentType === 2 ? 'bg-secondaryPurple text-white' : 'bg-gray-200'}`}
            onClick={() => handlePaymentTypeChange(2)}
          >
            Pago Permanente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
