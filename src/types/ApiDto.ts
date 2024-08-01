export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiError {
  message: string;
  status?: number;
}
