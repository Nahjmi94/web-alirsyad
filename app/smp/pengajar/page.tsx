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

export default function PengajarSmpPage() {
  const dataGuru = [
    { nama: "Ustadz Fauzan, M.Pd", peran: "Kepala Sekolah SMP", gender: "M" },
    { nama: "Ustazah Rahma, M.Sc", peran: "Wakasek Kurikulum & Sains", gender: "F" },
    { nama: "Ustadz Ilham, S.Ag", peran: "Guru PAI & Pembina Tahfidz Mutqin", gender: "M" },
    { nama: "Ustadz Faisal, S.Kom", peran: "Guru IT, Coding & Robotik", gender: "M" },
    { nama: "Ustazah Diana, M.Pd", peran: "Guru Bahasa Inggris Bilingual", gender: "F" },
    { nama: "Ustadz Yahya, Lc", peran: "Guru Bahasa Arab & Dirasah Islamiyah", gender: "M" },
    { nama: "Ustadz Aditya, M.Pd", peran: "Guru Matematika & Pembina OSN", gender: "M" },
    { nama: "Ustazah Fitria, S.Pd", peran: "Guru IPA Terpadu (Fisika)", gender: "F" },
    { nama: "Ustadz Hendra, S.Pd", peran: "Guru IPA Terpadu (Biologi)", gender: "M" },
    { nama: "Ustazah Mega, S.Pd", peran: "Guru Bahasa Indonesia & Jurnalistik", gender: "F" },
    { nama: "Ustadz Ridho, S.Pd", peran: "Guru IPS Terpadu & Geografi", gender: "M" },
    { nama: "Ustazah Nur, S.Pd", peran: "Guru PPKn & Pendidikan Karakter", gender: "F" },
    { nama: "Ustadz Farhan, S.Pd.Jas", peran: "Guru PJOK & Pelatih Bela Diri", gender: "M" },
    { nama: "Ustazah Erika, S.Pd", peran: "Guru Seni Budaya & Prakarya", gender: "F" },
    { nama: "Ustadz Zaki, S.Psi", peran: "Guru Bimbingan Konseling & Karir Remaja", gender: "M" },
    { nama: "Ustazah Amalia, S.Pd.I", peran: "Guru Fiqih Ibadah & Ushul Fiqih", gender: "F" },
    { nama: "Ustadz Shodiq, S.Pd.I", peran: "Guru Akidah Akhlak & Hadits", gender: "M" },
    { nama: "Ustazah Intan, S.Pd", peran: "Wali Kelas 7A (Bilingual Class)", gender: "F" },
    { nama: "Ustadz Teguh, S.Pd", peran: "Wali Kelas 7B (Tahfidz Class)", gender: "M" },
    { nama: "Ustazah Cindy, S.Pd", peran: "Wali Kelas 8A (Science Olympiad)", gender: "F" },
    { nama: "Ustadz Bagas, S.Pd", peran: "Wali Kelas 8B (IT & Leadership)", gender: "M" },
    { nama: "Ustazah Maya, M.Pd", peran: "Wali Kelas 9A (Persiapan SMA Unggulan)", gender: "F" },
    { nama: "Ustadz Danang, S.Pd", peran: "Wali Kelas 9B (Sukses Asesmen)", gender: "M" },
    { nama: "Ustazah Latifah, Lc", peran: "Guru Percakapan Bahasa Arab (Muhadatsah)", gender: "F" },
    { nama: "Ustadz Kevin, S.Hum", peran: "Guru Public Speaking (English Debate)", gender: "M" },
    { nama: "Ustazah Sarah, S.Kom", peran: "Guru Desain Grafis & Multimedia", gender: "F" },
    { nama: "Ustadz Yusuf, S.Pd.I", peran: "Pembina OSIS & LDKS SMP", gender: "M" },
    { nama: "Ustazah Melani, S.Pd", peran: "Pembina Ekstrakurikuler PMR", gender: "F" },
    { nama: "Ustadz Anwar, S.Pd", peran: "Pembina Pramuka Dewan Penggalang", gender: "M" },
    { nama: "Ustazah Bella, S.Pd", peran: "Koordinator Program Karakter & Muhadharah", gender: "F" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 w-full space-y-10">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/smp" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke Profil SMP
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span className="text-amber-400 text-5xl">👩‍🏫</span> Dewan Tenaga Pendidik SMP (30 Guru)
          </h1>
          <p className="text-emerald-50 text-xl sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Membimbing santri menjadi generasi berprestasi, berwawasan global, dan berkarakter pemimpin.
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