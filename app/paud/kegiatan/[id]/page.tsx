'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanPaudPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron 100% dengan kartu di halaman utama PAUD
  const dataKegiatan: Record<string, { title: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'Manasik Haji Cilik', 
      date: '15 Mei 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Manasik+Haji', 
      content: 'Suasana sekolah semarak dengan pakaian ihram putih-putih. Ratusan santri cilik PAUD Al-Irsyad mengikuti simulasi lempar jumrah, tawaf mengelilingi miniatur Ka\'bah, dan wukuf sebagai sarana mengenalkan rukun Islam ke-5 sejak usia dini dengan metode praktik yang ceria dan edukatif.' 
    },
    '2': { 
      title: 'Outbound Ceria', 
      date: '20 Mei 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Outbound+Ceria', 
      content: 'Kegiatan alam terbuka (Outbound Ceria) rutin diadakan untuk melatih motorik kasar, keberanian, dan kemandirian santri. Berbagai permainan kelompok dipandu oleh ustadzah untuk menumbuhkan rasa percaya diri serta kekompakan antar teman sebaya.' 
    },
    '3': { 
      title: 'Pentas Seni Islami', 
      date: '28 Mei 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Pentas+Seni', 
      content: 'Ajang unjuk keberanian dan kreativitas santri PAUD Al-Irsyad melalui penampilan hafalan surah-surah pendek, doa harian, nasyid islami, dan peragaan busana muslim. Acara ini dihadiri penuh antusias oleh seluruh wali murid.' 
    }
  };

  const item = dataKegiatan[id] || dataKegiatan['1'];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-8">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/paud" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke PAUD
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
              Seluruh rangkaian kegiatan ini dirancang secara khusus untuk mendukung tumbuh kembang santri usia dini agar menjadi pribadi yang mandiri, cerdas, ceria, dan berakhlakul karimah.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}