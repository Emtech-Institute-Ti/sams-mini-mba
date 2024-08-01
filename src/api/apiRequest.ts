import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import createApiInstance from './config';

const api = createApiInstance();

const apiRequest = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.request<T>({
      method,
      url,
      data,
      headers: {
        ...config?.headers,
      },
      ...config,
    });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'API request error');
    }
    throw new Error('An unknown error occurred');
  }
};

export default apiRequest;
