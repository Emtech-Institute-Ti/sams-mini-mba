import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { Course } from '../../types/ApiDto';

export const fetchCourses = async (): Promise<Course[]> => {
  const result = await apiRequest<Course[]>('GET', '/api/courses');
  return result.data;
};

export const useGetCourses = () => {
  return useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });
};

export default useGetCourses;
