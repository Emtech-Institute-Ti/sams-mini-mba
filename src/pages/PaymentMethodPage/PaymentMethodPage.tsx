import React from 'react';
import PaymentMethodSelection from '../../components/PaymentMethodSelection/PaymentMethodSelection';

const PaymentMethodPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PaymentMethodSelection onClose={close} />
    </div>
  );
};

export default PaymentMethodPage;
