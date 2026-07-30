'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSdPage() {
  const params = useParams();
  const id = params.id;

  const dataKegiatan: Record<string, any> = {
    '1': { title: 'Perkemahan Pramuka Tingkat Penggalang', date: '12 Agustus 2026', img: 'https://images.unsplash.com/photo-1523580494112-071d16940a1c?q=80&w=1200&auto=format&fit=crop', content: 'Melatih kemandirian, kedisiplinan, dan kerja sama tim melalui kegiatan Perkemahan Pramuka. Siswa SD Al-Irsyad diajak belajar bertahan di alam terbuka, mendirikan tenda, dan mengamalkan Dasa Darma Pramuka dengan balutan nilai-nilai Islami.' },
    '2': { title: 'Mabit (Malam Bina Iman dan Taqwa)', date: '20 Juli 2026', img: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1200&auto=format&fit=crop', content: 'Kegiatan Mabit ini diisi dengan qiyamullail (shalat tahajud bersama), muhasabah, dan kajian motivasi. Tujuannya adalah untuk memperkuat mental spiritual siswa agar semakin dekat dengan Allah SWT dan berbakti kepada orang tua.' },
    '3': { title: 'Market Day: Belajar Wirausaha Islami', date: '10 Juni 2026', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop', content: 'Siswa kelas 4-6 mempraktikkan langsung cara berdagang ala Rasulullah SAW melalui kegiatan Market Day. Mereka belajar menghitung kembalian, jujur dalam berniaga, dan melayani pembeli dengan adab yang baik.' },
    '4': { title: 'Pelatihan Dokter Kecil & Kesehatan', date: '15 Mei 2026', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop', content: 'Edukasi pertolongan pertama pada kecelakaan dan pola hidup sehat di lingkungan sekolah.' },
    '5': { title: 'Lomba Tahfidz Al-Qur\'an Antar Kelas', date: '02 Mei 2026', img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop', content: 'Menyaring bibit-bibit unggul penghafal Al-Qur\'an juz 29 dan 30 di lingkungan SD Al-Irsyad.' }
  };
  const item = dataKegiatan[id as string] || dataKegiatan['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/sd/kegiatan" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Arsip Kegiatan SD
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