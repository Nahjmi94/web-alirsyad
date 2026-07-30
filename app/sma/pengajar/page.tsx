'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>{children}</div>;
}

function MuslimAvatar() {
  return (
    <div className="w-full h-full bg-emerald-900/60 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <circle cx="50" cy="45" r="16" fill="#fef3c7" />
        <path d="M34 40 C34 30, 66 30, 66 40 L66 42 L34 42 Z" fill="#064e3b" />
      </svg>
    </div>
  );
}

function MuslimahAvatar() {
  return (
    <div className="w-full h-full bg-emerald-900/60 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <path d="M50 15 C30 15, 20 30, 20 55 C20 75, 35 85, 50 85 C65 85, 80 75, 80 55 C80 30, 70 15, 50 15 Z" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
        <circle cx="50" cy="48" r="16" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export default function PengajarSmaPage() {
  const daftarPengajar = [
    { nama: "Ustadz Ibrahim, M.Si", peran: "Kepala Sekolah & Guru Fisika", gender: "M" },
    { nama: "Ustazah Aini, M.Pd", peran: "Wakasek Kurikulum & Biologi", gender: "F" },
    { nama: "Ustadz Yasin, Lc. MA", peran: "Guru PAI & Bahasa Arab", gender: "M" },
    { nama: "Ustazah Nisa, S.Si", peran: "Guru Kimia & UTBK", gender: "F" },
    { nama: "Ustadz Iqbal, S.E", peran: "Guru Ekonomi", gender: "M" },
    { nama: "Ustazah Rina, M.Hum", peran: "Guru Sejarah", gender: "F" },
    { nama: "Ustadz Fajar, S.Pd", peran: "Guru Matematika Peminatan", gender: "M" },
    { nama: "Ustazah Mutia, M.Pd", peran: "Guru Sosiologi", gender: "F" },
    { nama: "Ustadz Khalid, S.Kom", peran: "Guru Informatika", gender: "M" },
    { nama: "Ustazah Lutfi, S.Pd", peran: "Guru BK & Konseling UTBK", gender: "F" },
    { nama: "Ustadz Rizal, S.Pd", peran: "Guru Penjasorkes", gender: "M" },
    { nama: "Ustazah Dian, M.Pd", peran: "Guru Bahasa Inggris TOEFL", gender: "F" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 font-sans">
      <section className="relative pt-12 pb-10 px-6 text-center border-b border-emerald-900/50">
        <RevealOnScroll>
          <Link href="/sma" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 text-xs font-bold transition-colors bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-800/50">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Halaman Utama SMA
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Tenaga Pendidik SMA Al-Irsyad</h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto text-sm sm:text-base font-light">Barisan guru-guru ahli dan kompeten yang siap mendampingi siswa menembus PTN favorit.</p>
        </RevealOnScroll>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {daftarPengajar.map((guru, i) => (
            <RevealOnScroll key={i} delay={(i % 4) * 100}>
               <div className="bg-[#052e20]/40 border border-emerald-800/40 p-6 rounded-3xl hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] transition-all duration-500 text-center group h-full flex flex-col justify-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-600/50 group-hover:border-amber-400 transition-colors mb-4 shadow-lg">
                    {guru.gender === 'M' ? <MuslimAvatar /> : <MuslimahAvatar />}
                  </div>
                  <h3 className="font-bold text-amber-400 mb-1">{guru.nama}</h3>
                  <p className="text-sm text-emerald-100/80 font-light">{guru.peran}</p>
               </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}