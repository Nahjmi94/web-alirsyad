'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function DetailPrestasiSdPage() {
  const params = useParams();
  const id = params.id;

  const dataPrestasi: Record<string, any> = {
    '1': { title: 'Medali Emas Olimpiade Matematika', event: 'OSN Tingkat Kota 2026', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+1', content: 'Keberhasilan gemilang kembali ditorehkan oleh siswa SD Al-Irsyad Pekalongan. Ananda sukses menyabet Medali Emas dalam ajang Olimpiade Sains Nasional (OSN) bidang Matematika tingkat kota. Keberhasilan ini merupakan hasil dari latihan intensif, ketekunan siswa, serta bimbingan luar biasa dari para guru pembimbing.' },
    '2': { title: 'Juara 1 Pidato Bahasa Arab', event: 'Porseni Pelajar 2026', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+2', content: 'Dengan kefasihan pelafalan, intonasi yang tegas, serta kepercayaan diri yang tinggi di atas panggung, perwakilan siswa SD Al-Irsyad berhasil memukau para dewan juri dan meraih Juara 1 lomba pidato Bahasa Arab tingkat regional.' },
    '3': { title: 'Juara 1 Lomba Tahfidz Juz 29-30', event: 'Festival Anak Sholeh 2026', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+3', content: 'Suasana haru dan bangga menyelimuti tatkala nama siswa SD Al-Irsyad diumumkan sebagai Juara 1 lomba tahfidz. Ketepatan makhraj, kelancaran sambung ayat, dan keindahan tartil menjadi kunci kemenangan.' },
    '4': { title: 'Juara 2 Cipta & Baca Puisi Islami', event: 'Festival Seni Pelajar', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SD+4', content: 'Penghayatan seni sastra yang mendalam dengan muatan nilai-nilai moral islami berhasil memikat hati para penonton dan juri, mengantarkan siswa kita menduduki peringkat kedua.' }
  };

  const item = dataPrestasi[id as string] || dataPrestasi['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/sd/prestasi" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Prestasi SD
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
            <p>Prestasi ini menjadi bukti nyata komitmen SD Al-Irsyad Pekalongan dalam mendidik siswa yang unggul secara intelektual, spiritual, dan berakhlakul karimah.</p>
          </div>
        </article>
      </div>
    </div>
  );
}