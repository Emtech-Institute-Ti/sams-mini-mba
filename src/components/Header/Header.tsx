import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logouclx, menubar } from '../../utils/images';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('#inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Cierra el menú cuando se hace clic en un enlace
  };

  const handleValidateFolio = () => {
    navigate('/register');
    setIsMenuOpen(false); // Cierra el menú cuando se navega
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <img
          src={logouclx}
          alt="Logo"
          className="h-14 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6 mr-8">
            <a
              href="#inicio"
              onClick={() => handleLinkClick('#inicio')}
              className={`${
                activeLink === '#inicio'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Inicio
            </a>
            <a
              href="#programas"
              onClick={() => handleLinkClick('#programas')}
              className={`${
                activeLink === '#programas'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Nuestros programas
            </a>
            <a
              href="#contacto"
              onClick={() => handleLinkClick('#contacto')}
              className={`${
                activeLink === '#contacto'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Contacto
            </a>
          </nav>
          <div className="flex space-x-4 hidden md:flex">
            <button
              onClick={() => navigate('/login')}
              className="bg-secondaryPurple text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 font-medium"
            >
              Ingresar
            </button>
            <button
              onClick={handleValidateFolio}
              className="bg-secondaryPurple text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 font-medium"
            >
              Validar folio
            </button>
          </div>
          <button
            className="md:hidden text-secondaryPurple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menubar} alt="Menu Icon" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Menú Móvil */}
      <div
        className={`fixed top-16 right-0 h-full bg-white z-40 p-4 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-1/2 md:hidden`}
      >
        <nav className="flex flex-col space-y-4">
          <a
            href="#inicio"
            onClick={() => handleLinkClick('#inicio')}
            className={`${
              activeLink === '#inicio'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Inicio
          </a>
          <a
            href="#programas"
            onClick={() => handleLinkClick('#programas')}
            className={`${
              activeLink === '#programas'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Nuestros programas
          </a>
          <a
            href="#contacto"
            onClick={() => handleLinkClick('#contacto')}
            className={`${
              activeLink === '#contacto'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Contacto
          </a>
          <a
            onClick={() => navigate('/login')}
            className="text-secondaryPurple font-bold cursor-pointer hover:text-blue-800 transition duration-300"
          >
            Ingresar
          </a>
          <a
            onClick={handleValidateFolio}
            className="text-secondaryPurple font-bold cursor-pointer hover:text-blue-800 transition duration-300"
          >
            Validar folio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
