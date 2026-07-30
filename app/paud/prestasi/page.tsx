'use client';

import Link from 'next/link';
import { ArrowLeft, Award } from 'lucide-react';

export default function ArsipPrestasiPAUD() {
  const semuaPrestasi = [
    { id: '1', title: 'Juara 1 Lomba Tahfidz Juz 30 Tingkat TK se-Karesidenan', event: 'Festival Anak Sholeh 2026', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop', desc: 'Ananda Fatih berhasil meraih nilai sempurna dalam hafalan surat-surat pendek.' },
    { id: '2', title: 'Juara Umum Lomba Mewarnai & Kreativitas Anak', event: 'Pekan Raya Anak Pekalongan', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop', desc: 'Kreativitas paduan warna terbaik dari siswa KB Al-Irsyad.' },
    { id: '3', title: 'Juara 2 Lomba Fashion Busana Muslim Anak', event: 'Gema Islami Pekalongan', img: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop', desc: 'Tampil percaya diri mengenakan busana muslim anak yang rapi dan elegan.' },
    { id: '4', title: 'Juara Harapan 1 Lomba Menyanyi Lagu Islami', event: 'Art Competitions 2026', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop', desc: 'Suara merdu dan penghayatan lagu islami yang luar biasa.' },
  ];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link href="/paud" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Profil PAUD
        </Link>
        <span className="text-xs text-emerald-300 bg-emerald-900/60 px-4 py-1.5 rounded-full border border-emerald-700/50">
          Arsip Resmi Prestasi PAUD
        </span>
      </div>

      <main className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2 border-b border-emerald-800/60 pb-6">
          <div className="flex items-center gap-2 text-amber-400">
            <Award className="w-6 h-6" />
            <h1 className="text-3xl font-black text-white">Semua Arsip Prestasi Siswa PAUD</h1>
          </div>
          <p className="text-xs text-emerald-200/70">Klik selengkapnya pada salah satu prestasi untuk membaca informasi secara utuh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {semuaPrestasi.map((p) => (
            <div key={p.id} className="bg-gradient-to-br from-amber-500/10 to-emerald-950/60 border border-amber-400/30 rounded-3xl p-6 space-y-4 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="h-44 rounded-2xl overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 inline-block">{p.event}</span>
                <h3 className="text-base font-bold text-white leading-snug">{p.title}</h3>
                <p className="text-xs text-emerald-100/60 leading-relaxed">{p.desc}</p>
              </div>
              <Link href={`/paud/prestasi/${p.id}`} className="text-xs font-bold text-amber-400 flex items-center gap-1 hover:underline pt-2">
                Selengkapnya &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}