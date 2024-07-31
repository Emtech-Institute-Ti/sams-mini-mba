import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';
import HeroSection from '../../components/HeroSection/HeroSection';
import GrowthInfoSection from '../../components/GrowhtInfo/GrowthInfo';
import GrowthOwnerSection from '../../components/GrowthOwnerSection/GrowthOwnerSection';
import GrowthPathSection from '../../components/GrowthPathSection/GrowthPathSection';
import { growthbanner, playbutton } from '../../utils/images';

const MasterCoursePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection backgroundImage={growthbanner} playButton={playbutton} />
      <GrowthInfoSection />
      <GrowthOwnerSection />
      <GrowthPathSection />
      <Footer />
      <WhatsappSupport />
    </div>
  );
};

export default MasterCoursePage;
