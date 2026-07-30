'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle2, Upload, User, Phone } from 'lucide-react';

export default function FormPendaftaranSMA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#071E16] text-slate-100 font-sans selection:bg-amber-400 selection:text-emerald-950 py-12 px-6">
      <div className="max-w-3xl mx-auto mb-8 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" /> Kembali ke Beranda
        </Link>
        <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden border border-amber-400">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      <main className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-900/40 via-[#071E16] to-emerald-950/90 border border-emerald-700/50 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center space-y-3 mb-10 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
            Formulir Resmi PPDB 2026/2027
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Pendaftaran SMA Al-Irsyad</h1>
          <p className="text-xs text-emerald-200/70">Silakan isi data calon peserta didik tingkat Sekolah Menengah Atas.</p>
        </div>

        {submitted ? (
          <div className="bg-emerald-950/90 border border-emerald-500/50 rounded-3xl p-8 text-center space-y-4 relative z-10 animate-fade-in">
            <div className="w-16 h-16 bg-amber-400 text-emerald-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Pendaftaran SMA Berhasil Dikirim!</h3>
            <p className="text-xs text-emerald-200/70 max-w-md mx-auto">Data Anda telah diterima panitia SMA Al-Irsyad. Kami akan segera menghubungi nomor WhatsApp Anda.</p>
            <div className="pt-4">
              <Link href="/" className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition inline-block">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-4 bg-emerald-950/40 p-6 rounded-3xl border border-emerald-800/50">
              <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <User className="w-4 h-4" /> Data Calon Siswa SMA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-200 mb-1">Nama Lengkap Siswa</label>
                  <input required type="text" placeholder="Nama lengkap" className="w-full px-4 py-3 rounded-xl bg-[#071E16] border border-emerald-800 text-white text-xs focus:border-amber-400 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-emerald-200 mb-1">NISN</label>
                  <input required type="text" placeholder="Nomor Induk Siswa Nasional" className="w-full px-4 py-3 rounded-xl bg-[#071E16] border border-emerald-800 text-white text-xs focus:border-amber-400 focus:outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-200 mb-1">Pilihan Peminatan / Jurusan</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#071E16] border border-emerald-800 text-white text-xs focus:border-amber-400 focus:outline-none transition">
                  <option>MIPA (Matematika & Ilmu Pengetahuan Alam)</option>
                  <option>IPS (Ilmu Pengetahuan Sosial)</option>
                  <option>Keagamaan / Tahfidz Unggulan</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 bg-emerald-950/40 p-6 rounded-3xl border border-emerald-800/50">
              <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Data Orang Tua / Wali
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-200 mb-1">Nama Orang Tua / Wali</label>
                  <input required type="text" placeholder="Nama Ayah / Ibu" className="w-full px-4 py-3 rounded-xl bg-[#071E16] border border-emerald-800 text-white text-xs focus:border-amber-400 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-emerald-200 mb-1">Nomor WhatsApp Aktif</label>
                  <input required type="tel" placeholder="081234567890" className="w-full px-4 py-3 rounded-xl bg-[#071E16] border border-emerald-800 text-white text-xs focus:border-amber-400 focus:outline-none transition" />
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-emerald-950/40 p-6 rounded-3xl border border-emerald-800/50">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <Upload className="w-4 h-4" /> Unggah Berkas Persyaratan SMA
                </h3>
                <span className="text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Maks. 5MB (JPG, PNG, PDF, DOC, DOCX)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-emerald-200">Upload KK</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="w-full text-xs text-emerald-300 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-emerald-900 file:text-amber-300 cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-emerald-200">Upload Akta Kelahiran</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="w-full text-xs text-emerald-300 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-emerald-900 file:text-amber-300 cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-emerald-200">Upload Ijazah/SKL SMP</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="w-full text-xs text-emerald-300 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-emerald-900 file:text-amber-300 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button type="submit" className="w-full sm:w-auto px-12 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-emerald-950 font-black text-sm shadow-2xl shadow-amber-400/20 hover:scale-105 transition flex items-center justify-center gap-2 mx-auto cursor-pointer">
                <Send className="w-4 h-4" /> Kirim Formulir Pendaftaran SMA
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}