import React from 'react';

interface HeroSectionProps {
  desktopBackgroundImage: string;
  mobileBackgroundImage: string;
  altText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  desktopBackgroundImage,
  mobileBackgroundImage,
  altText,
}) => {
  return (
    <div className="relative">
      <img
        src={desktopBackgroundImage}
        alt={altText}
        className="hidden md:block w-full h-auto object-cover"
      />
      <img
        src={mobileBackgroundImage}
        alt={altText}
        className="block md:hidden w-full h-auto object-cover"
      />
    </div>
  );
};

export default HeroSection;
