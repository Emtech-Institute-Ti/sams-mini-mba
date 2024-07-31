import React from 'react';
import Footer from '../../components/Footer/Footer';
import { masklogin } from '../../utils/images';
import CampusDashboard from '../../components/CampusDashboard/CampusDashboard';
import LogoutHeader from '../../components/LogoutHeader/LogoutHeader';

const CampusDashboardPage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${masklogin})` }}
    >
      <LogoutHeader />
      <CampusDashboard />
      <Footer />
    </div>
  );
};

export default CampusDashboardPage;
