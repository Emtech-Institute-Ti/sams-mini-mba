import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';
import FolioForm from '../../components/FolioForm/FolioForm';

const FolioFormPage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${masklogin})` }}
    >
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <FolioForm />
      </main>
      <Footer />
    </div>
  );
};

export default FolioFormPage;
