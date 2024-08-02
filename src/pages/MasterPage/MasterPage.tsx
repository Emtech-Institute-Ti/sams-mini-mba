import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsappSupport from '../../components/WhatsappSupport/WhatsappSupport';
import HeroSection from '../../components/HeroSection/HeroSection';
import GrowthInfoSection from '../../components/GrowhtInfo/GrowthInfo';
import GrowthOwnerSection from '../../components/GrowthOwnerSection/GrowthOwnerSection';
import GrowthPathSection from '../../components/GrowthPathSection/GrowthPathSection';
import { growthbanner, playbutton } from '../../utils/images';
import { useLocation } from 'react-router-dom';
import { Course } from '../../types/ApiDto';
import InvestmentCard from '../../components/InvestmentCard/InvestmentCard';

const MasterCoursePage: React.FC = () => {
  const location = useLocation();
  const { course: courseData } = location.state as {
    course: { course: Course };
  };
  const course = courseData.course;

  return (
    <div>
      <Header />
      <HeroSection backgroundImage={growthbanner} playButton={playbutton} />
      <GrowthInfoSection />
      <GrowthOwnerSection />
      <GrowthPathSection />
      <InvestmentCard course={course} />
      <Footer />
      <WhatsappSupport />
    </div>
  );
};

export default MasterCoursePage;
