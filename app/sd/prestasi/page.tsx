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

export default function SemuaPrestasiSdPage() {
  // INI ARRAY DATANYA (ADA 4 BUKAN CUMA 1)
  const daftarPrestasi = [
    { id: '1', juara: 'Medali Emas Olimpiade Matematika', event: 'OSN Tingkat Kota 2026', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+1', desc: 'Keberhasilan gemilang siswa SD Al-Irsyad dalam menjuarai kompetisi sains tingkat kota.' },
    { id: '2', juara: 'Juara 1 Pidato Bahasa Arab', event: 'Porseni Pelajar 2026', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+2', desc: 'Kefasihan dan kepercayaan diri siswa dalam membawakan pidato bahasa asing.' },
    { id: '3', juara: 'Juara 1 Lomba Tahfidz Juz 29-30', event: 'Festival Anak Sholeh 2026', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+3', desc: 'Ketepatan makhraj dan keindahan tartil Al-Qur\'an menghantarkan siswa meraih juara pertama.' },
    { id: '4', juara: 'Juara 2 Cipta & Baca Puisi Islami', event: 'Festival Seni Pelajar', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+4', desc: 'Penghayatan seni sastra yang mendalam dengan muatan nilai-nilai moral islami.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 font-sans">
      
      {/* HEADER ARSIP */}
      <section className="relative pt-12 pb-10 px-6 text-center border-b border-emerald-900/50">
        <RevealOnScroll>
          <Link href="/sd" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 text-xs font-bold transition-colors bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-800/50">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Halaman Utama SD
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Arsip Prestasi Siswa SD Al-Irsyad</h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto text-sm sm:text-base font-light">Deretan piala, penghargaan, dan catatan prestasi membanggakan yang diraih oleh siswa-siswi SD Al-Irsyad Pekalongan baik di bidang akademik maupun non-akademik.</p>
        </RevealOnScroll>
      </section>

      {/* DAFTAR BANYAK KARTU (PAKAI MAP) */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarPrestasi.map((item, i) => (
            <RevealOnScroll key={item.id} delay={(i % 3) * 150}>
              <div className="bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full relative group">
                
                <div className="absolute top-4 right-4 z-20 text-4xl drop-shadow-md group-hover:scale-125 transition-all">🥇</div>
                <div className="h-48 relative overflow-hidden">
                  <img src={item.foto} alt={item.juara} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                </div>
                
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4 bg-[#041a12]">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 w-fit block">{item.event}</span>
                    <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors leading-snug">{item.juara}</h3>
                    <p className="text-sm text-emerald-100/70 font-light line-clamp-2">{item.desc}</p>
                  </div>
                  
                  {/* TOMBOL SELENGKAPNYA MENGARAH KE DETAIL BERITA */}
                  <div className="pt-4 border-t border-emerald-800/40">
                    <Link href={`/sd/prestasi/${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/link">
                      Selengkapnya <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}