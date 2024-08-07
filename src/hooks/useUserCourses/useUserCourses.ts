import { useState } from 'react';
import axios from 'axios';
import apiRequest from '../../api/apiRequest';
import { ApiResponse, UserCoursesResponse } from '../../types/ApiDto';

const useUserCourses = (): [
  () => Promise<void>,
  ApiResponse<UserCoursesResponse>,
] => {
  const [response, setResponse] = useState<ApiResponse<UserCoursesResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchUserCourses = async (): Promise<void> => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result = await apiRequest<UserCoursesResponse>(
        'POST',
        '/api/students/user-courses',
        {}
      );
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

  return [fetchUserCourses, response];
};

export default useUserCourses;
