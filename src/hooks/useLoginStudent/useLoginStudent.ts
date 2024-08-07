import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import {
  ApiResponse,
  LoginStudentPayload,
  LoginResponse,
} from '../../types/ApiDto';

const useLoginStudent = (): [
  (loginData: LoginStudentPayload) => Promise<ApiResponse<LoginResponse>>,
  ApiResponse<LoginResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<LoginResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const loginStudent = async (
    loginData: LoginStudentPayload
  ): Promise<ApiResponse<LoginResponse>> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<LoginResponse>(
        'POST',
        '/api/students/login',
        loginData
      );
      const apiResponse = { data: result.data, loading: false, error: null };
      setResponse(apiResponse);
      return apiResponse;
    } catch (error: unknown) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || 'API request error'
        : 'Error al intentar iniciar sesión.';
      const apiResponse = { data: null, loading: false, error: errorMessage };
      setResponse(apiResponse);
      return apiResponse;
    }
  };

  return [loginStudent, response];
};

export default useLoginStudent;
