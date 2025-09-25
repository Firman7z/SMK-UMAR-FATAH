import React, { useState } from 'react';
import { FACILITIES } from '../constants';
import Lightbox from './Lightbox';

const FasilitasPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Fasilitas Sekolah</h1>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
        Kami menyediakan beragam fasilitas modern dan lengkap untuk menunjang proses belajar mengajar yang efektif dan menciptakan lingkungan sekolah yang nyaman dan produktif.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES.map((facility, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div 
                className="relative overflow-hidden h-64 cursor-pointer"
                onClick={() => openLightbox(facility.imageUrl)}
            >
              <img 
                src={facility.imageUrl} 
                alt={facility.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Lihat Gambar</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
              <p className="text-gray-600 text-sm">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />}
    </div>
  );
};

export default FasilitasPage;
