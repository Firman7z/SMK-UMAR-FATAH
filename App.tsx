import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MajorsPage from './components/MajorsPage';
import FasilitasPage from './components/FasilitasPage';
import RegisterPage from './components/RegisterPage';
// FIX: Import GalleryPage to integrate it into the app.
import GalleryPage from './components/GalleryPage';
import type { Page } from './types';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'Tentang':
        return <AboutPage />;
      case 'Jurusan':
        return <MajorsPage />;
      case 'Fasilitas':
        return <FasilitasPage />;
      // FIX: Add case to render GalleryPage.
      case 'Galeri':
        return <GalleryPage />;
      case 'Daftar':
        return <RegisterPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        navLinks={NAV_LINKS}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer 
        navLinks={NAV_LINKS}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default App;