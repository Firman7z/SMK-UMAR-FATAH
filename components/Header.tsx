import React, { useState } from 'react';
import type { NavLink, Page } from '../types';

interface HeaderProps {
  navLinks: NavLink[];
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'Home')} className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="/images/logosatu.png" 
                 alt="Logo SMK Umar Fatah" 
                 className="h-10 w-auto" 
/>
              <span className="text-xl font-bold text-gray-800">WEB Firman</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.name)}
                  className={`text-gray-600 font-medium hover:text-green-600 transition duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-green-600 after:transition-transform after:duration-300 ${activePage === link.name ? 'text-green-600 after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.name)}
                  className={`text-gray-600 font-medium hover:text-green-600 transition duration-300 ${activePage === link.name ? 'text-green-600' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;