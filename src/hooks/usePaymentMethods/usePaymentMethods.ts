import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { PaymentMethodsResponse } from '../../types/ApiDto';

export const fetchPaymentMethods =
  async (): Promise<PaymentMethodsResponse> => {
    const result = await apiRequest<PaymentMethodsResponse>(
      'GET',
      '/api/payments/methods'
    );
    return result.data;
  };

export const usePaymentMethods = () => {
  return useQuery<PaymentMethodsResponse, Error>({
    queryKey: ['paymentMethods'],
    queryFn: fetchPaymentMethods,
  });
};

export default usePaymentMethods;
