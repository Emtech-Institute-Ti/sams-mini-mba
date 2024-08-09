import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { RegisterStudentPayload, ApiError } from '../../types/ApiDto';

export const registerStudent = async (
  studentData: RegisterStudentPayload
): Promise<void> => {
  await apiRequest<null>('POST', '/api/students/register', studentData);
};

export const useCreateStudent = () => {
  return useMutation<void, ApiError, RegisterStudentPayload>({
    mutationFn: registerStudent,
  });
};

export default useCreateStudent;
