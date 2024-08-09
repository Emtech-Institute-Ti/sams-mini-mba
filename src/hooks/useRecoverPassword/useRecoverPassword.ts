import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { RecoverPasswordResponse } from '../../types/ApiDto';

export const recoverPassword = async (
  email: string
): Promise<RecoverPasswordResponse> => {
  const result = await apiRequest<RecoverPasswordResponse>(
    'POST',
    '/api/students/request-password-reset',
    { email }
  );
  return result.data;
};

export const useRecoverPassword = () => {
  return useMutation<RecoverPasswordResponse, Error, string>({
    mutationFn: recoverPassword,
  });
};

export default useRecoverPassword;
