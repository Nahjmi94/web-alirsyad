'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>{children}</div>;
}

function MuslimAvatar() {
  return (
    <div className="w-full h-full bg-emerald-900/60 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <circle cx="50" cy="45" r="16" fill="#fef3c7" />
        <path d="M34 40 C34 30, 66 30, 66 40 L66 42 L34 42 Z" fill="#064e3b" />
      </svg>
    </div>
  );
}

function MuslimahAvatar() {
  return (
    <div className="w-full h-full bg-emerald-900/60 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-300/80 mt-3" fill="currentColor">
        <path d="M20 90 C20 70, 35 60, 50 60 C65 60, 80 70, 80 90 Z" />
        <path d="M50 15 C30 15, 20 30, 20 55 C20 75, 35 85, 50 85 C65 85, 80 75, 80 55 C80 30, 70 15, 50 15 Z" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
        <circle cx="50" cy="48" r="16" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export default function SmaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#071E16] text-slate-100 pb-20 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-10 px-6 text-center">
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-6 tracking-widest shadow-inner">USIA 16 - 18 TAHUN</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md tracking-tight">SMA Al-Irsyad <br /> Pekalongan</h1>
          <p className="text-emerald-100/70 max-w-2xl mx-auto leading-relaxed text-lg font-light">Mencetak pemuda berprestasi, berwawasan global, unggul dalam UTBK & PTN, serta teguh pada manhaj yang lurus.</p>
        </RevealOnScroll>
      </section>

      {/* SAMBUTAN */}
      <section className="max-w-5xl mx-auto px-6 py-6 w-full mb-8">
        <RevealOnScroll delay={200}>
          <div className="bg-[#052e20]/40 backdrop-blur-sm border border-emerald-800/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col md:flex-row gap-8 items-center hover:border-amber-400/30 transition-colors">
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-emerald-600/30 shadow-lg group"><MuslimAvatar /></div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 tracking-widest uppercase">Sambutan Kepala Sekolah</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Ustadz Ibrahim, M.Si</h2>
              <p className="text-amber-400 text-sm font-medium mb-4">- Kepala SMA Al-Irsyad -</p>
              <p className="text-emerald-100/80 leading-relaxed text-sm font-light text-justify">"Di tingkat SMA, tantangan pemikiran dan akademis semakin nyata. Kami mendidik santri untuk siap bersaing di perguruan tinggi favorit (PTN) melalui program sukses UTBK, tanpa meninggalkan identitas akhlak dan akidah Islam."</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* VIDEO */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="text-amber-400 text-3xl">🎥</span> Galeri Video Sekolah</h2></RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { judul: "Video Profil SMA", desc: "Fasilitas Lab, Program UTBK, dan ekstrakurikuler unggulan.", thumbnail: "https://placehold.co/600x340/041a12/fbbf24?text=Video+Profil+SMA" },
            { judul: "Kilas Balik Lulusan PTN", desc: "Testimoni alumni SMA Al-Irsyad di kampus favorit.", thumbnail: "https://placehold.co/600x340/041a12/fbbf24?text=Alumni+PTN" }
          ].map((vid, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <div className="group relative bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 cursor-pointer">
                <div className="aspect-video relative overflow-hidden"><img src={vid.thumbnail} alt={vid.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center z-10"><span className="text-6xl drop-shadow-lg group-hover:scale-125 transition-transform duration-500">▶️</span></div></div>
                <div className="p-6"><h3 className="text-lg font-bold text-amber-400 mb-2">{vid.judul}</h3><p className="text-sm text-emerald-100/70">{vid.desc}</p></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* KEGIATAN */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="text-amber-400 text-3xl">📸</span> Kegiatan Terbaru</h2></RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            { id: '1', judul: "Studi Kampus (Campus Tour)", desc: "Kunjungan ke PTN favorit untuk memotivasi siswa.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Kegiatan+SMA+1" },
            { id: '2', judul: "Mukhayyam Al-Qur'an", desc: "Karantina tahfidz intensif selama 1 minggu.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Kegiatan+SMA+2" },
            { id: '3', judul: "Gelar Karya Ilmiah (KIR)", desc: "Presentasi proyek sains dan inovasi siswa.", foto: "https://placehold.co/600x400/064e3b/fbbf24?text=Kegiatan+SMA+3" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <Link href={`/sma/kegiatan/${item.id}`} className="group overflow-hidden rounded-3xl border border-emerald-800/50 hover:border-amber-400/50 hover:-translate-y-2 transition-all duration-500 bg-[#041a12] cursor-pointer flex flex-col h-full block">
                <div className="h-48 relative overflow-hidden"><img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-5 border-t border-emerald-800/30 flex-1"><h4 className="font-bold text-white mb-2 group-hover:text-amber-400">{item.judul}</h4><p className="text-sm text-emerald-100/70 line-clamp-2">{item.desc}</p></div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="text-center"><Link href="/sma/kegiatan" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-emerald-600/50 text-emerald-300 hover:text-emerald-950 hover:bg-amber-400 font-bold transition-all shadow-sm">Lihat Semua Kegiatan <span>→</span></Link></div>
      </section>

      {/* PRESTASI */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="text-amber-400 text-3xl">🏆</span> Prestasi Siswa</h2></RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            { id: '1', juara: "Emas OSN Kimia", event: "Tingkat Nasional 2026", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+1" },
            { id: '2', juara: "Lolos SNBP Kedokteran", event: "Universitas Indonesia", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+2" },
            { id: '3', juara: "Juara 1 Debat Bahasa Inggris", event: "English National Debate", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Prestasi+SMA+3" }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 200}>
              <Link href={`/sma/prestasi/${item.id}`} className="group overflow-hidden rounded-3xl border border-emerald-800/50 hover:border-amber-400/50 hover:-translate-y-2 transition-all duration-500 bg-[#041a12] cursor-pointer flex flex-col h-full relative block">
                <div className="absolute top-4 right-4 z-20 text-4xl drop-shadow-md group-hover:scale-125 transition-all">🥇</div>
                <div className="h-40 relative overflow-hidden"><img src={item.foto} alt={item.juara} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" /></div>
                <div className="p-5 border-t border-emerald-800/30 flex-1 relative z-10 bg-[#041a12]"><h4 className="text-lg font-bold text-amber-400 mb-2">{item.juara}</h4><p className="text-sm text-emerald-100/70 font-light">{item.event}</p></div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="text-center"><Link href="/sma/prestasi" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-emerald-600/50 text-emerald-300 hover:text-emerald-950 hover:bg-amber-400 font-bold transition-all shadow-sm">Lihat Semua Prestasi <span>→</span></Link></div>
      </section>

      {/* TENAGA PENDIDIK */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full text-center">
        <RevealOnScroll delay={100}><h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3"><span className="text-amber-400 text-3xl">👩‍🏫</span> Tenaga Pendidik</h2></RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
           {[
             { nama: "Ustadz Ibrahim, M.Si", peran: "Kepala Sekolah & Guru Fisika", gender: "M" },
             { nama: "Ustazah Aini, M.Pd", peran: "Wakasek Kurikulum & Biologi", gender: "F" },
             { nama: "Ustadz Yasin, Lc. MA", peran: "Guru PAI & Bahasa Arab", gender: "M" }
           ].map((guru, i) => (
             <RevealOnScroll key={i} delay={(i+1) * 200}>
                <div className="bg-[#052e20]/40 border border-emerald-800/40 p-6 rounded-3xl text-center group hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500">
                   <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-600/50 mb-4 shadow-lg group-hover:border-amber-400 transition-colors">{guru.gender === 'M' ? <MuslimAvatar /> : <MuslimahAvatar />}</div>
                   <h3 className="font-bold text-amber-400 mb-1">{guru.nama}</h3><p className="text-sm text-emerald-100/80 font-light">{guru.peran}</p>
                </div>
             </RevealOnScroll>
           ))}
        </div>
        <RevealOnScroll delay={800}><Link href="/sma/pengajar" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#052e20] hover:bg-emerald-800 border border-emerald-600/50 text-white font-bold transition-all shadow-lg hover:-translate-y-1">Lihat 30+ Pengajar Lainnya <span>→</span></Link></RevealOnScroll>
      </section>

      {/* ======================================================= */}
      {/* KURIKULUM & PEMBELAJARAN (GAYA PAUD: 4 KOTAK KARTU) */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">📚</span> Kurikulum & Pembelajaran
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { ikon: "🎯", judul: "Sukses UTBK & PTN", desc: "Bimbingan intensif dan tryout berkala untuk menembus Perguruan Tinggi Negeri favorit." },
            { ikon: "🔬", judul: "Sains & Riset (KIR)", desc: "Pengembangan kemampuan berpikir ilmiah melalui eksperimen lab dan karya tulis." },
            { ikon: "📖", judul: "Tahfidz & Syar'i", desc: "Pemantapan hafalan Al-Qur'an serta pendalaman ilmu agama dan adab Islami." },
            { ikon: "💡", judul: "Leadership & Karakter", desc: "Pelatihan kemandirian, manajemen organisasi, dan tanggung jawab sosial." }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 150}>
              <div className="bg-[#052e20]/40 border border-emerald-800/50 rounded-3xl p-6 h-full flex flex-col justify-between hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <div>
                  <div className="text-4xl mb-4 p-3 bg-emerald-900/50 w-fit rounded-2xl border border-emerald-700/40">{item.ikon}</div>
                  <h3 className="text-lg font-bold text-amber-400 mb-2">{item.judul}</h3>
                  <p className="text-sm text-emerald-100/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ======================================================= */}
      {/* SARANA & PRASARANA (GAYA PAUD: FOTO FASILITAS) */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <RevealOnScroll delay={100}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-amber-400 text-3xl">🏫</span> Sarana & Prasarana
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { judul: "Lab Sains Canggih", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Lab+Sains" },
            { judul: "Perpustakaan Referensi", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Perpustakaan" },
            { judul: "Ruang Diskusi & Konseling", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Ruang+Konseling" },
            { judul: "Masjid Kampus Utama", foto: "https://placehold.co/600x400/041a12/fbbf24?text=Masjid+Kampus" }
          ].map((sarpras, i) => (
            <RevealOnScroll key={i} delay={(i+1) * 150}>
              <div className="bg-[#041a12] border border-emerald-800/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full group shadow-xl">
                <div className="h-44 relative overflow-hidden">
                  <img src={sarpras.foto} alt={sarpras.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 text-center bg-[#052e20]/60 border-t border-emerald-800/40 flex-1 flex flex-col justify-center">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">Foto Fasilitas</span>
                  <h4 className="text-base font-bold text-white">{sarpras.judul}</h4>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* BIAYA */}
      <section className="max-w-4xl mx-auto px-6 py-12 w-full mb-12">
        <RevealOnScroll delay={100}><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 justify-center md:justify-start"><span className="text-amber-400 text-3xl">💰</span> Estimasi Rincian Biaya SMA</h2></RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className="bg-[#052e20]/40 backdrop-blur-sm border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4"><span className="font-medium">Uang Pangkal / Gedung</span><span className="font-bold text-amber-400 text-lg">Rp 4.500.000</span></div>
              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4"><span className="font-medium">Seragam (4 Stel)</span><span className="font-bold text-amber-400 text-lg">Rp 850.000</span></div>
              <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4"><span className="font-medium">SPP Bulanan</span><span className="font-bold text-amber-400 text-lg">Rp 350.000 <span className="text-xs text-emerald-100/60">/bulan</span></span></div>
            </div>
            <div className="mt-8 pt-6 border-t border-amber-500/20 text-center relative z-10"><Link href="/pendaftaran/sma" className="inline-block px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold shadow-lg transition-all">Daftar SMA Al-Irsyad Sekarang ✨</Link></div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}