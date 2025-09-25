
import React, { useEffect } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <img src={imageUrl} alt="Enlarged view" className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg" />
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 text-white bg-gray-800 rounded-full h-10 w-10 flex items-center justify-center text-2xl hover:bg-red-600 transition-colors"
          aria-label="Close lightbox"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
