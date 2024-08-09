import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { CoursesResponse } from '../../types/ApiDto';

export const fetchCourses = async (): Promise<CoursesResponse> => {
  const result = await apiRequest<CoursesResponse>('GET', '/api/courses');
  return result.data;
};

export const useGetCourses = () => {
  return useQuery<CoursesResponse, Error>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });
};

export default useGetCourses;
