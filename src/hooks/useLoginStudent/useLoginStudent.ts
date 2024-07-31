// src/hooks/useLoginStudent.ts
import { useState } from 'react';
import apiRequest from '../../api/apiRequest';


interface LoginStudentPayload {
  email: string;
  password: string;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useLoginStudent = (): [
  (loginData: LoginStudentPayload) => Promise<ApiResponse<null>>,
  ApiResponse<null>,
] => {
  const [response, setResponse] = useState<ApiResponse<null>>({
    data: null,
    loading: false,
    error: null,
  });

  const loginStudent = async (
    loginData: LoginStudentPayload
  ): Promise<ApiResponse<null>> => {
    setResponse({ data: null, loading: true, error: null });
    try {
      const result = await apiRequest<null>(
        'POST',
        '/api/students/login',
        loginData
      );
      setResponse({ data: result.data, loading: false, error: null });
      return { data: result.data, loading: false, error: null };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'API request error';
      setResponse({ data: null, loading: false, error: errorMessage });
      return { data: null, loading: false, error: errorMessage };
    }
  };

  return [loginStudent, response];
};

export default useLoginStudent;
