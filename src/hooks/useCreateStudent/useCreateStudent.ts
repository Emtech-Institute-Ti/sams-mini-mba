import { useState } from 'react';
import apiRequest from '../../api/apiRequest';
import {
  ApiResponse,
  ApiError,
  RegisterStudentPayload,
} from '../../types/ApiDto';

const useCreateStudent = (): [
  (studentData: RegisterStudentPayload) => Promise<void>,
  ApiResponse<null>,
] => {
  const [response, setResponse] = useState<ApiResponse<null>>({
    data: null,
    loading: false,
    error: null,
  });

  const registerStudent = async (studentData: RegisterStudentPayload) => {
    setResponse({ data: null, loading: true, error: null });
    try {
      await apiRequest<null>('POST', '/api/students/register', studentData);
      setResponse({ data: null, loading: false, error: null });
    } catch (error: unknown) {
      const apiError = error as ApiError;
      setResponse({ data: null, loading: false, error: apiError.message });
    }
  };

  return [registerStudent, response];
};

export default useCreateStudent;
