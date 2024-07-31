// src/hooks/useGetCourses.ts
import { useState, useEffect } from 'react';
import apiRequest from '../../api/apiRequest';

interface Course {
  course_id: number;
  course_name: string;
  course_monthly_payment: string;
  course_full_payment: string;
  course_next_opening_dates: string[] | null;
  course_created_at: string;
  course_updated_at: string;
  course_deleted_at: string | null;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

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
      } catch (error: any) {
        setResponse({ data: null, loading: false, error: error.message });
      }
    };

    fetchCourses();
  }, []);

  return response;
};

export default useGetCourses;
