import React from 'react';
import PaymentTypeSelection from '../../components/PaymentTypeSelection/PaymentTypeSelection';

const PaymentTypePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PaymentTypeSelection />
    </div>
  );
};

export default PaymentTypePage;
