import { useState, useEffect, useCallback } from 'react';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, HttpMethod, ApiError } from '../../types/ApiDto';

const useApi = <T>(
  method: HttpMethod,
  endpoint: string,
  body?: unknown
): ApiResponse<T> => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setResponse({ data: null, loading: true, error: null });
    try {
      const result = await apiRequest<T>(method, endpoint, body);
      setResponse({ data: result.data, loading: false, error: null });
    } catch (error: unknown) {
      const apiError = error as ApiError;
      setResponse({ data: null, loading: false, error: apiError.message });
    }
  }, [method, endpoint, body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return response;
};

export default useApi;
