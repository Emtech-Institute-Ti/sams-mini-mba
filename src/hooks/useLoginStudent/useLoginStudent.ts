import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, LoginStudentPayload } from '../../types/ApiDto';

const useLoginStudent = (): [
  (loginData: LoginStudentPayload) => Promise<void>,
  ApiResponse<null>,
] => {
  const [response, setResponse] = useState<ApiResponse<null>>({
    data: null,
    loading: false,
    error: null,
  });

  const loginStudent = async (
    loginData: LoginStudentPayload
  ): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<null>(
        'POST',
        '/api/students/login',
        loginData
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

  return [loginStudent, response];
};

export default useLoginStudent;
