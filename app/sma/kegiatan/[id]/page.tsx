'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSmaPage() {
  const params = useParams();
  const id = params.id;

  const dataKegiatan: Record<string, any> = {
    '1': { title: 'Studi Kampus (Campus Tour) ke PTN Favorit', date: '20 Agustus 2026', img: 'https://images.unsplash.com/photo-1523580494112-071d16940a1c?q=80&w=1200', content: 'Sebagai bagian dari program unggulan Sukses UTBK & SNBP, siswa kelas 12 diajak melakukan Campus Tour ke berbagai PTN favorit seperti Universitas Indonesia, ITB, dan UGM. Mereka berdiskusi langsung dengan alumni Al-Irsyad yang sudah berkuliah di sana.' },
    '2': { title: 'Mukhayyam Al-Qur\'an & Tahfidz Camp', date: '15 Juli 2026', img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200', content: 'Kegiatan karantina tahfidz ini bertujuan untuk mempercepat target hafalan wajib siswa SMA sebelum lulus. Selama satu minggu, mereka fokus pada ziyadah (menambah hafalan) dan murajaah tanpa terganggu gadget.' },
    '3': { title: 'Gelar Karya Ilmiah & Inovasi Pelajar', date: '10 Juni 2026', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200', content: 'Ekstrakurikuler Kelompok Ilmiah Remaja (KIR) memamerkan hasil penelitian terbaik mereka. Mulai dari inovasi energi terbarukan sederhana, daur ulang limbah, hingga presentasi penelitian sosial ekonomi.' },
    '4': { title: 'Latihan Kepemimpinan Tingkat Menengah', date: '15 Mei 2026', img: 'https://images.unsplash.com/photo-1526976663112-0058b871c895?q=80&w=1200', content: 'Pembekalan intensif bagi Badan Pengurus Harian (BPH) OSIS SMA. Mereka dilatih menyusun proposal kegiatan, manajemen risiko, serta problem solving tingkat lanjut untuk mematangkan jiwa kepemimpinan.' }
  };
  const item = dataKegiatan[id as string] || dataKegiatan['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/sma/kegiatan" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Kegiatan SMA
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