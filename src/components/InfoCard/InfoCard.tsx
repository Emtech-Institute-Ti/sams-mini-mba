import React from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
      <img src={icon} alt={title} className="w-12 h-12 mr-4 mt-12" />
      <div className="text-left">
        <h3 className="text-xl font-bold text-secondaryPurple mb-2">{title}</h3>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
