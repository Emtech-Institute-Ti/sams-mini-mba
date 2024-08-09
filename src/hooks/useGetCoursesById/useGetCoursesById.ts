import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { Course, ApiError } from '../../types/ApiDto';

export const fetchCourseById = async (id: number): Promise<Course> => {
  const result = await apiRequest<Course>('GET', `/api/courses/${id}`);
  return result.data;
};

export const useGetCoursesById = (id: number) => {
  return useQuery<Course, ApiError>({
    queryKey: ['course', id],
    queryFn: () => fetchCourseById(id),
  });
};

export default useGetCoursesById;
