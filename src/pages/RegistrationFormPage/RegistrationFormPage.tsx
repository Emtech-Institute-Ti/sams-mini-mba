import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';

const RegistrationFormPage: React.FC = () => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${masklogin})` }}
      >
        <div className="min-h-screen flex items-center justify-center pt-36 pb-24 md:pt-32 md:pb-32">
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationFormPage;
