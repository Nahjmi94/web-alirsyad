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

export default function SemuaPrestasiSmaPage() {
  const daftarPrestasi = [
    { id: '1', juara: 'Medali Emas OSN Kimia', event: 'Tingkat Nasional 2026', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+1', desc: 'Mengharumkan nama sekolah di kancah nasional, siswa kita sukses menyabet emas OSN Kimia.' },
    { id: '2', juara: 'Lolos SNBP Kedokteran UI', event: 'Seleksi Nasional', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+2', desc: 'Lulusan SMA Al-Irsyad berhasil menembus fakultas impian melalui jalur undangan prestasi.' },
    { id: '3', juara: 'Juara 1 Debat Bahasa Inggris', event: 'English National Debate', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+3', desc: 'Argumen yang tajam dan kemampuan bahasa Inggris tingkat lanjut membawa piala kemenangan.' },
    { id: '4', juara: 'Juara 1 Lomba Karya Ilmiah', event: 'Olimpiade Peneliti Siswa', foto: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+4', desc: 'Inovasi teknologi tepat guna karya tim KIR SMA Al-Irsyad berhasil menarik perhatian juri nasional.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 font-sans">
      <section className="relative pt-12 pb-10 px-6 text-center border-b border-emerald-900/50">
        <RevealOnScroll>
          <Link href="/sma" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 text-xs font-bold transition-colors bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-800/50">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Halaman Utama SMA
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Arsip Prestasi Siswa SMA</h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto text-sm sm:text-base font-light">Bukti nyata kegigihan, kerja keras, dan kualitas pendidikan SMA Al-Irsyad baik di kancah regional maupun nasional.</p>
        </RevealOnScroll>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarPrestasi.map((item, i) => (
            <RevealOnScroll key={item.id} delay={(i % 3) * 150}>
              <div className="bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full relative group">
                <div className="absolute top-4 right-4 z-20 text-4xl drop-shadow-md group-hover:scale-125 transition-all">🥇</div>
                <div className="h-48 relative overflow-hidden"><img src={item.foto} alt={item.juara} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" /></div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4 bg-[#041a12]">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 w-fit block">{item.event}</span>
                    <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors leading-snug">{item.juara}</h3>
                    <p className="text-sm text-emerald-100/70 font-light line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-emerald-800/40">
                    <Link href={`/sma/prestasi/${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/link">
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