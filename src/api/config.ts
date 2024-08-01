import axios, { AxiosInstance } from 'axios';

const createApiInstance = (): AxiosInstance => {
  const baseURL = import.meta.env.VITE_API_BACKEND;
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!baseURL || !apiKey) {
    throw new Error('Missing API configuration');
  }

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  });
};

export default createApiInstance;
