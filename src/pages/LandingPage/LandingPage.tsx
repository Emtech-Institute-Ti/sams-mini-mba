import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderWithVideo from '../../components/HeaderWithVideo/HeaderWithVideo';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import InfoSection from '../../components/InfoSection/InfoSection';
import ProgramsSection from '../../components/ProgramsSection/ProgramsSection';
import Footer from '../../components/Footer/Footer';
import BenefitsCarousel from '../../components/BenefitsCarousel/BenefitsCarousel';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <section id="inicio">
        <Banner />
      </section>
      <InfoSection />
      <HeaderWithVideo />
      <section id="programas">
        <ProgramsSection />
      </section>
      <BenefitsCarousel />
      <section id="contacto">
        <Footer />
      </section>
      <WhatsappSupport />
    </div>
  );
};

export default LandingPage;
