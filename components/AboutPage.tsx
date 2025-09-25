import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Tentang SMK UMAR FATAH</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Profil Sekolah</h2>
        <p className="text-gray-600 leading-relaxed">
          SMK Umar Fatah adalah institusi pendidikan kejuruan yang berdedikasi untuk menciptakan lulusan yang kompeten, siap kerja, dan berakhlak mulia. Kami mengintegrasikan kurikulum nasional dengan kebutuhan dunia industri modern, memastikan setiap siswa mendapatkan pengetahuan teoretis yang mendalam sekaligus keterampilan praktis yang relevan. Dengan dukungan fasilitas yang lengkap dan lingkungan belajar yang kondusif, kami berkomitmen untuk menjadi pusat keunggulan pendidikan kejuruan di wilayah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Visi</h2>
          <p className="text-gray-600 leading-relaxed">
            Menghasilkan lulusan yang profesional dan kompeten di bidang teknologi informasi dan komunikasi untuk memenuhi tuntutan dunia kerja dalam negeri dan luar negeri maupun berwirausaha dalam era globalisasi, serta menjadi insan yang religius.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Misi</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Melakukan kegiatan pengembangan kurikulum.</li>
            <li>Melakukan peningkatan proses belajar mengajar di Sekolah.</li>
            <li>Meningkatkan kompetensi lulusan untuk setiap mata pelajaran.</li>
            <li>Meningkatkan kompetensi keahlian peserta didik.</li>
            <li>Meningkatkan keterserapan peserta didik di dunia kerja dan industri.</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Sejarah Singkat</h2>
          <p className="text-gray-600 leading-relaxed">
          Didirikan pada tahun 2005, SMK Umar Fatah bermula dari sebuah inisiatif untuk menyediakan pendidikan kejuruan yang terjangkau dan berkualitas bagi masyarakat. Berawal dari dua program keahlian, sekolah kami terus berkembang pesat seiring dengan meningkatnya kepercayaan masyarakat dan kebutuhan industri. Kini, kami bangga memiliki empat program keahlian unggulan dengan ribuan alumni yang telah sukses berkarier di berbagai bidang.
          </p>
      </div>
    </div>
  );
};

export default AboutPage;