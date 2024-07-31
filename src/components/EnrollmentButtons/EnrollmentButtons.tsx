// src/components/EnrollmentButtons.tsx
import React from 'react';

const EnrollmentButtons: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">
        Quiero inscribirme
      </button>
      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        Quiero inscribirme
      </button>
    </div>
  );
};

export default EnrollmentButtons;
