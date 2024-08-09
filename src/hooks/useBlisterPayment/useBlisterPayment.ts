import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import {
  BlisterPaymentPayload,
  BlisterPaymentResponse,
  ApiError,
} from '../../types/ApiDto';

export const makeBlisterPayment = async (
  payload: BlisterPaymentPayload
): Promise<BlisterPaymentResponse> => {
  const result = await apiRequest<BlisterPaymentResponse>(
    'POST',
    '/api/payments/blister',
    payload
  );
  return result.data;
};

export const useBlisterPayment = () => {
  return useMutation<BlisterPaymentResponse, ApiError, BlisterPaymentPayload>({
    mutationFn: makeBlisterPayment,
  });
};

export default useBlisterPayment;
