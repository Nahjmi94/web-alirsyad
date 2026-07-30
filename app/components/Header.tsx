'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter(); // Tambahan untuk fungsi tombol kembali

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071E16]/95 backdrop-blur-md border-b border-emerald-800/40 shadow-xl">
      
      {/* RUNNING TEXT */}
      <div className="bg-amber-400 text-emerald-950 font-extrabold text-[11px] sm:text-xs py-1.5 overflow-hidden whitespace-nowrap shadow-inner">
        <div className="inline-block animate-marquee uppercase tracking-wider">
          ✨ Selamat Datang di Website Resmi Direktorat Pendidikan Al-Irsyad Al-Islamiyyah Kota Pekalongan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          🚀 Pendaftaran Peserta Didik Baru (PPDB) Telah Dibuka! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          🌟 Cetak Generasi Unggul, Berprestasi, dan Berakhlakul Karimah Bersama Kami!
        </div>
      </div>

      {/* NAVBAR UTAMA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 sm:h-20">
        
        {/* LOGO YAYASAN & TOMBOL KEMBALI + HOME */}
        <div className="flex items-center gap-4 h-full py-2">
          <Link href="/" className="flex items-center group h-full">
            <img 
              src="/logo-yayasan.png" 
              alt="Logo Yayasan Al-Irsyad" 
              className="h-full w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300 drop-shadow-md" 
            />
          </Link>

          {/* Muncul hanya jika BUKAN di halaman utama '/' */}
          {pathname !== '/' && (
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => router.back()} 
                className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white bg-emerald-900/40 hover:bg-emerald-800/60 px-3 py-1.5 rounded-full border border-emerald-700/50 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span className="text-sm leading-none -mt-0.5">←</span> Kembali
              </button>
              
              <Link 
                href="/" 
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-900/40 hover:bg-emerald-800/60 px-3 py-1.5 rounded-full border border-emerald-700/50 transition-all duration-300 shadow-sm"
              >
                <span className="text-sm leading-none -mt-0.5">🏠</span> Home
              </Link>
            </div>
          )}
        </div>

        {/* MENU NAVIGASI KANAN */}
        <div className="hidden lg:flex items-center gap-5 text-xs font-bold text-emerald-200 h-full">
          <Link href="/" className="hover:text-amber-400 transition">Beranda</Link>
          
          {/* DROPDOWN UNIT PENDIDIKAN */}
          <div className="relative group h-full flex items-center">
            <button className="hover:text-amber-400 transition flex items-center gap-1 h-full">
              Unit Pendidikan <span className="text-[9px] mt-0.5">▼</span>
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#041a12] border border-emerald-800/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
              <Link href="/paud" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">PAUD (KB & TK)</Link>
              <Link href="/sd" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">SD Al-Irsyad</Link>
              <Link href="/smp" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">SMP Al-Irsyad</Link>
              <Link href="/sma" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">SMA Al-Irsyad</Link>
            </div>
          </div>
          
          {/* DROPDOWN FORMULIR PPDB */}
          <div className="relative group h-full flex items-center">
            <button className="hover:text-amber-400 transition flex items-center gap-1 h-full">
              Formulir PPDB <span className="text-[9px] mt-0.5">▼</span>
            </button>
            <div className="absolute top-full left-0 w-52 bg-[#041a12] border border-emerald-800/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
              <Link href="/pendaftaran/paud" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">Daftar PAUD (KB & TK)</Link>
              <Link href="/pendaftaran/sd" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">Daftar SD Al-Irsyad</Link>
              <Link href="/pendaftaran/smp" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">Daftar SMP Al-Irsyad</Link>
              <Link href="/pendaftaran/sma" className="px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-400 transition">Daftar SMA Al-Irsyad</Link>
            </div>
          </div>
          
          {/* LINK KARIR & QNA SUDAH AKTIF */}
          <Link href="/#karir" className="hover:text-amber-400 transition flex items-center gap-1">
            <span className="text-emerald-400">💼</span> Karir
          </Link>
          
          <Link href="/#qna" className="hover:text-amber-400 transition flex items-center gap-1">
            <span className="text-emerald-400">❔</span> QNA
          </Link>

        </div>

      </div>
    </header>
  );
}