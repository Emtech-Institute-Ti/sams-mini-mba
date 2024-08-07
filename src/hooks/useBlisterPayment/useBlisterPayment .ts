import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import {
  ApiResponse,
  BlisterPaymentPayload,
  BlisterPaymentResponse,
} from '../../types/ApiDto';

const useBlisterPayment = (): [
  (payload: BlisterPaymentPayload) => Promise<void>,
  ApiResponse<BlisterPaymentResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<BlisterPaymentResponse>>(
    {
      data: null,
      loading: false,
      error: null,
    }
  );

  const makeBlisterPayment = async (
    payload: BlisterPaymentPayload
  ): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<BlisterPaymentResponse>(
        'POST',
        '/api/payments/blister',
        payload
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

  return [makeBlisterPayment, response];
};

export default useBlisterPayment;
