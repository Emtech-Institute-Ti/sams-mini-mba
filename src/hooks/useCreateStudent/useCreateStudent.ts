import { useState } from 'react';
import apiRequest from '../../api/apiRequest';

interface RegisterStudentPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  sector_company: string;
  rol_company: string;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

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
    } catch (error: any) {
      setResponse({ data: null, loading: false, error: error.message });
    }
  };

  return [registerStudent, response];
};

export default useCreateStudent;
