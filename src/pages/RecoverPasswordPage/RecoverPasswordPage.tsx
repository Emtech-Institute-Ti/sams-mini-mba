import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';
import RecoverPasswordForm from '../../components/RecoverPasswordForm/RecoverPasswordForm';

const RecoverPasswordPage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${masklogin})` }}
    >
      <Header />
      <RecoverPasswordForm />
      <Footer />
    </div>
  );
};

export default RecoverPasswordPage;
