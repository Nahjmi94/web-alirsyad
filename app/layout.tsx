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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#115e4f] text-slate-50 antialiased flex flex-col min-h-screen`}>
        {/* NAVBAR UTAMA */}
        <Header />

        {/* KONTEN UTAMA */}
        <main className="flex-1 pt-[110px] md:pt-[130px] animate-fade-in-up bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}