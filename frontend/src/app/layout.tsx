import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PT Sentra Medizin - Konsultan Spesialis Regulasi & Kepatuhan Alkes, PKRT, Farmasi, Kosmetik',
  description: 'Konsultan Regulasi & Kepatuhan Distribusi Alat Kesehatan (IDAK, CDAKB, CPB), PKRT (CPPKRTB), Farmasi (CDOB, PBF, SMKPO), Kosmetik, Herbal & Ditjen HKI di Indonesia.',
  keywords: 'PT Sentra Medizin, IDAK, CDAKB, CPB Alkes, CPPKRTB, PBF, CDOB, SMKPO, BPOM, Kemenkes, Izin Edar Alkes, Halal BPJPH, SNI, HKI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
