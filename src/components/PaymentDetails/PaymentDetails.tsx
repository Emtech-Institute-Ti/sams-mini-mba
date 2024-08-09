import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { cashpayment, growthlogo, masterlogo } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import useGenerateBarcode from '../../hooks/useGenerateBarcode/useGenerateBarcode';

const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState<1 | 2>(1);
  const [courseId, setCourseId] = useState<number>(1);
  const [barcodeCache, setBarcodeCache] = useState<{
    [key: number]: { [key: number]: string };
  }>({});

  const { mutateAsync: generateBarcode, status, error } = useGenerateBarcode();

  const isLoading = status === 'pending';
  const isError = status === 'error';

  const fetchBarcode = useCallback(async () => {
    if (!barcodeCache[courseId] || !barcodeCache[courseId][paymentType]) {
      const response = await generateBarcode(courseId);
      setBarcodeCache((prevCache) => ({
        ...prevCache,
        [courseId]: {
          ...prevCache[courseId],
          [paymentType]:
            response.barcodes[paymentType === 1 ? 'monthly' : 'fully'],
        },
      }));
    }
  }, [barcodeCache, courseId, paymentType, generateBarcode]);

  useEffect(() => {
    fetchBarcode();
  }, [fetchBarcode]);

  const barcode = useMemo(
    () =>
      barcodeCache[courseId]?.[paymentType]
        ? `data:image/png;base64,${barcodeCache[courseId][paymentType]}`
        : null,
    [barcodeCache, courseId, paymentType]
  );

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
          Realiza tu pago en caja con el siguiente código:
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8 flex justify-between items-start">
          <div className="w-1/2 pr-8 border-r border-secondaryPurple">
            <p className="text-sm font-semibold mb-4">Número de folio</p>
            <img
              src={courseId === 1 ? growthlogo : masterlogo}
              alt={
                courseId === 1
                  ? 'Growth Accelerator Logo'
                  : 'Master Management Logo'
              }
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
            {isLoading ? (
              <p>Cargando código de barras...</p>
            ) : isError ? (
              <p>Error al cargar el código de barras: {error?.message}</p>
            ) : (
              barcode && (
                <img
                  src={barcode}
                  alt="Barcode"
                  className="h-auto w-auto mx-auto"
                />
              )
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
            onClick={() => setPaymentType(1)}
          >
            Pago Mensual
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-full ${paymentType === 2 ? 'bg-secondaryPurple text-white' : 'bg-gray-200'}`}
            onClick={() => setPaymentType(2)}
          >
            Pago Permanente
          </button>
        </div>
        <div className="mt-4">
          <button
            className={`px-4 py-2 rounded-full ${courseId === 1 ? 'bg-secondaryPurple text-white' : 'bg-gray-200'}`}
            onClick={() => setCourseId(1)}
          >
            Growth Accelerator
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-full ${courseId === 2 ? 'bg-secondaryPurple text-white' : 'bg-gray-200'}`}
            onClick={() => setCourseId(2)}
          >
            Master Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
