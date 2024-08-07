import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import {
  ApiResponse,
  VerifyTokenPayload,
  VerifyTokenResponse,
} from '../../types/ApiDto';

const useVerifyToken = (): [
  (payload: VerifyTokenPayload) => Promise<void>,
  ApiResponse<VerifyTokenResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<VerifyTokenResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const verifyToken = async (payload: VerifyTokenPayload): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<VerifyTokenResponse>(
        'POST',
        '/api/students/verify-reset-token',
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

  return [verifyToken, response];
};

export default useVerifyToken;
