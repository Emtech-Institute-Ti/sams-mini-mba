import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, BarcodeResponse } from '../../types/ApiDto';

const useGenerateBarcode = (): [
  (id: number) => Promise<void>,
  ApiResponse<BarcodeResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<BarcodeResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const generateBarcode = async (id: number): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<BarcodeResponse>(
        'GET',
        `/api/payments/barcode/${id}`
      );
      setResponse({ data: result.data, loading: false, error: null });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResponse({
          data: null,
          loading: false,
          error: error.response?.data?.message || 'API request error',
        });
      } else {
        setResponse({
          data: null,
          loading: false,
          error: 'An unknown error occurred',
        });
      }
    }
  };

  return [generateBarcode, response];
};

export default useGenerateBarcode;
