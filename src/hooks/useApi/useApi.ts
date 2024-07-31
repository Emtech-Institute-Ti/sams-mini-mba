// src/hooks/useApi.ts
import { useState, useEffect } from 'react';
import apiRequest from '../../api/apiRequest';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useApi = <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body?: any
) => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiRequest<T>(method, endpoint, body);
        setResponse({ data: result.data, loading: false, error: null });
      } catch (error: any) {
        setResponse({ data: null, loading: false, error: error.message });
      }
    };

    fetchData();
  }, [method, endpoint, body]);

  return response;
};

export default useApi;
