import React from 'react';
import type { NavLink, Page } from '../types';

interface FooterProps {
  navLinks: NavLink[];
  setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navLinks, setActivePage }) => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to top on page change
    setActivePage(page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About & Social */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'Home')} className="flex items-center space-x-2">
              <img 
              src="/images/LOGOUFA.png" 
              alt="Logo SMK Umar Fatah" 
              className="h-10 w-auto" 
              />
              <span className="text-xl font-bold text-white">SMK UMAR FATAH</span>
            </a>
            <p className="text-sm">
              Lembaga pendidikan kejuruan yang berkomitmen mencetak generasi unggul, kreatif, dan siap kerja di era digital.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/smkumarfatah?igsh=dHFzdDd5czBqYmd6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1F73rFKYnu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7.02H7.9v-2.89h2.54V9.82c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v7.02c4.77-.75 8.44-4.9 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.name)}
                    className="hover:text-green-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Rembang-Lasem No.Km. 7,5, Jetakbelah, Punjulharjo, Kec. Rembang, Kabupaten Rembang, Jawa Tengah 59219</span>
              </li>
              <li className="flex items-center">
                 <svg className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>081225040999</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Peta */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Peta Lokasi</h3>
            <div className="overflow-hidden rounded-lg shadow-md h-48">
              <iframe
                src="https://maps.google.com/maps?q=Jl.%20Rembang-Lasem%20No.Km.%207,5,%20Jetakbelah,%20Punjulharjo,%20Kec.%20Rembang,%20Kabupaten%20Rembang,%20Jawa%20Tengah%2059219&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi SMK Umar Fatah"
              ></iframe>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SMK UMAR FATAH. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;