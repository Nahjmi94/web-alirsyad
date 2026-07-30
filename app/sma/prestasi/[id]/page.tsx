'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function DetailPrestasiSmaPage() {
  const params = useParams();
  const id = params.id;

  const dataPrestasi: Record<string, any> = {
    '1': { title: 'Medali Emas OSN Kimia', event: 'Tingkat Nasional 2026', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+1', content: 'Luar Biasa! Persiapan intensif berbulan-bulan yang difasilitasi oleh pembimbing OSN SMA Al-Irsyad berbuah manis. Ananda sukses mengalahkan ribuan peserta se-Indonesia dan meraih Medali Emas OSN bidang Kimia.' },
    '2': { title: 'Lolos SNBP Kedokteran UI', event: 'Seleksi Nasional', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+2', content: 'Kabar gembira datang dari pengumuman SNBP tahun ini. Lulusan terbaik SMA Al-Irsyad berhasil menembus ketatnya persaingan Fakultas Kedokteran Universitas Indonesia berkat konsistensi nilai rapor sejak kelas 10.' },
    '3': { title: 'Juara 1 Debat Bahasa Inggris', event: 'English National Debate', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+3', content: 'Tim debat SMA Al-Irsyad menunjukkan tajinya di tingkat nasional. Kemampuan argumentasi kritis dipadu dengan kefasihan berbahasa Inggris membuat lawan tak berkutik di babak final.' },
    '4': { title: 'Juara 1 Lomba Karya Ilmiah', event: 'Olimpiade Peneliti Siswa', img: 'https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+4', content: 'Inovasi pengolahan limbah organik menjadi energi alternatif yang diteliti oleh ekskul KIR sekolah sukses meraih juara pertama. Ini membuktikan bahwa sekolah agama juga melek akan kemajuan sains.' }
  };

  const item = dataPrestasi[id as string] || dataPrestasi['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/sma/prestasi" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Prestasi SMA
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
          </div>
        </article>
      </div>
    </div>
  );
}