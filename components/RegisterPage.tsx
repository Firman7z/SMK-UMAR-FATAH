import React, { useState } from 'react';
import { MAJORS } from '../constants';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    major: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const selectedMajor = MAJORS.find(m => m.id === formData.major);
    const majorFullName = selectedMajor ? selectedMajor.fullName : formData.major;

    const message = `Halo, saya ingin mendaftar di SMK Umar Fatah.

Berikut adalah data pendaftaran saya:
- Nama Lengkap: ${formData.fullName}
- Email: ${formData.email}
- No. HP (WhatsApp): ${formData.phone}
- Pilihan Jurusan: ${majorFullName}

Mohon informasinya untuk langkah selanjutnya. Terima kasih.`;

    const phoneNumber = '6285385033547'; // Gunakan format internasional tanpa '+' atau '0' di depan
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-100 py-16">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Formulir Pendaftaran Online</h1>
                <p className="text-center text-gray-500 mb-8">Langkah awal menuju masa depan cerah.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor HP (WhatsApp)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="major" className="block text-sm font-medium text-gray-700">Pilihan Jurusan</label>
                        <select
                            id="major"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="" disabled>Pilih satu jurusan</option>
                            {MAJORS.map(major => (
                                <option key={major.id} value={major.id}>{major.fullName}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                        >
                            Kirim Pendaftaran via WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default RegisterPage;