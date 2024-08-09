import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { LoginStudentPayload, LoginResponse } from '../../types/ApiDto';

export const loginStudent = async (
  loginData: LoginStudentPayload
): Promise<LoginResponse> => {
  const result = await apiRequest<LoginResponse>(
    'POST',
    '/api/students/login',
    loginData
  );
  return result.data;
};

export const useLoginStudent = () => {
  return useMutation<LoginResponse, Error, LoginStudentPayload>({
    mutationFn: loginStudent,
  });
};

export default useLoginStudent;
