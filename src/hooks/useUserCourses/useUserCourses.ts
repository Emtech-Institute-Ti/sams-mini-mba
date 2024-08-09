import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { UserCoursesResponse } from '../../types/ApiDto';

export const fetchUserCourses = async (): Promise<UserCoursesResponse> => {
  const result = await apiRequest<UserCoursesResponse>(
    'POST',
    '/api/students/user-courses',
    {}
  );
  return result.data;
};

export const useUserCourses = () => {
  return useQuery<UserCoursesResponse, Error>({
    queryKey: ['userCourses'],
    queryFn: fetchUserCourses,
  });
};

export default useUserCourses;
