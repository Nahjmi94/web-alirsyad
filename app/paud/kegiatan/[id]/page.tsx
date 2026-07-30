'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Newspaper, Calendar } from 'lucide-react';

export default function DetailKegiatanPage() {
  const params = useParams();
  const id = params.id;

  const dataKegiatan: Record<string, any> = {
    '1': { 
      title: 'Belajar Sambil Bermain Mengenal Huruf Hijaiyah', 
      date: '28 Mei 2026', 
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop', 
      content: 'Pada kegiatan pekan ini, anak-anak PAUD Al-Irsyad diajak belajar mengenal huruf hijaiyah menggunakan media kartu bergambar interaktif dan lagu riang. Metode ini terbukti sangat efektif menstimulasi daya ingat anak usia dini agar cepat menghafal dan mencintai Al-Qur\'an sejak dini tanpa merasa terbebani.' 
    },
    '2': { 
      title: 'Senam & Olahraga Ceria Bersama Guru', 
      date: '25 Mei 2026', 
      img: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1200&auto=format&fit=crop', 
      content: 'Kebugaran jasmani merupakan salah satu pilar penting pertumbuhan anak. Kegiatan senam pagi bersama seluruh guru dan siswa ini rutin diadakan setiap hari Jumat untuk melatih motorik kasar, kelenturan tubuh, serta membangun keceriaan bersama teman sebaya.' 
    },
    '3': { 
      title: 'Praktik Kreativitas Seni Melukis & Mewarnai', 
      date: '20 Mei 2026', 
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop', 
      content: 'Melalui kegiatan seni melukis dan mewarnai, siswa diajak untuk mengekspresikan imajinasi dan kreativitas tanpa batas. Guru membimbing teknik memegang kuas yang benar serta memadukan warna-warni cerah yang melatih kepekaan estetika anak.' 
    },
    '4': { 
      title: 'Manasik Haji Cilik Tingkat PAUD se-Kecamatan', 
      date: '15 Mei 2026', 
      img: 'https://images.unsplash.com/photo-1564769625895-7835759719df?q=80&w=1200&auto=format&fit=crop', 
      content: 'Suasana halaman sekolah mendadak semarak dengan pakaian ihram putih-putih. Ratusan anak mengikuti simulasi lempar jumrah, tawaf mengelilingi miniatur Ka\'bah, dan wukuf sebagai sarana edukasi rukun Islam sejak usia dini.' 
    },
    '5': { 
      title: 'Kunjungan Edukatif ke Kebun Binatang Lokal', 
      date: '10 Mei 2026', 
      img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop', 
      content: 'Belajar langsung di luar kelas memberikan pengalaman nyata bagi anak-anak. Didampingi para guru dan orang tua, siswa berinteraksi dan mengamati berbagai jenis satwa ciptaan Allah SWT sambil belajar bersyukur.' 
    },
  };

  const item = dataKegiatan[id as string] || dataKegiatan['1'];

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* TOMBOL KEMBALI */}
        <Link href="/paud/kegiatan" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Daftar Arsip Kegiatan
        </Link>

        {/* KONTEN UTAMA HALAMAN DETAIL */}
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
            <p>
              Seluruh rangkaian kegiatan ini dirancang secara khusus untuk mendukung tumbuh kembang anak didik agar menjadi pribadi yang mandiri, cerdas, kreatif, dan berakhlak mulia.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
}