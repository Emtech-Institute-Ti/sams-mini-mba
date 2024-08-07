import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, PaymentMethodsResponse } from '../../types/ApiDto';

const usePaymentMethods = (): [
  () => Promise<void>,
  ApiResponse<PaymentMethodsResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<PaymentMethodsResponse>>(
    {
      data: null,
      loading: false,
      error: null,
    }
  );

  const fetchPaymentMethods = async (): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<PaymentMethodsResponse>(
        'GET',
        '/api/payments/methods'
      );
      setResponse({ data: result.data, loading: false, error: null });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResponse({
          data: null,
          loading: false,
          error: error.response?.data?.error || 'API request error',
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

  return [fetchPaymentMethods, response];
};

export default usePaymentMethods;
