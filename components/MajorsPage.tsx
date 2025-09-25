
import React from 'react';
import { MAJORS } from '../constants';

const MajorsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Program Keahlian Unggulan</h1>
      <div className="space-y-12">
        {MAJORS.map((major, index) => (
          <div key={major.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
              <img src={major.imageUrl} alt={major.fullName} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <span className="text-green-600 font-bold text-lg">{major.name}</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-1 mb-4">{major.fullName}</h2>
              <p className="text-gray-600 leading-relaxed">
                {major.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorsPage;
