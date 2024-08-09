import { useMutation } from '@tanstack/react-query';
import apiRequest from '../../api/apiRequest';
import { BarcodeResponse, ApiError } from '../../types/ApiDto';

export const generateBarcode = async (id: number): Promise<BarcodeResponse> => {
  const result = await apiRequest<BarcodeResponse>(
    'GET',
    `/api/payments/barcode/${id}`
  );
  return result.data;
};

export const useGenerateBarcode = () => {
  return useMutation<BarcodeResponse, ApiError, number>({
    mutationFn: generateBarcode,
  });
};

export default useGenerateBarcode;
