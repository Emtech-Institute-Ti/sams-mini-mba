import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, StudentPaymentsResponse } from '../../types/ApiDto';

const useStudentPayments = (): [
  (studentId: number) => Promise<void>,
  ApiResponse<StudentPaymentsResponse>,
] => {
  const [response, setResponse] = useState<
    ApiResponse<StudentPaymentsResponse>
  >({
    data: null,
    loading: false,
    error: null,
  });

  const fetchStudentPayments = async (studentId: number): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<StudentPaymentsResponse>(
        'POST',
        '/api/payments/student',
        { studentId }
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

  return [fetchStudentPayments, response];
};

export default useStudentPayments;
