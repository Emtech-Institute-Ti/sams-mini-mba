import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, SubscriptionTypesResponse } from '../../types/ApiDto';

const useSubscriptionTypes = (): [
  () => Promise<void>,
  ApiResponse<SubscriptionTypesResponse>,
] => {
  const [response, setResponse] = useState<
    ApiResponse<SubscriptionTypesResponse>
  >({
    data: null,
    loading: false,
    error: null,
  });

  const fetchSubscriptionTypes = async (): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<SubscriptionTypesResponse>(
        'GET',
        '/api/courses/subscription/types'
      );
      setResponse({ data: result.data, loading: false, error: null });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResponse({
          data: null,
          loading: false,
          error: error.response?.data?.error || 'API request error',
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

  return [fetchSubscriptionTypes, response];
};

export default useSubscriptionTypes;
