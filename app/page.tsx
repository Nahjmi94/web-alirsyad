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

export default function Home() {
  const dataLoker: any[] = []; 
  const linkGoogleForm = "https://forms.gle/o6iFkJJxAxyLy8Lp7";

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-100 selection:bg-amber-400 selection:text-emerald-950 overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION (Ukuran Proporsional & Rapi)
          ========================================= */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:pt-16 overflow-hidden border-b border-emerald-400/30">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* AREA TEKS HERO */}
          <div className="text-center lg:text-left bg-[#071E16]/90 p-8 sm:p-10 rounded-3xl border border-emerald-700/50 shadow-2xl backdrop-blur-md">
            <RevealOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-6 shadow-lg">
                <span className="text-amber-400 text-sm sm:text-base">✨</span> Pusat Unggulan Pendidikan Islam & Sains
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] mb-5 tracking-tight drop-shadow-md">
                Sekolahnya Calon <br />
                Para Pemimpin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400">
                  Masa Depan
                </span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <p className="text-slate-200 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Direktorat Pendidikan Al-Irsyad Pekalongan menyelenggarakan sistem pendidikan terpadu berkualitas dari jenjang PAUD, SD, SMP, hingga SMA.
              </p>
            </RevealOnScroll>
          </div>

          {/* LOGO DI KANAN */}
          <RevealOnScroll delay={300}>
            <div className="relative group mx-auto w-full max-w-md lg:max-w-none mt-4 lg:mt-0">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/30 to-emerald-300/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
              <div className="relative h-[350px] w-full bg-[#071E16]/90 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-6 overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                  src="/logo.png" 
                  alt="Logo Al Irsyad Besar" 
                  className="w-56 sm:w-64 h-auto object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          2. BERITA & SAMBUTAN (Font Artikel Diperbesar & Jelas)
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <RevealOnScroll delay={100}>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3 border-b-2 border-emerald-400/50 pb-3 relative">
                Tulisan Terbaru
                <span className="absolute bottom-[-2px] left-0 w-28 h-1 bg-amber-400"></span>
              </h2>
            </RevealOnScroll>

            <div className="space-y-6">
              {[
                { 
                  judul: "Undangan Sosialisasi Program dan Tata Tertib Al-Irsyad", 
                  tgl: "25/07/2026 14:49 - Oleh Media Al-Irsyad", 
                  desc: "Mari Bersinergi untuk Masa Depan Gemilang! Pendidikan yang sukses berawal dari kolaborasi yang erat antara sekolah dan rumah dalam mendidik putra-putri tercinta...",
                  img: "https://placehold.co/600x400/0d4738/fbbf24?text=Berita+1"
                },
                { 
                  judul: "Telah Dibuka !! Pendaftaran Peserta Didik Baru", 
                  tgl: "01/11/2025 11:22 - Oleh Media Al-Irsyad", 
                  desc: "Alhamdulillah... Perguruan Al-Irsyad Al-Islamiyyah Pekalongan telah membuka Pendaftaran Peserta Didik Baru. Pendaftaran dibuka secara Offline maupun Online.",
                  img: "https://placehold.co/600x400/0d4738/fbbf24?text=Berita+2"
                }
              ].map((berita, i) => (
                <RevealOnScroll key={i} delay={(i + 1) * 200}>
                  <div className="flex flex-col sm:flex-row gap-6 bg-[#0d4738] border border-emerald-400/50 rounded-2xl overflow-hidden hover:border-amber-400/50 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.15)] transition-all duration-300 group cursor-pointer">
                    <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                      <img src={berita.img} alt={berita.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                      <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">{berita.judul}</h3>
                      <p className="text-base sm:text-lg text-emerald-50 mb-5 line-clamp-3 leading-relaxed font-normal">{berita.desc}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-sm font-semibold text-amber-300">{berita.tgl}</span>
                        <div className="w-9 h-9 rounded-lg bg-[#115e4f] flex items-center justify-center group-hover:bg-amber-400 group-hover:text-emerald-950 transition-colors">
                          <span className="text-base font-bold">↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            
            <RevealOnScroll delay={500}>
              <div className="mt-8 text-center lg:text-left">
                <button className="text-amber-400 hover:text-amber-300 text-base sm:text-lg font-bold flex items-center gap-2 mx-auto lg:mx-0">
                  Lihat Semua Tulisan <span className="text-xl">→</span>
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* SAMBUTAN DIREKTUR */}
          <div className="lg:col-span-1">
             <RevealOnScroll delay={300}>
                <div className="bg-[#0d4738] border border-emerald-400/50 rounded-3xl p-7 shadow-xl hover:border-amber-400/30 transition-colors duration-500 text-center flex flex-col h-full">
                  <div className="bg-white rounded-[2rem] rounded-tl-sm rounded-br-sm p-6 mb-6 mx-auto w-52 h-52 flex items-center justify-center shadow-inner relative overflow-hidden group border-2 border-emerald-400">
                     <div className="absolute top-0 left-0 w-12 h-12 bg-[#115e4f]"></div>
                     <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#115e4f]"></div>
                     <img src="/logo.png" alt="Logo Al-Irsyad" className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-black text-white text-xl sm:text-2xl mb-1 leading-snug">
                    Roiyyan Luqman Shamlan, B.B.A.
                  </h3>
                  <p className="text-amber-300 text-base sm:text-lg font-semibold mb-5 tracking-wide">
                    - Direktur -
                  </p>
                  <div className="text-emerald-50 text-base sm:text-lg font-normal text-justify leading-relaxed mb-6 flex-1">
                    <span className="text-amber-400 font-serif text-xl mr-2 font-medium">
                      السلام عليكم ورحمة الله وبركاته
                    </span>
                    <br className="mb-2" />
                    Perkembangan dan perubahan dunia pendidikan di Indonesia tidak terlepas dari pengaruh perubahan global, perkembangan ilmu pengetahuan dan teknologi...
                  </div>
                  <button className="w-full py-3 rounded-xl border border-emerald-400/80 text-emerald-100 hover:text-emerald-950 hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 text-sm uppercase font-extrabold tracking-widest">
                    Selengkapnya
                  </button>
                </div>
             </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* =========================================
          3. SECTION UNIT PENDIDIKAN
          ========================================= */}
      <section id="unit" className="max-w-7xl mx-auto px-6 py-16 relative w-full border-t border-emerald-400/30">
        <div className="text-center mb-12 relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Unit Pendidikan <span className="text-amber-400">Al-Irsyad</span>
            </h2>
            <p className="text-emerald-50 text-lg sm:text-xl max-w-2xl mx-auto font-normal">
              Kami menyediakan jenjang pendidikan berkelanjutan dengan kurikulum terpadu.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <RevealOnScroll delay={100}>
            <a href="/paud" className="group relative bg-[#0d4738] border border-emerald-400/50 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:border-amber-400/50 block h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#115e4f] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-amber-400/90 transition-all duration-300 shadow-inner">🧸</div>
              <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">PAUD (KB & TK)</h3>
              <p className="text-base text-emerald-50 mb-8 line-clamp-3 leading-relaxed">Membentuk karakter islami sejak dini dengan metode pembelajaran interaktif.</p>
              <span className="text-amber-400 text-base font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all absolute bottom-7">Lihat Detail <span>→</span></span>
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <a href="/sd" className="group relative bg-[#0d4738] border border-emerald-400/50 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:border-amber-400/50 block h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#115e4f] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-amber-400/90 transition-all duration-300 shadow-inner">📚</div>
              <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">SD Al-Irsyad</h3>
              <p className="text-base text-emerald-50 mb-8 line-clamp-3 leading-relaxed">Pondasi dasar ilmu pengetahuan dan pembiasaan ibadah harian.</p>
              <span className="text-amber-400 text-base font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all absolute bottom-7">Lihat Detail <span>→</span></span>
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <a href="/smp" className="group relative bg-[#0d4738] border border-emerald-400/50 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:border-amber-400/50 block h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#115e4f] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-amber-400/90 transition-all duration-300 shadow-inner">🔬</div>
              <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">SMP Al-Irsyad</h3>
              <p className="text-base text-emerald-50 mb-8 line-clamp-3 leading-relaxed">Pengembangan potensi remaja sejalan dengan aqidah lurus dan kuat.</p>
              <span className="text-amber-400 text-base font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all absolute bottom-7">Lihat Detail <span>→</span></span>
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <a href="/sma" className="group relative bg-[#0d4738] border border-emerald-400/50 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:border-amber-400/50 block h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#115e4f] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-amber-400/90 transition-all duration-300 shadow-inner">🎓</div>
              <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">SMA Al-Irsyad</h3>
              <p className="text-base text-emerald-50 mb-8 line-clamp-3 leading-relaxed">Mempersiapkan calon pemimpin masa depan yang berwawasan global.</p>
              <span className="text-amber-400 text-base font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all absolute bottom-7">Lihat Detail <span>→</span></span>
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          4. SECTION KARIR
          ========================================= */}
      <section id="karir" className="max-w-7xl mx-auto px-6 py-16 relative w-full border-t border-emerald-400/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <RevealOnScroll delay={100}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d4738] border border-emerald-400/50 text-emerald-100 text-sm font-bold mb-4">
                💼 Info Loker
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                Bergabung <br/><span className="text-amber-400">Bersama Kami</span>
              </h2>
              <p className="text-emerald-50 text-base sm:text-lg font-normal mb-6 leading-relaxed">
                Kami selalu membuka pintu bagi talenta-talenta terbaik yang memiliki dedikasi tinggi dalam dunia pendidikan untuk bergabung menjadi bagian dari keluarga besar Direktorat Pendidikan Al-Irsyad.
              </p>
              
              <a 
                href={linkGoogleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 border border-amber-500 text-emerald-950 text-base font-black transition-all shadow-lg hover:-translate-y-1"
              >
                Cek Ketersediaan Lowongan
              </a>
            </div>
          </RevealOnScroll>

          <div className="h-full">
            {dataLoker.length > 0 ? (
              <div className="space-y-4">
                {dataLoker.map((loker, i) => (
                  <RevealOnScroll key={i} delay={(i+2) * 150}>
                    <div className="bg-[#0d4738] border border-emerald-400/50 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/50 transition-colors group">
                        <div>
                          <h4 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{loker.posisi}</h4>
                          <p className="text-sm text-emerald-100 mt-1">{loker.syarat}</p>
                        </div>
                        <a 
                          href={linkGoogleForm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 text-sm font-extrabold bg-[#115e4f] text-emerald-100 rounded-lg group-hover:bg-amber-400 group-hover:text-emerald-950 transition-colors"
                        >
                          Detail
                        </a>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            ) : (
              <RevealOnScroll delay={200}>
                <div className="bg-[#0d4738] border-2 border-dashed border-emerald-400/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center h-full min-h-[260px]">
                  <div className="w-16 h-16 bg-[#115e4f] rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl grayscale opacity-90">📭</span>
                  </div>
                  <h4 className="font-extrabold text-white mb-2 text-xl">Belum Ada Lowongan Tersedia</h4>
                  <p className="text-base text-emerald-100 max-w-sm leading-relaxed">
                    Mohon maaf, saat ini belum ada posisi yang sedang dibuka. Silakan pantau terus informasi karir kami secara berkala di halaman ini.
                  </p>
                </div>
              </RevealOnScroll>
            )}
          </div>

        </div>
      </section>

      {/* =========================================
          5. SECTION QNA
          ========================================= */}
      <section id="qna" className="max-w-4xl mx-auto px-6 py-16 relative w-full border-t border-emerald-400/30">
        <RevealOnScroll>
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-3">
              <span className="text-amber-400 animate-pulse">❔</span> Pertanyaan Umum
            </h2>
          </div>
        </RevealOnScroll>
        
        <div className="space-y-5 relative z-10">
          <RevealOnScroll delay={100}>
            <div className="group bg-[#0d4738] border border-emerald-400/50 p-7 rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/50 shadow-md">
              <h3 className="text-lg sm:text-xl font-extrabold text-amber-400 mb-3 flex items-center gap-2">
                <span className="group-hover:rotate-12 transition-transform duration-300">📌</span>
                Bagaimana cara pendaftaran siswa baru?
              </h3>
              <p className="text-emerald-50 font-normal text-base sm:text-lg leading-relaxed">
                Pilih menu <strong className="text-white font-bold">Formulir PPDB</strong> di atas, lalu klik jenjang yang diinginkan untuk mengakses halaman pendaftaran online maupun info pendaftaran offline.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-b from-[#115e4f] to-[#093026] border-t border-emerald-400/60 pt-10 pb-6 mt-auto relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="border-t border-emerald-500/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-emerald-100 text-sm font-medium">© 2026 Direktorat Pendidikan Al-Irsyad Pekalongan. All Rights Reserved.</p>
            <div className="text-amber-400 text-sm font-extrabold tracking-widest uppercase">Cetak Generasi Unggul ✨</div>
          </div>
        </div>
      </footer>
    </div>
  );
}