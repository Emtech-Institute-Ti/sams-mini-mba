export const formatPrice = (price: string): string => {
  const number = parseFloat(price);
  return number.toLocaleString('en-US', { minimumFractionDigits: 0 });
};
