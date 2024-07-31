import React from 'react';
import { maskpng } from '../../utils/images';

const GrowthInvestmentSection: React.FC = () => {
  return (
    <section
      className="py-12 bg-white relative"
      style={{
        backgroundImage: `url(${maskpng})`,
        backgroundSize: 'contain', // Ajustamos el tamaño para que no se recorte
        backgroundPosition: 'bottom', // Posicionamos la imagen en la parte inferior
        backgroundRepeat: 'no-repeat', // Evitamos que la imagen se repita
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-customBlue mb-8">
          Inversión del programa
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
            <p className="text-lg text-gray-700 mb-2">Por mes:</p>
            <h3 className="text-4xl font-bold text-customBlue mb-4">$3,599</h3>
            <p className="text-gray-700 mb-6">o un pago único de $21,594</p>
            <a
              href="#"
              className="inline-block bg-customBlue text-white px-6 py-3 rounded-lg hover:bg-customBlue-dark transition duration-300"
            >
              Inscribirme
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-white opacity-30"
        style={{ zIndex: 0 }}
      ></div>
    </section>
  );
};

export default GrowthInvestmentSection;
