import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import {
  ApiResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
} from '../../types/ApiDto';

const useResetPassword = (): [
  (payload: ResetPasswordPayload) => Promise<void>,
  ApiResponse<ResetPasswordResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<ResetPasswordResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const resetPassword = async (
    payload: ResetPasswordPayload
  ): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<ResetPasswordResponse>(
        'POST',
        '/api/students/reset-password',
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

  return [resetPassword, response];
};

export default useResetPassword;
