import { useState } from 'react';
import apiRequest from '../../api/apiRequest';

interface GenerateBarcodePayload {
  // Define the payload structure if any
}

interface Barcode {
  monthly: string;
  fully: string;
}

interface BarcodeResponse {
  success: boolean;
  course: string;
  barcodes: Barcode;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useGenerateBarcode = (): [
  (
    payload: GenerateBarcodePayload,
    type: 1 | 2
  ) => Promise<ApiResponse<BarcodeResponse>>,
  ApiResponse<BarcodeResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<BarcodeResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const generateBarcode = async (
    payload: GenerateBarcodePayload,
    type: 1 | 2
  ): Promise<ApiResponse<BarcodeResponse>> => {
    setResponse({ data: null, loading: true, error: null });
    try {
      const result = await apiRequest<BarcodeResponse>(
        'POST',
        `/api/payments/cash-payment/generate/barcode/${type}`,
        payload
      );
      setResponse({ data: result.data, loading: false, error: null });
      return { data: result.data, loading: false, error: null };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'API request error';
      setResponse({ data: null, loading: false, error: errorMessage });
      return { data: null, loading: false, error: errorMessage };
    }
  };

  return [generateBarcode, response];
};

export default useGenerateBarcode;
