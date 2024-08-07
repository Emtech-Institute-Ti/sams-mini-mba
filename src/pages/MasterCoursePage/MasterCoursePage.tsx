import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';
import HeroSection from '../../components/HeroSection/HeroSection';
import GrowthOwnerSection from '../../components/GrowthOwnerSection/GrowthOwnerSection';
import GrowthPathSection from '../../components/GrowthPathSection/GrowthPathSection';
import { masterbanner, masterresp } from '../../utils/images';
import { useLocation } from 'react-router-dom';
import { Course } from '../../types/ApiDto';
import InvestmentCard from '../../components/InvestmentCard/InvestmentCard';
import MasterInfoSection from '../../components/MasterInfoSection/MasterInfoSection';

const MasterCoursePage: React.FC = () => {
  const location = useLocation();
  const { course: courseData } = location.state as {
    course: { course: Course };
  };
  const course = courseData.course;

  return (
    <div>
      <Header />
      <HeroSection
        desktopBackgroundImage={masterbanner}
        mobileBackgroundImage={masterresp}
        altText="Main Banner"
      />
      <MasterInfoSection />
      <GrowthOwnerSection />
      <GrowthPathSection />
      <InvestmentCard course={course} />
      <Footer />
      <WhatsappSupport />
    </div>
  );
};

export default MasterCoursePage;
