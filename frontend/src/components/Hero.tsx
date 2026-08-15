'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium shadow-inner">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Konsultan Spesialis Regulasi & Kepatuhan Distribusi</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            Pendampingan Legalitas & Sertifikasi{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Alkes, PKRT, Farmasi, & Kosmetik
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mitra strategis terpercaya dalam pengurusan izin edar, sertifikasi sarana produksi & distribusi (CDAKB, CPB, CPPKRTB, PBF, SMKPO, Halal, SNI, HKI) secara cepat, transparan, dan sesuai regulasi Kementerian Kesehatan & BPOM RI.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>100% Legal & Akuntabel</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Garansi Pendampingan Audit</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Tim Apoteker & Elektromedis Senior</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-teal-500/25 flex items-center justify-center space-x-2 group"
            >
              <span>Eksplor 17 Katalog Layanan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#consultation"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white glass-card hover:bg-slate-800/80 border border-slate-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Ajukan Form Konsultasi</span>
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-teal-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">17+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Layanan Perizinan Resmi</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-teal-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">99.4%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Tingkat Kelulusan Audit</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-teal-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">500+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Sertifikat & NIE Terbit</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-teal-500/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">End-to-End</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Pendampingan Dokumen & Audit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
