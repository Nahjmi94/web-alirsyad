'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ==========================================
// KODE ANIMASI SCROLL
// ==========================================
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

// KOMPONEN AVATAR MUSLIMAH MINIMALIS (Wajah Rata & Jilbab)
function MuslimahAvatar() {
  return (
    <div className="w-full h-full bg-emerald-900/60 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-300/80 mt-3" fill="currentColor">
        {/* Badan / Pakaian */}
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        {/* Hijab / Jilbab Menutup Aurat */}
        <path d="M50 15 C30 15, 20 30, 20 55 C20 75, 35 85, 50 85 C65 85, 80 75, 80 55 C80 30, 70 15, 50 15 Z" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
        {/* Wajah Rata / Minimalis (Tanpa Hidung/Mulut) */}
        <circle cx="50" cy="48" r="16" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export default function PaudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 overflow-hidden">
      
      {/* =======================================
          0. HERO SECTION
          ======================================= */}
      <section className="relative pt-12 pb-10 px-6 text-center">
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-6 tracking-widest shadow-inner">
            USIA 3 - 6 TAHUN
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md tracking-tight">
            PAUD (KB & TK) Al-Irsyad <br /> Pekalongan
          </h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto leading-relaxed text-lg font-light">
            Pembentukan karakter islami sejak dini, stimulasi motorik, dan pembiasaan hafalan doa harian dalam lingkungan yang menyenangkan.
          </p>
        </RevealOnScroll>
      </section>

      {/* =======================================
          1. SAMBUTAN KEPALA SEKOLAH PAUD
          ======================================= */}
      <section className="max-w-5xl mx-auto px-6 py-6 w-full mb-8">
        <RevealOnScroll delay={200}>
          <div className="bg-[#052e20]/40 backdrop-blur-sm border border-emerald-800/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col md:flex-row gap-8 items-center hover:border-amber-400/30 transition-colors duration-500">
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-emerald-600/30 shadow-lg group">
              <MuslimahAvatar />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 tracking-widest uppercase">
                Sambutan Kepala Sekolah
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Ustazah Aisyah, S.Pd</h2>
              <p className="text-amber-400 text-sm font-medium mb-4">- Kepala PAUD (KB & TK) -</p>
              <p className="text-emerald-100/80 leading-relaxed text-sm font-light text-justify">
                "Selamat datang di PAUD Al-Irsyad Pekalongan. Kami berkomitmen untuk membentuk karakter islami anak sejak usia dini melalui pendekatan belajar yang menyenangkan, interaktif, dan penuh kasih sayang. Mari bersama-sama membangun pondasi terbaik untuk masa depan ananda tercinta."
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* =======================================
          2. VIDEO SEKOLAH
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">🎥</span> Galeri Video Sekolah
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { judul: "Video Profil Utama", desc: "Mengenal lebih dekat lingkungan PAUD Al-Irsyad.", thumbnail: "https://placehold.co/600x340/041a12/fbbf24?text=Thumbnail+Video" },
            { judul: "Kegiatan Terbaru", desc: "Keseruan anak-anak bermain dan belajar.", thumbnail: "https://placehold.co/600x340/041a12/fbbf24?text=Thumbnail+Video" }
          ].map((vid, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <div className="group relative bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img src={vid.thumbnail} alt={vid.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center z-10">
                    <span className="text-6xl drop-shadow-lg group-hover:scale-125 transition-transform duration-500">▶️</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">{vid.judul}</h3>
                  <p className="text-sm text-emerald-100/70">{vid.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* =======================================
          3. FOTO & ARTIKEL KEGIATAN
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">📸</span> Foto & Artikel Kegiatan
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            { judul: "Manasik Haji Cilik", desc: "Melatih anak praktik ibadah haji sejak dini.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Foto+Kegiatan" },
            { judul: "Outbound Ceria", desc: "Kegiatan alam untuk melatih motorik kasar.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Foto+Kegiatan" },
            { judul: "Pentas Seni Islami", desc: "Menampilkan bakat dan hafalan santri.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Foto+Kegiatan" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <div className="group overflow-hidden rounded-3xl border border-emerald-800/50 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.3)] transition-all duration-500 bg-[#041a12] cursor-pointer flex flex-col h-full">
                <div className="h-48 relative overflow-hidden">
                  <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 border-t border-emerald-800/30 flex-1">
                  <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.judul}</h4>
                  <p className="text-sm text-emerald-100/70 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={600}>
          <div className="text-center">
            <Link 
              href="/paud/kegiatan" 
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-emerald-600/50 text-emerald-300 hover:text-emerald-950 hover:bg-amber-400 hover:border-amber-400 font-bold transition-all duration-300 shadow-sm"
            >
              Lihat Semua Kegiatan <span>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* =======================================
          4. FOTO & ARTIKEL PRESTASI
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">🏆</span> Prestasi Siswa
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            { juara: "Juara 1 Lomba Mewarnai", event: "Tingkat Kota Pekalongan", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Foto+Prestasi" },
            { juara: "Juara 2 Tahfidz Cilik", event: "Festival Anak Sholeh", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Foto+Prestasi" },
            { juara: "Juara 1 Hafalan Doa", event: "Lomba Islami TK se-Kota", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Foto+Prestasi" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <div className="group overflow-hidden rounded-3xl border border-emerald-800/50 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 bg-[#041a12] cursor-pointer flex flex-col h-full relative">
                <div className="absolute top-4 right-4 z-20 text-4xl drop-shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🥇</div>
                <div className="h-40 relative overflow-hidden">
                  <img src={item.foto} alt={item.juara} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-5 border-t border-emerald-800/30 flex-1 relative z-10 bg-[#041a12]">
                  <h4 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">{item.juara}</h4>
                  <p className="text-sm text-emerald-100/70 font-light">{item.event}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={600}>
          <div className="text-center">
            <Link 
              href="/paud/prestasi" 
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-emerald-600/50 text-emerald-300 hover:text-emerald-950 hover:bg-amber-400 hover:border-amber-400 font-bold transition-all duration-300 shadow-sm"
            >
              Lihat Semua Prestasi <span>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* =======================================
          5. TENAGA PENDIDIK (3 UTAMA DENGAN AVATAR MINIMALIS)
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full text-center">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <span className="text-amber-400 text-3xl">👩‍🏫</span> Tenaga Pendidik
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
           {[
             { nama: "Ustazah Aisyah, S.Pd", peran: "Kepala Sekolah PAUD" },
             { nama: "Ustazah Fatimah, S.Pd.I", peran: "Koordinator Tahfidz" },
             { nama: "Ustazah Khadijah, S.Psi", peran: "Guru Konseling Anak" }
           ].map((guru, i) => (
             <RevealOnScroll key={i} delay={(i+1) * 200}>
                <div className="bg-[#052e20]/40 backdrop-blur-sm border border-emerald-800/40 p-6 rounded-3xl hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] transition-all duration-500 text-center group">
                   <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-600/50 group-hover:border-amber-400 transition-colors mb-4 shadow-lg">
                      <MuslimahAvatar />
                   </div>
                   <h3 className="font-bold text-amber-400 mb-1">{guru.nama}</h3>
                   <p className="text-sm text-emerald-100/80 font-light">{guru.peran}</p>
                </div>
             </RevealOnScroll>
           ))}
        </div>

        <RevealOnScroll delay={800}>
          <Link 
            href="/paud/pengajar" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#052e20] hover:bg-emerald-800 border border-emerald-600/50 text-white font-bold transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.4)]"
          >
            Lihat 30+ Pengajar Lainnya <span>→</span>
          </Link>
        </RevealOnScroll>
      </section>

      {/* =======================================
          6. KURIKULUM & PEMBELAJARAN
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">📚</span> Kurikulum & Pembelajaran
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
               <div className="group overflow-hidden rounded-3xl border border-emerald-800/50 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] transition-all duration-500 bg-[#041a12] p-6 cursor-default h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left drop-shadow-lg">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-emerald-100/70 leading-relaxed">{item.desc}</p>
               </div>
             </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* =======================================
          7. SARANA & PRASARANA
          ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">🏫</span> Sarana & Prasarana
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { nama: "Ruang Kelas Ber-AC", foto: "https://placehold.co/400x300/064e3b/fbbf24?text=Foto+Fasilitas" },
            { nama: "Taman Bermain Anak", foto: "https://placehold.co/400x300/064e3b/fbbf24?text=Foto+Fasilitas" },
            { nama: "Mushola Representatif", foto: "https://placehold.co/400x300/064e3b/fbbf24?text=Foto+Fasilitas" },
            { nama: "Perpustakaan Mini", foto: "https://placehold.co/400x300/064e3b/fbbf24?text=Foto+Fasilitas" }
          ].map((item, i) => (
             <RevealOnScroll key={i} delay={(i+1) * 150}>
               <div className="bg-[#041a12] border border-emerald-800/50 rounded-2xl overflow-hidden group hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.2)] transition-all duration-300 h-full flex flex-col">
                  <div className="h-32 relative overflow-hidden">
                    <img src={item.foto} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 text-center border-t border-emerald-800/30">
                    <h4 className="font-bold text-sm text-emerald-100 group-hover:text-amber-400 transition-colors">{item.nama}</h4>
                  </div>
               </div>
             </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* =======================================
          8. RINCIAN BIAYA
          ======================================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 w-full mb-12">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
            <span className="text-amber-400 text-3xl">💰</span> Estimasi Rincian Biaya
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <div className="bg-[#052e20]/40 backdrop-blur-sm border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-medium block group-hover:translate-x-2 transition-transform">Uang Pangkal / Gedung</span>
                  <span className="text-xs text-emerald-100/60 font-light">(Sudah termasuk infak pembangunan & kegiatan 1 tahun)</span>
                </div>
                <span className="font-bold text-amber-400 text-lg">Rp 2.500.000</span>
              </div>

              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-medium block group-hover:translate-x-2 transition-transform">Seragam (3 Stel + Atribut)</span>
                  <span className="text-xs text-emerald-100/60 font-light">(Batik Al-Irsyad, Olahraga, Muslim & Atribut lengkap)</span>
                </div>
                <span className="font-bold text-amber-400 text-lg">Rp 450.000</span>
              </div>

              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4 hover:text-amber-400 transition-colors group cursor-default">
                <div>
                  <span className="font-medium block group-hover:translate-x-2 transition-transform">SPP Bulanan</span>
                  <span className="text-xs text-emerald-100/60 font-light">(Infaq operasional pendidikan per bulan)</span>
                </div>
                <span className="font-bold text-amber-400 text-lg">Rp 150.000 <span className="text-xs font-normal text-emerald-100/60">/bulan</span></span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-amber-500/20 text-center relative z-10">
              <p className="text-sm text-emerald-200/80 mb-4 font-light">Tersedia program keringanan dan beasiswa bagi pendaftar gelombang pertama atau hafidz cilik.</p>
              <a href="/pendaftaran/paud" className="inline-block px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold shadow-lg shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300">
                Daftar & Amankan Kuota Sekarang ✨
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}