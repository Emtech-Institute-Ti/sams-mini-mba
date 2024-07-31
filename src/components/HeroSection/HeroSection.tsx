import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  playButton: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  playButton,
}) => {
  return (
    <div className="relative">
      <img
        src={backgroundImage}
        alt="Main"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center">
          <img
            src={playButton}
            alt="Play Button"
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
