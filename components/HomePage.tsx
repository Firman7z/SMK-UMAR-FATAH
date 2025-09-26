import React, { useState } from 'react';
import { MAJORS, FACILITIES } from '../constants';
import MajorCard from './MajorCard';
import Lightbox from './Lightbox';
import type { Page } from '../types';

interface HomePageProps {
    setActivePage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const schoolImageUrl = '/images/gedungtiga.jpeg';

  return (
    <div className="animate-fade-in">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/kisatu.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Selamat Datang di SMK UMAR FATAH</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">Mencetak Generasi Unggul, Kreatif, dan Berakhlak Mulia</p>
            <button onClick={() => setActivePage('Daftar')} className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Profil Singkat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
                className="wow animate__animated animate__fadeInLeft rounded-lg shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(schoolImageUrl)}
                role="button"
                aria-label="Lihat gambar gedung sekolah"
            >
                <img 
                    src={schoolImageUrl} 
                    alt="Gedung sekolah SMK Umar Fatah dengan lapangan olahraga di depannya." 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil Singkat Sekolah</h2>
                <div className="w-24 h-1 bg-green-600 mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    SMK Umar Fatah adalah lembaga pendidikan kejuruan yang berkomitmen untuk menyediakan pendidikan berkualitas yang relevan dengan kebutuhan industri. Dengan fasilitas modern, kurikulum terupdate, dan tenaga pengajar profesional, kami siap mengantarkan siswa-siswi meraih masa depan gemilang.
                </p>
                <button onClick={() => setActivePage('Tentang')} className="bg-transparent border-2 border-green-600 text-green-600 font-bold py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
                    Selengkapnya
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visi & Misi Sekolah</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Visi</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Menghasilkan lulusan yang profesional dan kompeten di bidang teknologi informasi dan komunikasi untuk memenuhi tuntutan dunia kerja dalam negeri dan luar negeri maupun berwirausaha dalam era globalisasi, serta menjadi insan yang religius.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Misi</h3>
                    <ul className="list-none text-gray-600 space-y-2 text-left">
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Melakukan kegiatan pengembangan kurikulum.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Melakukan peningkatan proses belajar mengajar di Sekolah.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Meningkatkan kompetensi lulusan untuk setiap mata pelajaran.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Meningkatkan kompetensi keahlian peserta didik.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Meningkatkan keterserapan peserta didik di dunia kerja dan industri.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Jurusan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Program Keahlian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAJORS.map((major) => (
              <MajorCard key={major.id} major={major} />
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fasilitas Unggulan Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACILITIES.slice(0, 4).map((facility) => (
              <div key={facility.name} className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition duration-300 hover:-translate-y-2">
                <div className="overflow-hidden h-48">
                    <img src={facility.imageUrl} alt={facility.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm h-24">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default HomePage;