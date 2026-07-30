'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Award } from 'lucide-react';

export default function DetailPrestasiPage() {
  const params = useParams();
  const id = params.id;

  // Data lengkap prestasi berdasarkan ID
  const dataPrestasi: Record<string, any> = {
    '1': { 
      title: 'Juara 1 Lomba Tahfidz Juz 30 Tingkat TK se-Karesidenan', 
      event: 'Festival Anak Sholeh 2026', 
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop', 
      content: 'Sebuah prestasi membanggakan kembali ditorehkan oleh siswa PAUD Al-Irsyad Pekalongan. Ananda Fatih sukses menyabet Juara 1 dalam ajang Festival Anak Sholeh tingkat karesidenan berkat kefasihan tajwid, ketepatan makhraj, dan kelancaran hafalan Juz 30 di depan para dewan juri. Keberhasilan ini tidak lepas dari bimbingan intensif para guru tahfidz serta dukungan penuh dari orang tua di rumah.' 
    },
    '2': { 
      title: 'Juara Umum Lomba Mewarnai & Kreativitas Anak', 
      event: 'Pekan Raya Anak Pekalongan', 
      img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop', 
      content: 'Dengan goresan warna yang rapi, harmonis, dan penuh detail artistik, perwakilan siswa PAUD Al-Irsyad dinobatkan sebagai Juara Umum dalam ajang Pekan Raya Anak Pekalongan tahun 2026. Ajang ini diikuti oleh ratusan peserta dari berbagai lembaga pendidikan anak usia dini.' 
    },
    '3': { 
      title: 'Juara 2 Lomba Fashion Busana Muslim Anak', 
      event: 'Gema Islami Pekalongan', 
      img: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1200&auto=format&fit=crop', 
      content: 'Berjalan anggun di atas panggung peragaan busana dengan balutan busana muslim syar\'i yang elegan, siswa PAUD Al-Irsyad berhasil memukau para dewan juri dan meraih Juara 2.' 
    },
    '4': { 
      title: 'Juara Harapan 1 Lomba Menyanyi Lagu Islami', 
      event: 'Art Competitions 2026', 
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop', 
      content: 'Penghayatan lirik lagu religi yang dibawakan dengan suara merdu berhasil mengantarkan siswa PAUD Al-Irsyad meraih piala Juara Harapan 1 dalam kompetisi seni tingkat regional.' 
    },
  };

  const item = dataPrestasi[id as string] || dataPrestasi['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* TOMBOL KEMBALI */}
        <Link href="/paud/prestasi" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Daftar Arsip Prestasi
        </Link>

        {/* KONTEN UTAMA HALAMAN DETAIL */}
        <article className="bg-[#0A291E] border border-emerald-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 inline-block">
              {item.event}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">{item.title}</h1>
          </div>

          <div className="h-72 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-invert max-w-none text-emerald-100/90 text-base leading-relaxed space-y-4 pt-4 border-t border-emerald-800/60">
            <p>{item.content}</p>
            <p>
              Prestasi ini menjadi motivasi bagi seluruh keluarga besar PAUD Al-Irsyad Pekalongan untuk terus berinovasi, mendidik dengan sepenuh hati, serta mencetak generasi yang cerdas, berprestasi, dan berakhlakul karimah.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
}