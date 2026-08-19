'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [ppdbDropdownOpen, setPpdbDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#115e4f]/95 backdrop-blur-md border-b-2 border-emerald-400/40 shadow-2xl">
      
      {/* 1. RUNNING TEXT MARQUEE */}
      <div className="bg-[#0d4738] text-amber-400 font-black text-xs sm:text-sm py-2 overflow-hidden whitespace-nowrap shadow-inner border-b border-emerald-600/50">
        <div className="inline-block animate-marquee uppercase tracking-wider">
          ✨ Selamat Datang di Website Resmi Direktorat Pendidikan Al-Irsyad Al-Islamiyyah Kota Pekalongan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          🚀 Pendaftaran Peserta Didik Baru (PPDB) Telah Dibuka! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          🌟 Cetak Generasi Unggul, Berprestasi, dan Berakhlakul Karimah Bersama Kami!
        </div>
      </div>

      {/* 2. AREA LOGO UTAMA DI TENGAH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between relative">
        
        {/* TOMBOL KEMBALI & HOME DI DESKTOP (FONT BESAR & TEBAL) */}
        <div className="w-1/4 hidden md:flex items-center gap-3">
          {pathname !== '/' && (
            <>
              <button 
                onClick={() => router.back()} 
                className="flex items-center gap-2 text-base lg:text-lg font-black text-amber-400 hover:text-emerald-950 bg-[#0d4738] hover:bg-amber-400 px-5 py-2.5 rounded-2xl border-2 border-emerald-400/80 hover:border-amber-400 transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="text-xl leading-none">←</span> Kembali
              </button>
              <Link 
                href="/" 
                className="flex items-center gap-2 text-base lg:text-lg font-black text-white hover:text-emerald-950 bg-[#0d4738] hover:bg-emerald-300 px-5 py-2.5 rounded-2xl border-2 border-emerald-400/80 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <span className="text-xl leading-none">🏠</span> Home
              </Link>
            </>
          )}
        </div>

       {/* LOGO UKURAN PAS & LEBIH RAMPING */}
        <div className="flex-1 flex justify-center py-0.5">
          <Link 
            href="/" 
            className="group flex items-center justify-center bg-white px-2 sm:px-4 py-0.5 rounded-xl border-2 border-emerald-400 shadow-lg w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src="/logo-yayasan.png" 
              alt="Logo Yayasan Al-Irsyad & Kemendikbud" 
              // Logo tetap besar dengan max-h yang sama, tapi background kotaknya mengecil
              className="w-full h-auto max-h-12 sm:max-h-16 md:max-h-20 object-contain drop-shadow-sm" 
            />
          </Link>
        </div>

        {/* TOMBOL HAMBURGER MOBILE (KHUSUS TAMPILAN HP) */}
        <div className="w-1/4 flex justify-end lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-2xl bg-[#0d4738] text-amber-400 border-2 border-emerald-400/80 shadow-lg cursor-pointer flex items-center justify-center hover:bg-[#115e4f] transition-all"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? (
              <span className="text-2xl font-black leading-none block">✕</span>
            ) : (
              <span className="text-2xl font-black leading-none block">☰</span>
            )}
          </button>
        </div>

        {/* Spacer Kanan Desktop */}
        <div className="w-1/4 hidden lg:block"></div>

      </div>

      {/* 3. MENU NAVIGASI UTAMA DESKTOP (BARIS KEDUA) */}
      <div className="hidden lg:flex items-center justify-center gap-10 text-lg font-black text-emerald-50 py-3 border-t border-emerald-600/40 bg-[#0d4738]/60 w-full">
        <Link 
          href="/" 
          className="hover:text-amber-400 transition-colors py-1"
        >
          Beranda
        </Link>
        
        {/* DROPDOWN UNIT PENDIDIKAN (DESKTOP) */}
        <div className="relative group flex items-center">
          <button className="hover:text-amber-400 transition-colors flex items-center gap-2 cursor-pointer py-1">
            Unit Pendidikan <span className="text-xs">▼</span>
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0d4738] border-2 border-emerald-400/80 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden p-2.5 z-50 mt-1">
            <Link href="/paud" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">PAUD (KB & TK)</Link>
            <Link href="/sd" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">SD Al-Irsyad</Link>
            <Link href="/smp" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">SMP Al-Irsyad</Link>
            <Link href="/sma" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">SMA Al-Irsyad</Link>
          </div>
        </div>
        
        {/* DROPDOWN FORMULIR PPDB (DESKTOP) */}
        <div className="relative group flex items-center">
          <button className="hover:text-amber-400 transition-colors flex items-center gap-2 cursor-pointer py-1">
            Formulir PPDB <span className="text-xs">▼</span>
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0d4738] border-2 border-emerald-400/80 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden p-2.5 z-50 mt-1">
            <Link href="/pendaftaran/paud" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">Daftar PAUD (KB & TK)</Link>
            <Link href="/pendaftaran/sd" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">Daftar SD Al-Irsyad</Link>
            <Link href="/pendaftaran/smp" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">Daftar SMP Al-Irsyad</Link>
            <Link href="/pendaftaran/sma" className="px-4 py-3 rounded-xl font-bold text-base text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">Daftar SMA Al-Irsyad</Link>
          </div>
        </div>
        
        <Link 
          href="/#karir" 
          className="hover:text-amber-400 transition-colors flex items-center gap-2 py-1"
        >
          <span className="text-emerald-300">💼</span> Karir
        </Link>
        
        <Link 
          href="/#qna" 
          className="hover:text-amber-400 transition-colors flex items-center gap-2 py-1"
        >
          <span className="text-emerald-300">❔</span> QNA
        </Link>
      </div>

      {/* 4. MENU MOBILE / HP (LEGA, RAPI, FONT BESAR) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071E16] border-b-4 border-amber-400 px-6 py-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          
          {/* Tombol Kembali & Home Khusus HP */}
          {pathname !== '/' && (
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-800/80">
              <button 
                onClick={() => { router.back(); setMobileMenuOpen(false); }} 
                className="flex-1 py-3 text-center text-lg font-black text-amber-400 bg-[#0d4738] rounded-2xl border-2 border-emerald-500/50 shadow-md"
              >
                ← Kembali
              </button>
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-3 text-center text-lg font-black text-white bg-[#0d4738] rounded-2xl border-2 border-emerald-500/50 shadow-md"
              >
                🏠 Home
              </Link>
            </div>
          )}

          {/* Menu Beranda Mobile */}
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-2xl font-black text-white hover:text-amber-400 py-3 px-4 bg-[#0d4738]/60 rounded-2xl border border-emerald-700/50 text-center transition-all"
          >
            Beranda
          </Link>

          {/* Dropdown Unit Pendidikan Mobile */}
          <div className="bg-[#0d4738]/60 rounded-2xl border border-emerald-700/50 overflow-hidden">
            <button 
              onClick={() => setUnitDropdownOpen(!unitDropdownOpen)} 
              className="w-full flex justify-between items-center text-2xl font-black text-white hover:text-amber-400 py-3.5 px-5"
            >
              <span>Unit Pendidikan</span>
              <span className="text-base text-amber-400">{unitDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {unitDropdownOpen && (
              <div className="p-3 pt-0 space-y-2 bg-[#071E16]/90 border-t border-emerald-800/60">
                <Link href="/paud" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» PAUD (KB & TK)</Link>
                <Link href="/sd" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» SD Al-Irsyad</Link>
                <Link href="/smp" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» SMP Al-Irsyad</Link>
                <Link href="/sma" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» SMA Al-Irsyad</Link>
              </div>
            )}
          </div>

          {/* Dropdown Formulir PPDB Mobile */}
          <div className="bg-[#0d4738]/60 rounded-2xl border border-emerald-700/50 overflow-hidden">
            <button 
              onClick={() => setPpdbDropdownOpen(!ppdbDropdownOpen)} 
              className="w-full flex justify-between items-center text-2xl font-black text-white hover:text-amber-400 py-3.5 px-5"
            >
              <span>Formulir PPDB</span>
              <span className="text-base text-amber-400">{ppdbDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {ppdbDropdownOpen && (
              <div className="p-3 pt-0 space-y-2 bg-[#071E16]/90 border-t border-emerald-800/60">
                <Link href="/pendaftaran/paud" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» Daftar PAUD</Link>
                <Link href="/pendaftaran/sd" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» Daftar SD Al-Irsyad</Link>
                <Link href="/pendaftaran/smp" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» Daftar SMP Al-Irsyad</Link>
                <Link href="/pendaftaran/sma" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-lg font-bold text-emerald-100 hover:bg-[#115e4f] hover:text-amber-400 transition">» Daftar SMA Al-Irsyad</Link>
              </div>
            )}
          </div>

          {/* Menu Karir Mobile */}
          <Link 
            href="/#karir" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-2xl font-black text-white hover:text-amber-400 py-3 px-4 bg-[#0d4738]/60 rounded-2xl border border-emerald-700/50 text-center transition-all"
          >
            💼 Karir
          </Link>

          {/* Menu QNA Mobile */}
          <Link 
            href="/#qna" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-2xl font-black text-white hover:text-amber-400 py-3 px-4 bg-[#0d4738]/60 rounded-2xl border border-emerald-700/50 text-center transition-all"
          >
            ❔ QNA
          </Link>

        </div>
      )}

    </header>
  );
}