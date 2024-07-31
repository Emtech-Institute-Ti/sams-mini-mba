import { useState } from 'react';
import apiRequest from '../../api/apiRequest';

interface ValidateFolioTicketPayload {
  folio: string;
  ticketNumber: string;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useValidateFolioTicket = (): [
  (payload: ValidateFolioTicketPayload) => Promise<ApiResponse<null>>,
  ApiResponse<null>,
] => {
  const [response, setResponse] = useState<ApiResponse<null>>({
    data: null,
    loading: false,
    error: null,
  });

  const validateFolioTicket = async (
    payload: ValidateFolioTicketPayload
  ): Promise<ApiResponse<null>> => {
    setResponse({ data: null, loading: true, error: null });
    try {
      const result = await apiRequest<null>(
        'POST',
        '/api/payments/validate/folio-ticket',
        payload
      );
      setResponse({ data: result.data, loading: false, error: null });
      return { data: result.data, loading: false, error: null };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'API request error';
      setResponse({ data: null, loading: false, error: errorMessage });
      return { data: null, loading: false, error: errorMessage };
    }
  };

  return [validateFolioTicket, response];
};

export default useValidateFolioTicket;
