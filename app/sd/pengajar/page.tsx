'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function MuslimAvatar() {
  return (
    <div className="w-full h-full bg-[#0d4738] flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-28 h-28 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <circle cx="50" cy="45" r="16" fill="#fef3c7" />
        <path d="M34 40 C34 30, 66 30, 66 40 L66 42 L34 42 Z" fill="#064e3b" />
      </svg>
    </div>
  );
}

function MuslimahAvatar() {
  return (
    <div className="w-full h-full bg-[#0d4738] flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-28 h-28 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <path d="M50 15 C30 15, 20 30, 20 55 C20 75, 35 85, 50 85 C65 85, 80 75, 80 55 C80 30, 70 15, 50 15 Z" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
        <circle cx="50" cy="48" r="16" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export default function PengajarSdPage() {
  const dataGuru = [
    { nama: "Ustadz Ahmad, S.Pd", peran: "Kepala Sekolah SD", gender: "M" },
    { nama: "Ustazah Nabila, M.Pd", peran: "Wakasek Kurikulum & Akademik", gender: "F" },
    { nama: "Ustadz Hasan, S.Ag", peran: "Guru PAI & Koordinator Tahfidz", gender: "M" },
    { nama: "Ustazah Salwa, S.Pd", peran: "Guru Matematika & Pembina OSN", gender: "F" },
    { nama: "Ustadz Ridwan, S.Pd", peran: "Guru Bahasa Arab & Tahsin", gender: "M" },
    { nama: "Ustazah Hidayah, S.Pd", peran: "Guru IPAS & Kelas Unggulan", gender: "F" },
    { nama: "Ustadz Wildan, S.Pd", peran: "Wali Kelas 1A (Fase Fondasi)", gender: "M" },
    { nama: "Ustazah Laila, S.Pd", peran: "Wali Kelas 1B (Literasi Dasar)", gender: "F" },
    { nama: "Ustadz Haris, S.Pd", peran: "Wali Kelas 2A (Numerasi Dasar)", gender: "M" },
    { nama: "Ustazah Anisa, S.Pd", peran: "Wali Kelas 2B (Adab Islami)", gender: "F" },
    { nama: "Ustadz Lukman, S.Pd.I", peran: "Wali Kelas 3A (Tahfidz Dasar)", gender: "M" },
    { nama: "Ustazah Fitri, S.Pd", peran: "Wali Kelas 3B (Sains Eksplorasi)", gender: "F" },
    { nama: "Ustadz Zainal, S.Pd", peran: "Wali Kelas 4A (Penguatan Logika)", gender: "M" },
    { nama: "Ustazah Rina, S.Pd", peran: "Wali Kelas 4B (Bahasa Indonesia)", gender: "F" },
    { nama: "Ustadz Aris, S.Pd", peran: "Wali Kelas 5A (Olimpiade IPA)", gender: "M" },
    { nama: "Ustazah Dewi, M.Pd", peran: "Wali Kelas 5B (Olimpiade Matematika)", gender: "F" },
    { nama: "Ustadz Taufik, S.Pd.I", peran: "Wali Kelas 6A (Sukses Ujian)", gender: "M" },
    { nama: "Ustazah Ratna, S.Pd", peran: "Wali Kelas 6B (Persiapan Masuk SMP)", gender: "F" },
    { nama: "Ustadz Bayu, S.Pd.Jas", peran: "Guru PJOK & Pelatih Futsal", gender: "M" },
    { nama: "Ustazah Sinta, S.Pd", peran: "Guru Bahasa Inggris Komunikatif", gender: "F" },
    { nama: "Ustadz Muhsin, S.Ag", peran: "Guru Al-Qur'an Hadits & Fiqih", gender: "M" },
    { nama: "Ustazah Maryam, S.Pd.I", peran: "Guru Sejarah Kebudayaan Islam", gender: "F" },
    { nama: "Ustadz Arif, S.Kom", peran: "Guru Komputer & TIK Dasar", gender: "M" },
    { nama: "Ustazah Hana, S.Psi", peran: "Guru Bimbingan Konseling SD", gender: "F" },
    { nama: "Ustadz Ilham, S.Pd", peran: "Guru Seni Budaya & Kaligrafi", gender: "M" },
    { nama: "Ustazah Nia, S.Pd", peran: "Guru Pembina Pramuka Siaga", gender: "F" },
    { nama: "Ustadz Dani, S.Pd", peran: "Guru Pembina Pramuka Penggalang", gender: "M" },
    { nama: "Ustazah Farah, S.Pd.I", peran: "Guru Tahfidz Juz 29", gender: "F" },
    { nama: "Ustadz Bilal, S.Pd.I", peran: "Guru Tahfidz Juz 30", gender: "M" },
    { nama: "Ustazah Maya, S.Pd", peran: "Koordinator Program Literasi & Mabit", gender: "F" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 w-full space-y-10">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/sd" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke Profil SD
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span className="text-amber-400 text-5xl">👩‍🏫</span> Dewan Tenaga Pendidik SD (30 Guru)
          </h1>
          <p className="text-emerald-50 text-xl sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Guru profesional berdedikasi tinggi dalam mendidik akademis dan membiasakan akhlak mulia santri.
          </p>
        </div>

        {/* Grid 30 Kartu Pengajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dataGuru.map((guru, i) => (
            <div key={i} className="bg-[#071E16]/90 border-2 border-emerald-500/50 hover:border-amber-400 p-8 rounded-3xl text-center group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 shadow-xl flex flex-col items-center">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/60 mb-6 shadow-xl group-hover:border-amber-400 group-hover:scale-105 transition-all">
                {guru.gender === 'M' ? <MuslimAvatar /> : <MuslimahAvatar />}
              </div>
              <h2 className="font-black text-amber-400 text-2xl sm:text-3xl mb-3 group-hover:text-amber-300 leading-snug">
                {guru.nama}
              </h2>
              <p className="text-lg sm:text-xl text-emerald-100 font-semibold leading-relaxed">
                {guru.peran}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}