// src/apiRequest.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiRequest = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        'x-api-key': 'FwNk7R}W%Sxzm9h$$D!&$eg_<L&"4*VU',
        ...config?.headers,
      },
      ...config,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'API request error');
  }
};

export default apiRequest;
