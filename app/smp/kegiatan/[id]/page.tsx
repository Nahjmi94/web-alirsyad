'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSmpPage() {
  const params = useParams();
  const id = params.id;

  const dataKegiatan: Record<string, any> = {
    '1': { title: 'Latihan Dasar Kepemimpinan Siswa (LDKS)', date: '15 Agustus 2026', img: 'https://images.unsplash.com/photo-1523580494112-071d16940a1c?q=80&w=1200', content: 'Kegiatan LDKS (Latihan Dasar Kepemimpinan Siswa) diadakan bagi calon pengurus OSIS SMP Al-Irsyad. Di sini mereka digembleng masalah kedisiplinan, public speaking, cara memimpin rapat, dan problem solving. Semua materi dibalut dengan pendekatan nilai-nilai agama Islam.' },
    '2': { title: 'Pameran Ekstrakurikuler Robotik', date: '20 Juli 2026', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200', content: 'Salah satu ekstrakurikuler unggulan SMP Al-Irsyad adalah Robotik dan Coding. Pada akhir semester, siswa memamerkan karya mereka berupa smart trash bin, line follower robot, dan proyek IoT sederhana di hadapan para wali murid dan guru.' },
    '3': { title: 'Muhadharah 3 Bahasa', date: '10 Juni 2026', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200', content: 'Untuk melatih mental berani tampil dan kecakapan berbahasa global, siswa-siswi secara bergantian melaksanakan muhadharah. Mereka ditantang membawakan pidato dalam Bahasa Arab, Inggris, maupun Indonesia di lapangan utama sekolah.' },
    '4': { title: 'Outing Class & Kunjungan Museum', date: '15 Mei 2026', img: 'https://images.unsplash.com/photo-1562910398-963a7ecfa970?q=80&w=1200', content: 'Bentuk nyata merdeka belajar, siswa SMP Al-Irsyad melakukan studi tur dan observasi langsung ke museum bersejarah. Kegiatan ini kemudian diakhiri dengan pembuatan laporan karya tulis ilmiah berkelompok.' }
  };
  const item = dataKegiatan[id as string] || dataKegiatan['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/smp/kegiatan" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Kegiatan SMP
        </Link>
        <article className="bg-[#0A291E] border border-emerald-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 w-fit">
              <Calendar className="w-3.5 h-3.5" /> {item.date}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">{item.title}</h1>
          </div>
          <div className="h-72 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-invert max-w-none text-emerald-100/90 text-base leading-relaxed space-y-4 pt-4 border-t border-emerald-800/60">
            <p>{item.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}