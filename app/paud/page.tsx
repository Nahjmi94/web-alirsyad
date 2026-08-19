'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.15 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      }`}
    >
      {children}
    </div>
  );
}

function MuslimahAvatar() {
  return (
    <div className="w-full h-full bg-[#0d4738] flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <path d="M50 15 C30 15, 20 30, 20 55 C20 75, 35 85, 50 85 C65 85, 80 75, 80 55 C80 30, 70 15, 50 15 Z" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
        <circle cx="50" cy="48" r="16" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export default function PaudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 pb-20 overflow-hidden">
      
      {/* 0. HERO SECTION */}
      <section className="relative pt-12 pb-10 px-6 text-center">
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d4738] border border-emerald-400/50 text-amber-400 text-base sm:text-lg font-black mb-6 tracking-widest shadow-md">
            ✨ USIA 3 - 6 TAHUN
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md tracking-tight">
            PAUD (KB & TK) Al-Irsyad <br /> Pekalongan
          </h1>
          <p className="text-emerald-50 max-w-3xl mx-auto leading-relaxed text-xl sm:text-2xl font-medium">
            Pembentukan karakter islami sejak dini, stimulasi motorik, dan pembiasaan hafalan doa harian dalam lingkungan yang menyenangkan.
          </p>
        </RevealOnScroll>
      </section>

      {/* 1. SAMBUTAN KEPALA SEKOLAH */}
      <section className="max-w-5xl mx-auto px-6 py-6 w-full mb-8">
        <RevealOnScroll delay={200}>
          <div className="bg-[#071E16]/90 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative flex flex-col md:flex-row gap-8 items-center hover:border-amber-400/40 transition-colors duration-500">
            <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-emerald-400/40 shadow-lg group">
              <MuslimahAvatar />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-4 py-2 rounded-full bg-[#115e4f] border border-emerald-400/40 text-emerald-200 text-sm sm:text-base font-black mb-3 tracking-widest uppercase">
                Sambutan Kepala Sekolah
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">Ustazah Aisyah, S.Pd</h2>
              <p className="text-amber-400 text-lg sm:text-xl font-bold mb-4">- Kepala PAUD (KB & TK) -</p>
              <p className="text-emerald-50 leading-relaxed text-lg sm:text-xl font-normal text-justify">
                "Selamat datang di PAUD Al-Irsyad Pekalongan. Kami berkomitmen untuk membentuk karakter islami anak sejak usia dini melalui pendekatan belajar yang menyenangkan, interaktif, dan penuh kasih sayang. Mari bersama-sama membangun pondasi terbaik untuk masa depan ananda tercinta."
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 2. VIDEO SEKOLAH */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-4xl">🎥</span> Galeri Video Sekolah
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { judul: "Video Profil Utama", desc: "Mengenal lebih dekat lingkungan PAUD Al-Irsyad.", thumbnail: "https://placehold.co/600x340/0d4738/fbbf24?text=Thumbnail+Video" },
            { judul: "Kegiatan Terbaru", desc: "Keseruan anak-anak bermain dan belajar.", thumbnail: "https://placehold.co/600x340/0d4738/fbbf24?text=Thumbnail+Video" }
          ].map((vid, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <div className="group relative bg-[#0d4738] border border-emerald-400/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img src={vid.thumbnail} alt={vid.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center z-10">
                    <span className="text-6xl drop-shadow-lg group-hover:scale-125 transition-transform duration-500">▶️</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl sm:text-3xl font-black text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">{vid.judul}</h3>
                  <p className="text-lg sm:text-xl text-emerald-50 leading-relaxed font-normal">{vid.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 3. FOTO & ARTIKEL KEGIATAN (SUDAH BISA LANGSUNG DIKLIK KE DETAIL) */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-4xl">📸</span> Foto & Artikel Kegiatan
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {[
            { id: '1', judul: "Manasik Haji Cilik", desc: "Melatih anak praktik ibadah haji sejak dini.", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Kegiatan" },
            { id: '2', judul: "Outbound Ceria", desc: "Kegiatan alam untuk melatih motorik kasar.", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Kegiatan" },
            { id: '3', judul: "Pentas Seni Islami", desc: "Menampilkan bakat dan hafalan santri.", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Kegiatan" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <Link 
                href={`/paud/kegiatan/${item.id}`}
                className="group overflow-hidden rounded-3xl border-2 border-emerald-400/50 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.3)] transition-all duration-500 bg-[#0d4738] cursor-pointer flex flex-col h-full block"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7 border-t border-emerald-400/30 flex-1 flex flex-col justify-center">
                  <h4 className="font-black text-2xl sm:text-3xl text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">{item.judul}</h4>
                  <p className="text-lg sm:text-xl text-emerald-50 leading-relaxed line-clamp-3 font-normal">{item.desc}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={600}>
          <div className="text-center">
            <Link 
              href="/paud/kegiatan" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-[#0d4738] border-2 border-emerald-400/80 text-emerald-100 hover:text-emerald-950 hover:bg-amber-400 hover:border-amber-400 text-xl font-black transition-all duration-300 shadow-xl"
            >
              Lihat Semua Kegiatan <span className="text-2xl">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4. PRESTASI SISWA (SUDAH BISA DIKLIK KE DETAIL) */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-4xl">🏆</span> Prestasi Siswa
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {[
            { id: '1', juara: "Juara 1 Lomba Mewarnai", event: "Tingkat Kota Pekalongan", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Prestasi" },
            { id: '2', juara: "Juara 2 Tahfidz Cilik", event: "Festival Anak Sholeh", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Prestasi" },
            { id: '3', juara: "Juara 1 Hafalan Doa", event: "Lomba Islami TK se-Kota", foto: "https://placehold.co/600x400/0d4738/fbbf24?text=Foto+Prestasi" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <Link 
                href={`/paud/prestasi/${item.id}`}
                className="group overflow-hidden rounded-3xl border-2 border-emerald-400/50 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 bg-[#0d4738] cursor-pointer flex flex-col h-full relative block"
              >
                <div className="absolute top-4 right-4 z-20 text-5xl drop-shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🥇</div>
                <div className="h-56 relative overflow-hidden">
                  <img src={item.foto} alt={item.juara} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-7 border-t border-emerald-400/30 flex-1 relative z-10 bg-[#0d4738] flex flex-col justify-center">
                  <h4 className="text-2xl sm:text-3xl font-black text-amber-400 mb-2 group-hover:text-amber-300 transition-colors leading-snug">{item.juara}</h4>
                  <p className="text-lg sm:text-xl text-emerald-100 font-medium">{item.event}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={600}>
          <div className="text-center">
            <Link 
              href="/paud/prestasi" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-[#0d4738] border-2 border-emerald-400/80 text-emerald-100 hover:text-emerald-950 hover:bg-amber-400 hover:border-amber-400 text-xl font-black transition-all duration-300 shadow-xl"
            >
              Lihat Semua Prestasi <span className="text-2xl">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* 5. TENAGA PENDIDIK */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full text-center">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center justify-center gap-3">
            <span className="text-amber-400 text-4xl">👩‍🏫</span> Tenaga Pendidik
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
           {[
             { nama: "Ustazah Aisyah, S.Pd", peran: "Kepala Sekolah PAUD" },
             { nama: "Ustazah Fatimah, S.Pd.I", peran: "Koordinator Tahfidz" },
             { nama: "Ustazah Khadijah, S.Psi", peran: "Guru Konseling Anak" }
           ].map((guru, i) => (
             <RevealOnScroll key={i} delay={(i+1) * 200}>
                <div className="bg-[#0d4738] border-2 border-emerald-400/50 p-8 rounded-3xl hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] transition-all duration-500 text-center group">
                   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/60 group-hover:border-amber-400 transition-colors mb-5 shadow-lg">
                      <MuslimahAvatar />
                   </div>
                   <h3 className="font-black text-amber-400 text-2xl sm:text-3xl mb-2">{guru.nama}</h3>
                   <p className="text-lg sm:text-xl text-emerald-50 font-medium">{guru.peran}</p>
                </div>
             </RevealOnScroll>
           ))}
        </div>

        <RevealOnScroll delay={800}>
          <Link 
            href="/paud/pengajar" 
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xl font-black transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Lihat 30+ Pengajar Lainnya <span>→</span>
          </Link>
        </RevealOnScroll>
      </section>

      {/* 6. KURIKULUM */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-4xl">📚</span> Kurikulum & Pembelajaran
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "📖", title: "Tahfidz & Iqro", desc: "Pembiasaan membaca Al-Qur'an dan hafalan surah pendek sehari-hari." },
            { icon: "🤲", title: "Aqidah & Akhlak", desc: "Menanamkan nilai-nilai tauhid dan adab islami sejak dini." },
            { icon: "🎨", title: "Motorik & Seni", desc: "Kreativitas anak melalui bermain, menggambar, dan kriya." },
            { icon: "🔤", title: "Calistung Dasar", desc: "Pengenalan huruf dan angka dengan metode menyenangkan." }
          ].map((item, i) => (
             <RevealOnScroll key={i} delay={i * 200}>
               <div className="group overflow-hidden rounded-3xl border-2 border-emerald-400/50 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 bg-[#0d4738] p-7 cursor-default h-full">
                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 origin-left drop-shadow-lg">{item.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-lg text-emerald-50 leading-relaxed font-normal">{item.desc}</p>
               </div>
             </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 7. SARANA & PRASARANA */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-4xl">🏫</span> Sarana & Prasarana
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { nama: "Ruang Kelas Ber-AC", foto: "https://placehold.co/400x300/0d4738/fbbf24?text=Foto+Fasilitas" },
            { nama: "Taman Bermain Anak", foto: "https://placehold.co/400x300/0d4738/fbbf24?text=Foto+Fasilitas" },
            { nama: "Mushola Representatif", foto: "https://placehold.co/400x300/0d4738/fbbf24?text=Foto+Fasilitas" },
            { nama: "Perpustakaan Mini", foto: "https://placehold.co/400x300/0d4738/fbbf24?text=Foto+Fasilitas" }
          ].map((item, i) => (
             <RevealOnScroll key={i} delay={(i+1) * 150}>
               <div className="bg-[#0d4738] border-2 border-emerald-400/50 rounded-3xl overflow-hidden group hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.2)] transition-all duration-300 h-full flex flex-col">
                  <div className="h-44 relative overflow-hidden">
                    <img src={item.foto} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 text-center border-t border-emerald-400/30">
                    <h4 className="font-black text-lg sm:text-xl text-emerald-100 group-hover:text-amber-400 transition-colors">{item.nama}</h4>
                  </div>
               </div>
             </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 8. RINCIAN BIAYA */}
      <section className="max-w-4xl mx-auto px-6 py-12 w-full mb-12">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
            <span className="text-amber-400 text-4xl">💰</span> Estimasi Rincian Biaya
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <div className="bg-[#071E16]/90 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center border-b border-emerald-800/60 pb-5 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-black text-xl sm:text-2xl block group-hover:translate-x-2 transition-transform text-white">Uang Pangkal / Gedung</span>
                  <span className="text-base sm:text-lg text-emerald-200/80 font-normal">(Sudah termasuk infak pembangunan & kegiatan 1 tahun)</span>
                </div>
                <span className="font-black text-amber-400 text-2xl sm:text-3xl">Rp 2.500.000</span>
              </div>

              <div className="flex justify-between items-center border-b border-emerald-800/60 pb-5 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-black text-xl sm:text-2xl block group-hover:translate-x-2 transition-transform text-white">Seragam (3 Stel + Atribut)</span>
                  <span className="text-base sm:text-lg text-emerald-200/80 font-normal">(Batik Al-Irsyad, Olahraga, Muslim & Atribut lengkap)</span>
                </div>
                <span className="font-black text-amber-400 text-2xl sm:text-3xl">Rp 450.000</span>
              </div>

              <div className="flex justify-between items-center border-b border-emerald-800/60 pb-5 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-black text-xl sm:text-2xl block group-hover:translate-x-2 transition-transform text-white">SPP Bulanan</span>
                  <span className="text-base sm:text-lg text-emerald-200/80 font-normal">(Infaq operasional pendidikan per bulan)</span>
                </div>
                <span className="font-black text-amber-400 text-2xl sm:text-3xl">Rp 150.000 <span className="text-base font-normal text-emerald-200/80">/bulan</span></span>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-amber-500/30 text-center relative z-10">
              <p className="text-lg sm:text-xl text-emerald-100 mb-6 font-normal">Tersedia program keringanan dan beasiswa bagi pendaftar gelombang pertama atau hafidz cilik.</p>
              <a href="/pendaftaran/paud" className="inline-block px-10 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xl font-black shadow-lg shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300">
                Daftar & Amankan Kuota Sekarang ✨
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}