
import React from 'react';
import type { Major } from '../types';

interface MajorCardProps {
  major: Major;
}

const MajorCard: React.FC<MajorCardProps> = ({ major }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
      <div className="overflow-hidden">
        <img src={major.imageUrl} alt={major.name} className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{major.fullName}</h3>
        <p className="text-gray-600 text-sm h-24 overflow-hidden">{major.description}</p>
      </div>
    </div>
  );
};

export default MajorCard;
