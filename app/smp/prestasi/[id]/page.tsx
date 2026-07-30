'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function DetailPrestasiSmpPage() {
  const params = useParams();
  const id = params.id;

  const dataPrestasi: Record<string, any> = {
    '1': { title: 'Medali Emas OSN IPA', event: 'Tingkat Provinsi Jawa Tengah', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMP+1', content: 'Rasa bangga yang tak terhingga! Siswa SMP Al-Irsyad berhasil membawa pulang Medali Emas OSN IPA tingkat provinsi. Kompetisi yang berlangsung ketat ini menguji analisis logis dan pemahaman mendalam tentang teori fisika, biologi, dan kimia dasar.' },
    '2': { title: 'Juara 1 Story Telling', event: 'English Competition 2026', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMP+2', content: 'Membawakan cerita rakyat lokal menggunakan bahasa Inggris yang sangat fasih, mimik wajah ekspresif, serta properti yang menarik, sukses membuat dewan juri memberikan nilai tertinggi untuk siswa kita.' },
    '3': { title: 'Juara Umum Pramuka Penggalang', event: 'Jambore Cabang Pekalongan', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMP+3', content: 'Kemandirian, kekompakan, dan penguasaan teknik kepramukaan (Pioneering, Sandi, PBB) yang matang dari regu inti SMP Al-Irsyad berhasil menyabet piala Juara Umum Jambore Cabang tahun ini.' },
    '4': { title: 'Juara 2 MTQ Pelajar', event: 'Tingkat SMP se-Pekalongan', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMP+4', content: 'Siswa kita berhasil meraih Juara 2 dalam ajang MTQ. Latihan keras bersama Ustadz pembimbing ekskul Tahsin dan Tilawah terbayar lunas dengan lantunan tartil yang sangat merdu.' }
  };

  const item = dataPrestasi[id as string] || dataPrestasi['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/smp/prestasi" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Prestasi SMP
        </Link>
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
            <p>Prestasi ini didedikasikan untuk seluruh keluarga besar SMP Al-Irsyad Pekalongan. Semoga memotivasi siswa lainnya untuk berani bermimpi dan berkarya.</p>
          </div>
        </article>
      </div>
    </div>
  );
}