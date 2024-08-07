import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { growthbanner, growthresp } from '../../utils/images';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';
import HeroSection from '../../components/HeroSection/HeroSection';
import GrowthInfoSection from '../../components/GrowthInfoSection/GrowthInfoSection';
import GrowthOwnerSection from '../../components/GrowthOwnerSection/GrowthOwnerSection';
import GrowthPathSection from '../../components/GrowthPathSection/GrowthPathSection';
// import InvestmentCard from '../../components/InvestmentCard/InvestmentCard';

const GrowthCoursePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection
        desktopBackgroundImage={growthbanner}
        mobileBackgroundImage={growthresp}
        altText="Main Banner"
      />
      <GrowthInfoSection />
      <GrowthOwnerSection />
      <GrowthPathSection />
      {/* <InvestmentCard  /> */}
      <Footer />
      <WhatsappSupport />
    </div>
  );
};

export default GrowthCoursePage;
