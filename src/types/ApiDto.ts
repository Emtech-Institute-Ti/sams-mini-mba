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

export interface RegisterStudentPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  sector_company: string;
  rol_company: string;
}

export interface Course {
  course_id: number;
  course_name: string;
  course_monthly_payment: string;
  course_full_payment: string;
  course_next_opening_dates: string[] | null;
  course_created_at: string;
  course_updated_at: string;
  course_deleted_at: string | null;
}

export interface CourseResponse {
  course: Course;
}

export interface LoginStudentPayload {
  email: string;
  password: string;
}

export interface GenerateBarcodePayload {
  id: number;
}

export interface Barcode {
  monthly: string;
  fully: string;
}

export interface BarcodeResponse {
  success: boolean;
  course: string;
  barcodes: Barcode;
}

export interface VerifyTokenPayload {
  email: string;
  token: string;
}

export interface VerifyTokenResponse {
  message: string;
}

export interface ResetPasswordPayload {
  email: string;
  token: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}

export interface RecoverPasswordResponse {
  message: string;
}
