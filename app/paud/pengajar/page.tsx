'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

export default function PengajarPaudPage() {
  const dataGuru = [
    { nama: "Ustazah Aisyah, S.Pd", peran: "Kepala Sekolah PAUD" },
    { nama: "Ustazah Fatimah, S.Pd.I", peran: "Koordinator Tahfidz & Sentra Imtaq" },
    { nama: "Ustazah Khadijah, S.Psi", peran: "Guru Bimbingan & Konseling Anak" },
    { nama: "Ustazah Maryam, S.Pd", peran: "Wali Kelas KB 1 (Kelompok Bermain)" },
    { nama: "Ustazah Salma, S.Pd", peran: "Wali Kelas KB 2 (Sentra Motorik)" },
    { nama: "Ustazah Zahra, S.Pd", peran: "Wali Kelas TK A1 (Sentra Peran)" },
    { nama: "Ustazah Aminah, S.Pd", peran: "Wali Kelas TK A2 (Sentra Balok)" },
    { nama: "Ustazah Halimah, S.Pd.I", peran: "Wali Kelas TK B1 (Sentra Bahan Alam)" },
    { nama: "Ustazah Nurul, S.Pd", peran: "Wali Kelas TK B2 (Sentra Persiapan)" },
    { nama: "Ustazah Hidayah, S.Pd", peran: "Guru Pendamping Sentra Balok" },
    { nama: "Ustazah Rania, S.Pd.I", peran: "Guru Tahfidz & Doa Harian" },
    { nama: "Ustazah Azizah, S.Pd", peran: "Guru Sentra Seni & Musik Religi" },
    { nama: "Ustazah Sabrina, S.Psi", peran: "Guru Pendamping Inklusi" },
    { nama: "Ustazah Dina, S.Pd", peran: "Guru Sentra Bahasa & Cerita" },
    { nama: "Ustazah Nadia, S.Pd", peran: "Guru Pendamping Sentra Alam" },
    { nama: "Ustazah Fauziyah, S.Pd.I", peran: "Guru Mengaji Metode Qiroati" },
    { nama: "Ustazah Safira, S.Pd", peran: "Guru Sentra Motorik Kasar" },
    { nama: "Ustazah Yasmin, S.Pd", peran: "Guru Pendamping Sentra Peran" },
    { nama: "Ustazah Maulida, S.Pd", peran: "Guru Bahasa Arab Dasar" },
    { nama: "Ustazah Fitriani, S.Pd", peran: "Guru Bahasa Inggris Interaktif" },
    { nama: "Ustazah Latifah, S.Pd.I", peran: "Guru Pembiasaan Adab Makan & Wudhu" },
    { nama: "Ustazah Syifa, S.Psi", peran: "Konsultan Tumbuh Kembang" },
    { nama: "Ustazah Dewi, S.Pd", peran: "Guru Pendamping Kelompok Bermain" },
    { nama: "Ustazah Rahmah, S.Pd", peran: "Guru Sentra Sains Cilik" },
    { nama: "Ustazah Qonita, S.Pd.I", peran: "Guru Tahfidz Juz Amma" },
    { nama: "Ustazah Naila, S.Pd", peran: "Guru Kreasi Origami & Kriya" },
    { nama: "Ustazah Tsabita, S.Pd", peran: "Guru Senam & Kebugaran Anak" },
    { nama: "Ustazah Farida, S.Pd.I", peran: "Guru Kisah Para Nabi" },
    { nama: "Ustazah Wardah, S.Pd", peran: "Guru Pendamping Persiapan Masuk SD" },
    { nama: "Ustazah Zulfa, S.Pd", peran: "Guru Koordinator Ekstrakurikuler" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 w-full space-y-10">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/paud" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke Profil PAUD
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span className="text-amber-400 text-5xl">👩‍🏫</span> Dewan Tenaga Pendidik PAUD (30 Guru)
          </h1>
          <p className="text-emerald-50 text-xl sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Para ustadzah penyayang, berdedikasi, dan bersertifikasi yang siap mendidik ananda tercinta.
          </p>
        </div>

        {/* Grid 30 Kartu Pengajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dataGuru.map((guru, i) => (
            <div key={i} className="bg-[#071E16]/90 border-2 border-emerald-500/50 hover:border-amber-400 p-8 rounded-3xl text-center group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 shadow-xl flex flex-col items-center">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/60 mb-6 shadow-xl group-hover:border-amber-400 group-hover:scale-105 transition-all">
                <MuslimahAvatar />
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