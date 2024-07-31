import React from 'react';
import { whatsappsupport } from '../../utils/images';

const WhatsappSupport: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2">
      <div className="hidden md:flex items-center p-3 bg-white rounded-full shadow-lg">
        <div className="text-xs font-bold text-secondaryPurple">
          ¿En qué podemos apoyarte?
        </div>
      </div>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img
          src={whatsappsupport}
          alt="WhatsApp Icon"
          className="w-24 h-24 md:w-24 md:h-24"
        />
      </a>
    </div>
  );
};

export default WhatsappSupport;
