import React from 'react';
import { facebook, instagram, twitter, logouclxno } from '../../utils/images';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left">
          <div className="mb-4 md:mb-0 md:w-1/4 flex flex-col items-center md:items-start">
            <img src={logouclxno} alt="Logo" className="mb-4" />
            <div className="flex flex-col items-center md:hidden">
              <a href="#inicio" className="mb-2 hover:underline">
                Inicio
              </a>
              <a href="#programas" className="mb-2 hover:underline">
                Nuestros programas
              </a>
              <a href="#contacto" className="mb-2 hover:underline">
                Contacto
              </a>
              <p className="mt-4">contacto@uclx.media</p>
              <p>Walmart Call Center: 000-000-00-00</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:space-x-8 md:w-3/4">
            <ul className="md:w-1/2">
              <li className="mb-2">
                <a href="#inicio" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#programas" className="hover:underline">
                  Nuestros programas
                </a>
              </li>
              <li className="mb-2">
                <a href="#contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="md:w-1/2 flex flex-col">
              <p>contacto@uclx.media</p>
              <p>Walmart Call Center: 000-000-00-00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] border-t border-gray-700 pt-8 pb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#999999] text-center md:text-left">
            &copy; Copyright 2024. UCLX All Right Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
            <a href="#">
              <img src={facebook} alt="Icon 1" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={twitter} alt="Icon 2" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={instagram} alt="Icon 3" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
