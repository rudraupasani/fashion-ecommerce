import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUpload, FiBox, FiList, FiLogOut } from 'react-icons/fi';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Upload Products', icon: <FiUpload /> },
    { to: '/products', label: 'Products', icon: <FiBox /> },
    { to: '/orders', label: 'Order List', icon: <FiList /> },
    { to: '/logout', label: 'Logout', icon: <FiLogOut /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#1f2937] text-white shadow-lg flex flex-col z-50">
      <div className="px-6 py-6 border-b border-gray-700">
        <h1 className="text-2xl font-semibold text-white">🛍️ Admin Panel</h1>
      </div>

      <ul className="flex-1 px-4 mt-6 space-y-2">
        {navItems.map(({ to, label, icon }) => (
          <li key={to}>
            <Link
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === to
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-md font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-500 p-4 border-t border-gray-700">
        &copy; 2025 Fashion Admin
      </div>
    </div>
  );
};

export default NavBar;
