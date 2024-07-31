import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';

const LoginPage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${masklogin})` }}
    >
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
