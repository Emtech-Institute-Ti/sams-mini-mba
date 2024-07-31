import React from 'react';
import { modalbackground } from '../../utils/images';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const ModalPage: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
          <img
            src={modalbackground}
            alt="Modal Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-customBlue text-center mb-4">
              ¡Inscríbete hoy y lleva tu vida profesional al siguiente nivel!
            </h2>
            <p className="text-center text-gray-700 mb-8">
              En un entorno comercial globalizado, las PyMES mexicanas deben
              adaptarse, innovar y liderar para sobrevivir y crecer.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-customBlue rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2"
                    placeholder="Jane Jimenez"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-customBlue rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2"
                    placeholder="jane@gmail.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Ocupación</label>
                  <select className="mt-1 block w-full border border-customBlue rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2">
                    <option>Director</option>
                    <option>Gerente</option>
                    <option>Empleado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">
                    Programa de interés
                  </label>
                  <select className="mt-1 block w-full border border-customBlue rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2">
                    <option>Selecciona el programa</option>
                    <option>Growth Accelerator</option>
                    <option>Master Management</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Mensaje</label>
                <textarea
                  className="mt-1 block w-full border border-customBlue rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2"
                  placeholder="Escribe alguna duda que tengas o si deseas más información."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-secondaryPurple text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
