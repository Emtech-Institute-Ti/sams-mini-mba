import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

interface InfoSectionProps {
  title: string;
  description: string;
  infoItems: InfoItem[];
}

const SectionInfo: React.FC<InfoSectionProps> = ({
  title,
  description,
  infoItems,
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondaryPurple mb-4 text-center">
          {title}
        </h2>
        <p
          className="text-lg text-gray-700 mb-8 text-center py-24"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {infoItems.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
