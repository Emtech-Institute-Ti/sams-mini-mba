import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { logouclx, menubar } from '../../utils/images';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({
        top: document.getElementById(link)?.offsetTop ?? 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/', { state: { scrollTo: link } });
    }
  };

  const handleValidateFolio = () => {
    navigate('/register');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <img
          src={logouclx}
          alt="Logo"
          className="h-14 cursor-pointer"
          onClick={handleLogoClick}
        />
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6 mr-8">
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleLinkClick('inicio')}
              className={`cursor-pointer ${
                activeLink === 'inicio'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Inicio
            </Link>
            <Link
              to="programas"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleLinkClick('programas')}
              className={`cursor-pointer ${
                activeLink === 'programas'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Nuestros programas
            </Link>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleLinkClick('contacto')}
              className={`cursor-pointer ${
                activeLink === 'contacto'
                  ? 'text-secondaryPurple font-bold'
                  : 'text-customBlack font-medium'
              } hover:text-secondaryPurple`}
            >
              Contacto
            </Link>
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
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 right-0 h-full bg-white z-40 p-4 w-1/2 md:hidden"
      >
        <nav className="flex flex-col space-y-4">
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => handleLinkClick('inicio')}
            className={`cursor-pointer ${
              activeLink === 'inicio'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Inicio
          </Link>
          <Link
            to="programas"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => handleLinkClick('programas')}
            className={`cursor-pointer ${
              activeLink === 'programas'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Nuestros programas
          </Link>
          <Link
            to="contacto"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => handleLinkClick('contacto')}
            className={`cursor-pointer ${
              activeLink === 'contacto'
                ? 'text-secondaryPurple font-bold'
                : 'text-customBlack font-medium'
            } hover:text-secondaryPurple`}
          >
            Contacto
          </Link>
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
      </motion.div>
    </header>
  );
};

export default Header;
