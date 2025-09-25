
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from './Lightbox';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Galeri Kegiatan Sekolah</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {GALLERY_IMAGES.map((image, index) => (
          <div key={index} className="text-center">
            <div 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg" 
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.description} 
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 font-semibold text-gray-700">{image.description}</p>
          </div>
        ))}
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />}
    </div>
  );
};

export default GalleryPage;
