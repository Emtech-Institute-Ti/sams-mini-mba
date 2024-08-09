import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { VerifyTokenPayload, VerifyTokenResponse } from '../../types/ApiDto';

export const verifyToken = async (
  payload: VerifyTokenPayload
): Promise<VerifyTokenResponse> => {
  const result = await apiRequest<VerifyTokenResponse>(
    'POST',
    '/api/students/verify-reset-token',
    payload
  );
  return result.data;
};

export const useVerifyToken = () => {
  return useMutation<VerifyTokenResponse, Error, VerifyTokenPayload>({
    mutationFn: verifyToken,
  });
};

export default useVerifyToken;
