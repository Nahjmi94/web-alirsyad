'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ==========================================
// KODE ANIMASI SCROLL
// ==========================================
function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      {children}
    </div>
  );
}

export default function PengajarPaudPage() {
  // Generate 30 Data Guru Palsu
  const daftarGuru = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    nama: `Ustazah Pengajar ${i + 1}, S.Pd`,
    peran: i % 3 === 0 ? "Wali Kelas" : i % 3 === 1 ? "Guru Pendamping" : "Guru Tahfidz",
    foto: `https://placehold.co/400x400/052e20/fbbf24?text=Guru+${i + 1}`
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20">
      
      {/* HEADER PAGE */}
      <section className="relative pt-10 pb-12 px-6 text-center border-b border-emerald-900/50">
        <RevealOnScroll>
          <Link href="/paud" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 text-sm font-semibold transition-colors bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-800/50">
            ← Kembali ke Halaman PAUD
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">
            Daftar Tenaga Pendidik PAUD
          </h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto">
            Mengenal lebih dekat para asatidzah yang berdedikasi tinggi dalam mendidik generasi penerus yang berakhlakul karimah.
          </p>
        </RevealOnScroll>
      </section>

      {/* GRID 30 GURU */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {daftarGuru.map((guru, i) => (
            <RevealOnScroll key={guru.id} delay={(i % 5) * 100}>
              <div className="bg-[#041a12] border border-emerald-800/50 p-5 rounded-3xl hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_10px_20px_-10px_rgba(251,191,36,0.2)] transition-all duration-300 text-center group h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-emerald-600/50 group-hover:border-amber-400 transition-colors mb-4">
                    <img src={guru.foto} alt={guru.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors leading-snug">{guru.nama}</h3>
                </div>
                <p className="text-xs text-emerald-100/60 mt-2">{guru.peran}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

    </div>
  );
}