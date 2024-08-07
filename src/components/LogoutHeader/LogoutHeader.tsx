import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logouclx } from '../../utils/images';

const LogoutHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <img
          src={logouclx}
          alt="Logo"
          className="h-14 cursor-pointer"
          onClick={() => navigate('/login')}
        />
        <button
          onClick={handleLogoutClick}
          className="bg-secondaryPurple text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 font-medium"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default LogoutHeader;
