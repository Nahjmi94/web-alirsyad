import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yayasan Al-Irsyad Al-Islamiyyah Kota Pekalongan',
  description: 'Website Resmi Direktorat Pendidikan Al-Irsyad Pekalongan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#071E16] text-slate-100 antialiased flex flex-col min-h-screen`}>
        
        {/* NAVBAR UTAMA */}
        <Header />

        {/* 
          KONTEN UTAMA:
          pt-[130px] memastikan semua halaman aman dari tumpang-tindih navbar. 
          animate-fade-in-up bikin transisi pindah halaman jadi lebih *smooth*.
        */}
        <main className="flex-1 pt-[130px] animate-fade-in-up">
          {children}
        </main>

      </body>
    </html>
  );
}