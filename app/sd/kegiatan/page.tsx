'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSdPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron dengan kartu di halaman utama SD
  const dataKegiatan: Record<string, { title: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'Perkemahan Pramuka Penggalang', 
      date: '14 Agustus 2026', 
      img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop', 
      content: 'Kegiatan Perkemahan Pramuka Penggalang SD Al-Irsyad Pekalongan diadakan untuk melatih kemandirian, kedisiplinan, kepemimpinan, dan kerja sama antar regu di alam terbuka dengan tetap menjaga nilai ibadah dan sholat berjamaah.' 
    },
    '2': { 
      title: 'Mabit (Malam Bina Iman dan Taqwa)', 
      date: '08 Agustus 2026', 
      img: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop', 
      content: 'Mabit rutin diselenggarakan bagi siswa kelas atas sebagai sarana penguatan ruhiyah, qiyamullail bersama, tadarus Al-Qur\'an, serta muhasabah diri untuk membentuk kepribadian yang taat beribadah dan berbakti kepada orang tua.' 
    },
    '3': { 
      title: 'Market Day Cilik Islami', 
      date: '25 Juli 2026', 
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop', 
      content: 'Melalui program Market Day, para santri SD Al-Irsyad belajar praktik berniaga secara jujur sesuai prinsip ekonomi Islam, melatih kemampuan berhitung, komunikasi, serta menumbuhkan jiwa entrepreneur sejak dini.' 
    }
  };

  const item = dataKegiatan[id] || dataKegiatan['1'];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-8">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/sd" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke SD
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
              Program ini menjadi bagian dari komitmen SD Al-Irsyad Pekalongan untuk menghadirkan pengalaman belajar yang holistik, seimbang antara prestasi akademik dan akhlakul karimah.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}