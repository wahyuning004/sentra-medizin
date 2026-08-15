'use client';

import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, ExternalLink, CheckCircle2, Award, UserCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t pt-14 pb-10 relative overflow-hidden transition-colors ${
      isDark ? 'bg-[#050C1A] text-slate-400 border-slate-800' : 'bg-slate-950 text-slate-300 border-slate-800'
    }`}>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          
          {/* Col 1 & 2: Brand Info & Profile Konsultan Utama */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Shield className="w-6 h-6 text-slate-950 font-black" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-tight">
                  SENTRA <span className="text-teal-400">MEDIZIN</span>
                </span>
                <span className="text-[10px] tracking-widest text-teal-300 uppercase block font-extrabold mt-0.5">
                  PT SENTRA MEDIZIN KONSULTINDO
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Lembaga konsultan spesialis regulasi & kepatuhan perizinan Alat Kesehatan (IDAK & CDAKB), BPOM, PKRT, Kebijakan Kefarmasian, serta Sertifikasi Mutu Resmi Kementerian Kesehatan RI.
            </p>

            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-white">
                <UserCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Konsultan Utama: apt. Prayoga Rahmat, S.Farm</span>
              </div>
              <p className="text-[11px] text-slate-400 pl-6 leading-tight">
                Senior Regulatory Auditor & Specialist Pendampingan Sertifikasi CDAKB Kemenkes RI
              </p>
            </div>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Jl. MT Haryono Kav. 10, Jakarta Selatan, DKI Jakarta 12810
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Jam Operasional: Senin - Jumat (08:00 - 17:00 WIB)</span>
              </div>
              <div className="flex items-center space-x-2.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Garansi Legalitas 100% Sesuai Regulasi Kemenkes & BPOM RI</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi Utama Landing Page */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigasi Landing Page
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#profile" className="hover:text-teal-400 transition-colors block py-0.5">● Profil Perusahaan & Konsultan</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● 17 Katalog Layanan Regulasi</a></li>
              <li><a href="#kbli" className="hover:text-teal-400 transition-colors block py-0.5">● Fitur Pencarian KBLI Perizinan</a></li>
              <li><a href="#tracking" className="hover:text-teal-400 transition-colors block py-0.5">● Lacak Status Permohonan</a></li>
              <li><a href="#workflow" className="hover:text-teal-400 transition-colors block py-0.5">● Alur Tahapan Audit CDAKB</a></li>
              <li><a href="#articles" className="hover:text-teal-400 transition-colors block py-0.5">● Artikel & Edukasi Regulasi</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors block py-0.5">● Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 4: Layanan Regulasi Unggulan */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Layanan Unggulan
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Izin IDAK (Distribusi Alkes)</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Audit & Sertifikasi CDAKB</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Izin Edar Alkes (AKD / AKL)</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Notifikasi Kosmetika BPOM</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Izin Produksi PKRT & Household</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors block py-0.5">● Izin Edar Obat Tradisional (POM TR)</a></li>
            </ul>
          </div>

          {/* Col 5: Kontak Resmi Direct Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Kontak Resmi Perusahaan
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/90 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Telepon / WhatsApp Official:</span>
                <span className="font-extrabold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>0812-9988-7766</span>
                </span>
              </div>

              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/90 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Konsultasi Legal:</span>
                <span className="font-extrabold text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>info@sentramedizin.co.id</span>
                </span>
              </div>

              <a
                href="https://wa.me/6281299887766?text=Halo%20Tim%20Sentra%20Medizin,%20saya%20ingin%20konsultasi%20perizinan%20regulasi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20"
              >
                <span>Konsultasi WA Fast-Response</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} PT Sentra Medizin Konsultindo. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-slate-400 text-center sm:text-right max-w-md leading-tight">
            Seluruh pendaftaran & pendampingan sertifikasi diselenggarakan resmi sesuai regulasi Kemenkes RI, BPOM RI, & Sistem OSS RBA.
          </p>
        </div>

      </div>
    </footer>
  );
}
