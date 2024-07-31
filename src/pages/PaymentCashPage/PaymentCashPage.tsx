import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';

const PaymentCashPage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${masklogin})` }}
    >
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <PaymentDetails />
      </main>
      <Footer />
    </div>
  );
};

export default PaymentCashPage;
