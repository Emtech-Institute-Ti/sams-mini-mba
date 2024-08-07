export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiError {
  error: string;
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

export interface UserCoursesResponse {
  success: boolean;
  courses: Course[];
}

export interface SubscriptionType {
  subscription_tp_id: number;
  subscription_tp_name: string;
}

export interface SubscriptionTypesResponse {
  success: boolean;
  subscriptionTypes: SubscriptionType[];
}

export interface PaymentMethod {
  payment_mt_id: number;
  payment_mt_name: string;
}

export interface PaymentMethodsResponse {
  success: boolean;
  paymentMethodTypes: PaymentMethod[];
}

export interface BlisterPaymentPayload {
  userId?: number | null;
  userEmail?: string | null;
  courseId: number;
  courseStartDate?: string | null;
  folio: string;
  ticketNumber: string;
  paymentMethodType: number;
  paymentAmount: number;
  subscriptionType: number;
}

export interface MoodleResponse {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  department: string;
  firstaccess: number;
  lastaccess: number;
  auth: string;
  suspended: boolean;
  confirmed: boolean;
  lang: string;
  theme: string;
  timezone: string;
  mailformat: number;
  profileimageurlsmall: string;
  profileimageurl: string;
}

export interface BlisterPaymentResponse {
  success: boolean;
  message: string;
  paymentId: number;
  subscriptionId: number;
  moodleResponse: MoodleResponse;
}

export interface Subscription {
  subscription_start_date: string;
  subscription_end_date: string;
  course: Course;
}

export interface Payment {
  payment_id: number;
  payment_amount: string;
  payment_method_type: number;
  payment_created_at: string;
  subscription: Subscription;
}

export interface StudentPaymentsResponse {
  success: boolean;
  payments: Payment[];
}
