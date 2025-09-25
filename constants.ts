import type { NavLink, Major, Facility, GalleryImage } from './types';

// FIX: Add navigation link for the Gallery page.
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '#home' },
  { name: 'Tentang', path: '#tentang' },
  { name: 'Jurusan', path: '#jurusan' },
  { name: 'Fasilitas', path: '#fasilitas' },
  { name: 'Galeri', path: '#galeri' },
  { name: 'Daftar', path: '#daftar' },
];

export const MAJORS: Major[] = [
  {
    id: 'tkj',
    name: 'TKJ',
    fullName: 'Teknik Komputer & Jaringan',
    description: 'Mempelajari perakitan komputer, instalasi software, dan pengelolaan jaringan komputer skala kecil hingga besar. Lulusan siap menjadi teknisi jaringan handal.',
    imageUrl: 'https://raw.githubusercontent.com/Firman7z/SMK-UMAR-FATAH/main/images/TKJ.jpg
',
  },
  {
    id: 'rpl',
    name: 'RPL',
    fullName: 'Rekayasa Perangkat Lunak',
    description: 'Fokus pada pengembangan software, mulai dari aplikasi web, mobile, hingga desktop. Siswa akan belajar bahasa pemrograman modern dan proses pengembangan software.',
    imageUrl: 'https://raw.githubusercontent.com/Firman7z/SMK-UMAR-FATAH/main/images/RPL.jpg',
  },
  {
    id: 'dkv',
    name: 'DKV',
    fullName: 'Desain Komunikasi Visual',
    description: 'Mengasah kreativitas dalam menyampaikan pesan melalui media visual, seperti desain grafis, ilustrasi, fotografi, dan videografi untuk berbagai kebutuhan industri.',
    imageUrl: 'https://raw.githubusercontent.com/Firman7z/SMK-UMAR-FATAH/main/images/DKV1.jpg',
  },
  {
    id: 'tsm',
    name: 'TSM',
    fullName: 'Teknik & Bisnis Sepeda Motor',
    description: 'Membekali siswa dengan pengetahuan dan keterampilan dalam perawatan, perbaikan, dan manajemen bisnis sepeda motor sesuai standar industri otomotif.',
    imageUrl: 'https://raw.githubusercontent.com/Firman7z/SMK-UMAR-FATAH/main/images/TSM.jpg',
  },
];

export const FACILITIES: Facility[] = [
  {
    name: 'Laboratorium Komputer',
    description: 'Dilengkapi dengan puluhan PC modern dan koneksi internet cepat untuk mendukung praktik siswa TKJ dan RPL.',
    imageUrl: 'https://raw.githubusercontent.com/Firman7z/SMK-UMAR-FATAH/main/images/LAB.jpg',
  },
  {
    name: 'Bengkel TSM Modern',
    description: 'Peralatan lengkap dan sesuai standar industri untuk praktik siswa Teknik & Bisnis Sepeda Motor.',
    imageUrl: '/images/bengkel.jpg',
  },
  {
    name: 'Perpustakaan & Ruang Baca',
    description: 'Koleksi buku yang beragam dan ruang baca yang nyaman untuk mendukung kegiatan literasi siswa.',
    imageUrl: '/images/perpus.jpg',
  },
  {
    name: 'Lapangan Olahraga',
    description: 'Area multifungsi untuk berbagai kegiatan olahraga seperti futsal, basket, dan upacara bendera.',
    imageUrl: '/images/Futsal.jpg'
  }
];

// FIX: Change to an array of objects to include descriptions.
export const GALLERY_IMAGES: GalleryImage[] = [
  { 
    src: '/images/Kunjungan2.jpg',
    description: 'Kunjungan Industri'
  },
  { 
    src: '/images/Kunjungan1.jpg',
    description: 'Kunjungan Industri'
  },
  { 
    src: '/images/KARNAVAL1.jpg',
    description: 'Karnaval'
  },
  { 
    src: '/images/upacara.jpeg',
    description: 'Upacara Bendera'
  },
];