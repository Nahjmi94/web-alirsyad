'use client';

import Link from 'next/link';
import { ArrowLeft, Newspaper, Calendar } from 'lucide-react';

export default function ArsipKegiatanPAUD() {
  const semuaBerita = [
    { id: '1', title: 'Belajar Sambil Bermain Mengenal Huruf Hijaiyah', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', date: '28 Mei 2026', desc: 'Metode interaktif mengenalkan huruf hijaiyah melalui permainan kartu bergambar.' },
    { id: '2', title: 'Senam & Olahraga Ceria Bersama Guru', img: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop', date: '25 Mei 2026', desc: 'Menjaga kebugaran fisik dan motorik anak melalui senam ceria di halaman sekolah.' },
    { id: '3', title: 'Praktik Kreativitas Seni Melukis & Mewarnai', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop', date: '20 Mei 2026', desc: 'Mengasah imajinasi seni anak lewat media cat air dan krayon warna-warni.' },
    { id: '4', title: 'Manasik Haji Cilik Tingkat PAUD se-Kecamatan', img: 'https://images.unsplash.com/photo-1564769625895-7835759719df?q=80&w=800&auto=format&fit=crop', date: '15 Mei 2026', desc: 'Praktik rukun Islam kelima sejak usia dini secara menyenangkan.' },
    { id: '5', title: 'Kunjungan Edukatif ke Kebun Binatang Lokal', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop', date: '10 Mei 2026', desc: 'Mengenalkan ciptaan Allah SWT berupa satwa langsung di alam terbuka.' },
  ];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link href="/paud" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Profil PAUD
        </Link>
        <span className="text-xs text-emerald-300 bg-emerald-900/60 px-4 py-1.5 rounded-full border border-emerald-700/50">
          Arsip Resmi Kegiatan PAUD
        </span>
      </div>

      <main className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2 border-b border-emerald-800/60 pb-6">
          <div className="flex items-center gap-2 text-amber-400">
            <Newspaper className="w-6 h-6" />
            <h1 className="text-3xl font-black text-white">Semua Arsip Berita & Kegiatan PAUD</h1>
          </div>
          <p className="text-xs text-emerald-200/70">Klik selengkapnya pada artikel untuk membaca laporan kegiatan secara penuh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {semuaBerita.map((item) => (
            <div key={item.id} className="bg-emerald-950/40 border border-emerald-800/50 rounded-3xl overflow-hidden group hover:border-amber-400 transition flex flex-col justify-between shadow-xl">
              <div>
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] text-amber-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition">{item.title}</h3>
                  <p className="text-xs text-emerald-100/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link href={`/paud/kegiatan/${item.id}`} className="text-xs font-bold text-amber-400 flex items-center gap-1 hover:underline">
                  Selengkapnya &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}