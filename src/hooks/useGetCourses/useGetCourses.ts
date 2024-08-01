import { useState, useEffect } from 'react';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, Course } from '../../types/ApiDto';
import axios from 'axios';

const useGetCourses = (): ApiResponse<Course[]> => {
  const [response, setResponse] = useState<ApiResponse<Course[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const result = await apiRequest<Course[]>('GET', '/api/courses');
        setResponse({ data: result.data, loading: false, error: null });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setResponse({
            data: null,
            loading: false,
            error: error.response?.data?.message || 'API request error',
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

    fetchCourses();
  }, []);

  return response;
};

export default useGetCourses;
