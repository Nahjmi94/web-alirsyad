'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function DetailKegiatanSmpPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId || '1';

  // Data sinkron 100% dengan kartu di halaman utama SMP
  const dataKegiatan: Record<string, { title: string; date: string; img: string; content: string }> = {
    '1': { 
      title: 'LDKS OSIS SMP Al-Irsyad', 
      date: '18 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+LDKS+OSIS', 
      content: 'Kegiatan LDKS (Latihan Dasar Kepemimpinan Siswa) diadakan bagi seluruh jajaran pengurus OSIS SMP Al-Irsyad Pekalongan. Santri digembleng materi kepemimpinan, manajemen organisasi, teknik persidangan, public speaking, serta penyusunan program kerja kreatif yang berlandaskan nilai-nilai Islam.' 
    },
    '2': { 
      title: 'Ekskul Robotik & Coding', 
      date: '12 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Ekskul+Robotik', 
      content: 'Ekstrakurikuler robotik dan pemrograman dasar melatih logika berpikir komputasional para santri. Siswa dibimbing langsung untuk merakit modul mikrokontroler, sensor cerdas, serta merancang robot pemilah objek untuk persiapan lomba teknologi tingkat nasional.' 
    },
    '3': { 
      title: 'Muhadharah (Pidato 3 Bahasa)', 
      date: '05 Agustus 2026', 
      img: 'https://placehold.co/1000x500/0d4738/fbbf24?text=Foto+Muhadharah', 
      content: 'Program Muhadharah rutin diadakan setiap pekan untuk mengasah keberanian public speaking santri SMP Al-Irsyad dalam tiga bahasa utama: Bahasa Arab, Bahasa Inggris, dan Bahasa Indonesia dengan tema keislaman dan sains modern.' 
    }
  };

  const item = dataKegiatan[id] || dataKegiatan['1'];

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
          </div>

          <div className="h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-[#0d4738]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="text-emerald-50 text-xl sm:text-2xl leading-[1.8] font-normal text-justify space-y-6 pt-6 border-t border-emerald-800/60">
            <p>{item.content}</p>
            <p>
              Melalui program pembinaan kesiswaan yang terarah, SMP Al-Irsyad senantiasa berkomitmen membentuk generasi pemimpin yang cerdas, berwawasan global, dan berakhlak mulia.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}