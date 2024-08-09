import React from 'react';
import DateSelection from '../../components/DateSelection/DateSelection';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DateSelectionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <DateSelection />
      </main>
      <Footer />
    </div>
  );
};

export default DateSelectionPage;
