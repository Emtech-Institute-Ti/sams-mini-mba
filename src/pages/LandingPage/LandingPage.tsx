import React from 'react';
import HeaderWithVideo from '../../components/HeaderWithVideo/HeaderWithVideo';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import InfoSection from '../../components/InfoSection/InfoSection';
import ProgramsSection from '../../components/ProgramsSection/ProgramsSection';
import Footer from '../../components/Footer/Footer';
import BenefitsCarousel from '../../components/BenefitsCarousel/BenefitsCarousel';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <InfoSection />
      <HeaderWithVideo />
      <ProgramsSection />
      <BenefitsCarousel />
      <Footer />
      <WhatsappSupport />
    </div>
  );
};

export default LandingPage;
