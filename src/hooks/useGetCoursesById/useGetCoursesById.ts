import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { CourseResponse, ApiError } from '../../types/ApiDto';

export const fetchCourseById = async (id: number): Promise<CourseResponse> => {
  const result = await apiRequest<CourseResponse>('GET', `/api/courses/${id}`);
  return result.data;
};

export const useGetCoursesById = (id: number) => {
  return useQuery<CourseResponse, ApiError>({
    queryKey: ['course', id],
    queryFn: () => fetchCourseById(id),
  });
};

export default useGetCoursesById;
