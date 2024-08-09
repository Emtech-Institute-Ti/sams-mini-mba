import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { StudentPaymentsResponse, ApiError } from '../../types/ApiDto';

export const fetchStudentPayments = async (
  studentId: number
): Promise<StudentPaymentsResponse> => {
  const result = await apiRequest<StudentPaymentsResponse>(
    'POST',
    '/api/payments/student',
    { studentId }
  );
  return result.data;
};

export const useStudentPayments = () => {
  return useMutation<StudentPaymentsResponse, ApiError, number>({
    mutationFn: fetchStudentPayments,
  });
};

export default useStudentPayments;
