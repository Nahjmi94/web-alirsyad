'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSmaPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron 100% dengan kartu kegiatan di halaman utama SMA
  const dataKegiatan: Record<string, { title: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'Studi Kampus (Campus Tour PTN Favorit)', 
      date: '18 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Studi+Kampus', 
      content: 'Santri kelas XII SMA Al-Irsyad Pekalongan melaksanakan program tahunan Studi Kampus dengan mengunjungi berbagai Perguruan Tinggi Negeri terkemuka seperti UI, ITB, dan UGM. Kegiatan ini bertujuan memberikan gambaran langsung mengenai lingkungan perkuliahan, pemilihan jurusan, serta memicu motivasi tinggi dalam menembus jalur SNBP dan SNBT-UTBK.' 
    },
    '2': { 
      title: 'Mukhayyam Al-Qur\'an Intensif', 
      date: '10 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Mukhayyam+Quran', 
      content: 'Mukhayyam Al-Qur\'an merupakan karantina tahfidz intensif selama sepekan penuh. Para santri memfokuskan waktu untuk memantapkan hafalan (ziyadah) dan menjaga kualitas hafalan (mutqin) dengan bimbingan langsung para masyaikh bersanad dalam suasana lingkungan yang kondusif.' 
    },
    '3': { 
      title: 'Gelar Karya Ilmiah & Riset (KIR)', 
      date: '02 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Gelar+KIR', 
      content: 'Sebagai wadah pengembangan nalar kritis dan budaya saintifik, siswa SMA Al-Irsyad mempresentasikan proyek penelitian inovasi teknologi, biologi terapan, dan kajian sosial humaniora di hadapan para dewan penguji akademisi dan praktisi industri.' 
    }
  };

  const item = dataKegiatan[id] || dataKegiatan['1'];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-8">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/sma" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke SMA
          </Link>
        </div>

        {/* Konten Detail */}
        <article className="bg-[#071E16]/90 backdrop-blur-md border-2 border-emerald-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="space-y-4">
            <span className="text-base sm:text-lg font-bold text-amber-400 inline-flex items-center gap-2 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30">
              <Calendar className="w-5 h-5" /> {item.date}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {item.title}
            </h1>
          </div>

          <div className="h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-[#0d4738]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="text-emerald-50 text-xl sm:text-2xl leading-[1.8] font-normal text-justify space-y-6 pt-6 border-t border-emerald-800/60">
            <p>{item.content}</p>
            <p>
              Program terintegrasi ini dirancang agar santri SMA Al-Irsyad siap bersaing secara akademis di jenjang pendidikan tinggi dengan tetap teguh memegang prinsip adab dan integritas Islami.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}