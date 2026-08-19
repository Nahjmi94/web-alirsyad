'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailPrestasiSdPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron dengan kartu prestasi di halaman utama SD
  const dataPrestasi: Record<string, { title: string; event: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'Medali Emas Olimpiade Matematika', 
      event: 'OSN Tingkat Kota Pekalongan 2026',
      date: '10 Agustus 2026', 
      img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop', 
      content: 'Alhamdulillah, siswa SD Al-Irsyad berhasil menorehkan prestasi membanggakan dengan meraih Medali Emas pada ajang Olimpiade Sains Nasional (OSN) bidang Matematika tingkat kota.' 
    },
    '2': { 
      title: 'Juara 1 Pidato Bahasa Arab', 
      event: 'Porseni Pelajar se-Kota Pekalongan 2026',
      date: '02 Agustus 2026', 
      img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop', 
      content: 'Kemampuan berbahasa asing santri SD Al-Irsyad kembali terbukti melalui torehan Juara 1 lomba pidato Bahasa Arab dengan kefasihan makhraj dan intonasi yang luar biasa.' 
    },
    '3': { 
      title: 'Juara 1 Lomba Tahfidz Juz 29-30', 
      event: 'Festival Anak Sholeh 2026',
      date: '20 Juli 2026', 
      img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop', 
      content: 'Prestasi gemilang diraih pada bidang keagamaan dengan menyabet predikat Juara 1 lomba hafalan Al-Qur\'an Juz 29-30 kategori Sekolah Dasar se-Kota Pekalongan.' 
    }
  };

  const item = dataPrestasi[id] || dataPrestasi['1'];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-8">
        
        <div className="flex items-center gap-3">
          <Link 
            href="/sd" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke SD
          </Link>
        </div>

        <article className="bg-[#071E16]/90 backdrop-blur-md border-2 border-emerald-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="space-y-4">
            <span className="text-base sm:text-lg font-bold text-amber-400 inline-flex items-center gap-2 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30">
              <Calendar className="w-5 h-5" /> {item.date}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {item.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-amber-300">
              🏆 {item.event}
            </p>
          </div>

          <div className="h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-[#0d4738]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="text-emerald-50 text-xl sm:text-2xl leading-[1.8] font-normal text-justify space-y-6 pt-6 border-t border-emerald-800/60">
            <p>{item.content}</p>
            <p>
              Semoga torehan prestasi ini terus memotivasi seluruh siswa-siswi SD Al-Irsyad Pekalongan untuk senantiasa giat belajar, mengasah potensi, dan berprestasi demi kemaslahatan umat.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}