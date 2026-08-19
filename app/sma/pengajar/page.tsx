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

export default function PengajarSmaPage() {
  const dataGuru = [
    { nama: "Ustadz Ibrahim, M.Si", peran: "Kepala Sekolah & Guru Fisika", gender: "M" },
    { nama: "Ustazah Aini, M.Pd", peran: "Wakasek Kurikulum & Biologi", gender: "F" },
    { nama: "Ustadz Yasin, Lc. MA", peran: "Guru PAI & Bahasa Arab Tingkat Lanjut", gender: "M" },
    { nama: "Ustadz Danang, M.Pd", peran: "Guru Kimia & Koordinator Sukses UTBK", gender: "M" },
    { nama: "Ustazah Maya, M.Sc", peran: "Guru Matematika Peminatan & Riset KIR", gender: "F" },
    { nama: "Ustadz Thoriq, S.Pd", peran: "Guru Bimbingan Konseling & Karir PTN", gender: "M" },
    { nama: "Ustadz Rahmat, M.Kom", peran: "Guru Informatika, AI & Cyber Security", gender: "M" },
    { nama: "Ustazah Salsabila, M.Pd", peran: "Guru Bahasa Inggris (TOEFL & IELTS Prep)", gender: "F" },
    { nama: "Ustadz Munir, M.Pd", peran: "Guru Bahasa Indonesia & Debat Kritis", gender: "M" },
    { nama: "Ustazah Kartika, M.Si", peran: "Guru Fisika Terapan & Laboratorium", gender: "F" },
    { nama: "Ustadz Haryono, M.Pd", peran: "Guru Matematika Dasar & Logika Skolastik", gender: "M" },
    { nama: "Ustazah Nabila, M.Sc", peran: "Guru Biologi Molekuler & Genetika", gender: "F" },
    { nama: "Ustadz Luqman, M.Si", peran: "Guru Kimia Organik & Olimpiade Sains", gender: "M" },
    { nama: "Ustazah Fatma, M.Pd", peran: "Guru Ekonomi Akuntansi & Pasar Modal", gender: "F" },
    { nama: "Ustadz Guntur, M.Pd", peran: "Guru Sosiologi & Riset Humaniora", gender: "M" },
    { nama: "Ustazah Nadia, S.Pd", peran: "Guru Geografi & Sistem Informasi Geografis", gender: "F" },
    { nama: "Ustadz Wildan, M.Pd.I", peran: "Guru Sejarah Indonesia & Dunia Islam", gender: "M" },
    { nama: "Ustazah Citra, S.Pd", peran: "Guru PPKn & Hukum Tata Negara", gender: "F" },
    { nama: "Ustadz Fajar, S.Pd.Jas", peran: "Guru Olahraga & Pelatih Atletik", gender: "M" },
    { nama: "Ustazah Hanum, S.Sn", peran: "Guru Seni Budaya & Desain Kreatif", gender: "F" },
    { nama: "Ustadz Abdullah, Lc", peran: "Guru Fiqih Muamalah & Ushul Fiqih", gender: "M" },
    { nama: "Ustazah Maryam, Lc. M.Ag", peran: "Guru Ulumul Qur'an & Hadits Tematik", gender: "F" },
    { nama: "Ustadz Syamsul, S.Pd.I", peran: "Koordinator Tahfidz Al-Qur'an 30 Juz", gender: "M" },
    { nama: "Ustazah Aulia, S.Psi", peran: "Konselor Psikologi Remaja & Minat Bakat", gender: "F" },
    { nama: "Ustadz Vicky, S.Pd", peran: "Pembina OSIS & Kepemimpinan Siswa", gender: "M" },
    { nama: "Ustazah Indah, S.Pd", peran: "Pembina Ekstrakurikuler Karya Ilmiah Remaja", gender: "F" },
    { nama: "Ustadz Ridho, S.Kom", peran: "Pembina Robotika & IoT Competition", gender: "M" },
    { nama: "Ustazah Tari, S.Pd", peran: "Pembina Pramuka Penegak Bantara", gender: "F" },
    { nama: "Ustadz Salman, S.Pd", peran: "Koordinator Tryout UTBK & SNBP/SNBT", gender: "M" },
    { nama: "Ustazah Wanda, M.Pd", peran: "Koordinator Program Beasiswa Luar Negeri", gender: "F" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 w-full space-y-10">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/sma" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke Profil SMA
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span className="text-amber-400 text-5xl">👩‍🏫</span> Dewan Tenaga Pendidik SMA (30 Guru)
          </h1>
          <p className="text-emerald-50 text-xl sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Pendidik profesional berkualifikasi Magister & Sarjana berpengalaman yang siap mengantarkan santri tembus PTN favorit.
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