'use client';

import React from 'react';
import { Target, Compass, Award, ShieldCheck, Users, FileCheck2, Cpu } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="py-20 relative bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-teal-400 uppercase">Tentang Kami</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            PT SENTRA MEDIZIN INDONESIA
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Perusahaan konsultan regulasi dan kepatuhan hukum independen yang berdedikasi tinggi membantu para pelaku industri Alat Kesehatan, Perbekalan Kesehatan Rumah Tangga (PKRT), Kebijakan Kefarmasian, Kosmetika, Herbal, serta Hak Kekayaan Intelektual (HKI) di Indonesia.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Visi */}
          <div className="glass-panel p-8 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Visi Perusahaan</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Menjadi konsultan regulasi & kepatuhan fasilitas kefarmasian dan alat kesehatan terdepan di Indonesia yang terpercaya, profesional, akuntabel, serta memberikan solusi komprehensif tanpa hambatan bagi para pelaku usaha lokal maupun internasional.
            </p>
          </div>

          {/* Misi */}
          <div className="glass-panel p-8 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Misi Utama</h3>
            <ul className="text-slate-300 text-sm space-y-2 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 font-bold">•</span>
                <span>Memberikan asistensi teknis penyusunan Dokumen Standar Operasional Prosedur (SOP) 13 Bab & Sistem Manajemen Mutu secara akurat.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 font-bold">•</span>
                <span>Mempercepat penerbitan Izin Distribusi (IDAK), Sertifikasi CDAKB/CPB/CPPKRTB, & Izin Edar resmi dari Kementerian Kesehatan & BPOM RI.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 font-bold">•</span>
                <span>Mendampingi secara profesional saat audit verifikasi lapangan (CAPA & Verifikasi).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Core Strength Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl border border-slate-800">
            <Users className="w-8 h-8 text-teal-400 mb-3" />
            <h4 className="font-bold text-white text-base mb-1">Tim Ahli Multidisiplin</h4>
            <p className="text-xs text-slate-400">Didukung oleh Apoteker Penanggung Jawab, Sarjana Teknik Elektromedis, & Pakar Hukum Regulasi.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-slate-800">
            <FileCheck2 className="w-8 h-8 text-cyan-400 mb-3" />
            <h4 className="font-bold text-white text-base mb-1">Penyusunan SOP 13 Bab</h4>
            <p className="text-xs text-slate-400">Penyusunan manual mutu & SOP lengkap sesuai matriks penilaian audit Kemenkes / BPOM.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-slate-800">
            <ShieldCheck className="w-8 h-8 text-teal-400 mb-3" />
            <h4 className="font-bold text-white text-base mb-1">Garansi Audit & CAPA</h4>
            <p className="text-xs text-slate-400">Pengawalan sampai perbaikan temuan audit (Corrective Action) dinyatkan selesai / closed.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-slate-800">
            <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
            <h4 className="font-bold text-white text-base mb-1">Integrasi Portal Resmi</h4>
            <p className="text-xs text-slate-400">Penguasaan penuh portal OSS RBA, E-Akustik, E-BPOM, E-Watch Alkes, SIMPONI, & BPJPH.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
