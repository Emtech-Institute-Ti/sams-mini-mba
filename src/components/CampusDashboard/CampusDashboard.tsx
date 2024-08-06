import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { logouclx } from '../../utils/images';

const CampusDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 flex flex-col items-center lg:items-start">
        <div className="flex justify-center mb-8">
          <img src={logouclx} alt="UCLX" className="h-12" />
        </div>
        <nav className="space-y-4 w-full lg:w-auto">
          <NavLink
            to="/campusdashboard/account"
            className={({ isActive }) =>
              `block text-center font-bold py-2 px-4 rounded-full ${
                isActive
                  ? 'text-secondaryPurple border-2 border-secondaryPurple bg-white shadow-md'
                  : 'text-gray-700 bg-white shadow-md'
              }`
            }
          >
            Mi curso
          </NavLink>
          <NavLink
            to="/campusdashboard/payment-history"
            className={({ isActive }) =>
              `block text-center font-bold py-2 px-4 rounded-full ${
                isActive
                  ? 'text-secondaryPurple border-2 border-secondaryPurple bg-white shadow-md'
                  : 'text-gray-700 bg-white shadow-md'
              }`
            }
          >
            Historial de pagos
          </NavLink>
          <NavLink
            to="/campusdashboard/payment"
            className={({ isActive }) =>
              `block text-center font-bold py-2 px-4 rounded-full ${
                isActive
                  ? 'text-secondaryPurple border-2 border-secondaryPurple bg-white shadow-md'
                  : 'text-gray-700 bg-white shadow-md'
              }`
            }
          >
            Pagar
          </NavLink>
          <NavLink
            to="/campusdashboard/moodle"
            className="block text-center bg-secondaryPurple text-white py-2 px-4 rounded-full hover:bg-secondaryPurple-dark transition duration-300 w-full lg:w-auto"
          >
              Ir a mi curso
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default CampusDashboard;
