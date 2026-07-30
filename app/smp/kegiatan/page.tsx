'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';

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

export default function SemuaKegiatanSmpPage() {
  const daftarKegiatan = [
    { id: '1', title: 'Latihan Dasar Kepemimpinan Siswa (LDKS)', date: '15 Agustus 2026', img: 'https://images.unsplash.com/photo-1523580494112-071d16940a1c?q=80&w=1200', desc: 'Melatih jiwa kepemimpinan, kedisiplinan, dan manajemen waktu bagi calon pengurus OSIS.' },
    { id: '2', title: 'Pameran Ekstrakurikuler Robotik', date: '20 Juli 2026', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200', desc: 'Siswa SMP memamerkan hasil rakitan robot dan pemrograman dasar yang dipelajari selama 1 semester.' },
    { id: '3', title: 'Muhadharah 3 Bahasa', date: '10 Juni 2026', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200', desc: 'Latihan public speaking wajib bagi siswa menggunakan bahasa Arab, Inggris, dan Indonesia.' },
    { id: '4', title: 'Outing Class & Kunjungan Museum', date: '15 Mei 2026', img: 'https://images.unsplash.com/photo-1562910398-963a7ecfa970?q=80&w=1200', desc: 'Pembelajaran di luar kelas untuk memperluas wawasan sejarah dan kebudayaan.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 font-sans">
      <section className="relative pt-12 pb-10 px-6 text-center border-b border-emerald-900/50">
        <RevealOnScroll>
          <Link href="/smp" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 text-xs font-bold transition-colors bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-800/50">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Halaman Utama SMP
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Arsip Kegiatan SMP</h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto text-sm sm:text-base font-light">Dokumentasi kegiatan siswa SMP Al-Irsyad dalam mengembangkan skill dan karakter.</p>
        </RevealOnScroll>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarKegiatan.map((item, i) => (
            <RevealOnScroll key={item.id} delay={(i % 3) * 150}>
              <div className="bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full group">
                <div className="h-52 relative overflow-hidden"><img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 w-fit"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">{item.title}</h3>
                    <p className="text-sm text-emerald-100/70 line-clamp-2 font-light">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-emerald-800/40">
                    <Link href={`/smp/kegiatan/${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/link">
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