import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import {
  ResetPasswordPayload,
  ResetPasswordResponse,
} from '../../types/ApiDto';

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  const result = await apiRequest<ResetPasswordResponse>(
    'POST',
    '/api/students/reset-password',
    payload
  );
  return result.data;
};

export const useResetPassword = () => {
  return useMutation<ResetPasswordResponse, Error, ResetPasswordPayload>({
    mutationFn: resetPassword,
  });
};

export default useResetPassword;
