import React from 'react';
import { coursegrowth, coursemaster } from '../../utils/images';

const DashboardAccount: React.FC = () => {
  return (
    <div>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-customBlue mb-4">Mis cursos</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="relative w-full md:w-1/2">
            <img
              src={coursegrowth}
              alt="Growth Accelerator"
              className="w-full h-auto"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src={coursemaster}
              alt="Master Management"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-customBlue mb-12">
          Información personal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Nombre
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Nombre"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Apellido
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Apellido"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Correo electrónico"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                type="password"
                placeholder="Contraseña"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-customBlue mb-12">
          Información laboral
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Sector al que perteneces
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Sector"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
          <div>
            <label className="block text-secondaryPurple font-bold mb-2">
              Rol que desempeñas
            </label>
            <div className="relative">
              <input
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Rol"
              />
              <i className="fas fa-pen absolute top-1/2 transform -translate-y-1/2 right-4 text-secondaryPurple"></i>
            </div>
          </div>
        </div>
      </section>
      <div className="text-right mt-24">
        <button className="bg-secondaryPurple text-white py-2 px-6 rounded-full hover:bg-secondaryPurple-dark transition duration-300">
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default DashboardAccount;
