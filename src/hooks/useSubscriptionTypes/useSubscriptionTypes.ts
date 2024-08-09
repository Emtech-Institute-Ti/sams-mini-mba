import { useQuery } from '@tanstack/react-query';
import { SubscriptionTypesResponse } from '../../types/ApiDto';
import apiRequest from '../../api/apiRequest';

export const fetchSubscriptionTypes =
  async (): Promise<SubscriptionTypesResponse> => {
    const result = await apiRequest<SubscriptionTypesResponse>(
      'GET',
      '/api/courses/subscription/types'
    );
    return result.data;
  };

export const useSubscriptionTypes = () => {
  return useQuery<SubscriptionTypesResponse, Error>({
    queryKey: ['subscriptionTypes'],
    queryFn: fetchSubscriptionTypes,
  });
};

export default useSubscriptionTypes;
