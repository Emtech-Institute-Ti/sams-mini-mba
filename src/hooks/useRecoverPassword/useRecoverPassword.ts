import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, RecoverPasswordResponse } from '../../types/ApiDto';

const useRecoverPassword = (): [
  (email: string) => Promise<void>,
  ApiResponse<RecoverPasswordResponse>,
] => {
  const [response, setResponse] = useState<
    ApiResponse<RecoverPasswordResponse>
  >({
    data: null,
    loading: false,
    error: null,
  });

  const recoverPassword = async (email: string): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<RecoverPasswordResponse>(
        'POST',
        '/api/students/request-password-reset',
        { email }
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

  return [recoverPassword, response];
};

export default useRecoverPassword;
