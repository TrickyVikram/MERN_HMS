import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current path

  const hideNavItems =
    location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className="container mx-auto flex items-center py-4">
      {/* Logo */}
      <h1 className="logo mr-auto text-2xl font-bold">
        <a href="/" className="text-blue-600 hover:text-blue-800">
          OnVTech Hostels
        </a>
      </h1>

      {/* Navigation Menu */}
      <nav className="nav-menu hidden lg:block">
        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="/"
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                location.pathname === '/' ? 'text-blue-600 scale-110' :  'mr-30'
              }`}
            >
              Home
            </a>
          </li>

          {/* Hide additional menu items */}
          {!hideNavItems && (
            <>
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Login Button */}
      {location.pathname !== '/login' && (
        <a
          href="/login"
          className="get-started-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-4"
        >
          Login
        </a>
      )}

      {/* SignUp Button */}
      {location.pathname !== '/signup' && (
        <a
          href="/signup"
          className="get-started-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-4"
        >
          SignUp
        </a>
      )}
    </div>
  );
};

export default Navbar;
