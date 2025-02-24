import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          Recipe Village
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact_us"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile responsiveness */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu} // Toggle mobile menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link
            to="/"
            className="block text-lg text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu} // Close the menu when clicking a link
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="block text-lg text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="block text-lg text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact_us"
            className="block text-lg text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Contact 
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;