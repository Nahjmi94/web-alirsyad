'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailPrestasiSmpPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron 100% dengan kartu prestasi di halaman utama SMP
  const dataPrestasi: Record<string, { title: string; event: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'Medali Emas OSN IPA Terpadu', 
      event: 'Tingkat Provinsi Jawa Tengah 2026',
      date: '15 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Emas+OSN+IPA', 
      content: 'Prestasi membanggakan kembali dipersembahkan oleh santri SMP Al-Irsyad Pekalongan yang sukses meraih Medali Emas dalam Olimpiade Sains Nasional (OSN) bidang IPA Terpadu tingkat Provinsi Jawa Tengah setelah melalui seleksi ketat teori dan analisis eksperimen.' 
    },
    '2': { 
      title: 'Juara 1 English Story Telling', 
      event: 'National English Competition 2026',
      date: '04 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Juara+Story+Telling', 
      content: 'Kemampuan komunikasi global santri SMP Al-Irsyad mengantarkan santri meraih Juara 1 pada ajang Story Telling tingkat nasional dengan membawakan kisah inspiratif tokoh peradaban Islam secara memukau dan fasih.' 
    },
    '3': { 
      title: 'Juara Umum Pramuka Penggalang', 
      event: 'Jambore Cabang Kota Pekalongan 2026',
      date: '28 Juli 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Juara+Umum+Pramuka', 
      content: 'Regu Pramuka Penggalang SMP Al-Irsyad dinobatkan sebagai Juara Umum dalam Jambore Cabang setelah mendominasi kejuaraan di kategori pioneering, sandi morse, navigasi darat, dan pentas seni budaya Islami.' 
    }
  };

  const item = dataPrestasi[id] || dataPrestasi['1'];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-8">
        
        {/* Tombol Kembali */}
        <div className="flex items-center gap-3">
          <Link 
            href="/smp" 
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition group bg-[#0d4738] px-6 py-3 rounded-2xl border-2 border-emerald-500/50 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Kembali ke SMP
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
              Prestasi ini menjadi bukti nyata keseriusan bimbingan intensif para ustadz dan ustadzah dalam mendampingi bakat dan potensi terbaik santri SMP Al-Irsyad Pekalongan.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}