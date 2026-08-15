'use client';

import React from 'react';
import { Search, FileText, UploadCloud, ShieldCheck, ArrowRight } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Gap Analysis',
    description: 'Evaluasi awal berkas legalitas PT/CV & kesiapan fisik gudang/pabrik oleh Konsultan Senior PT Sentra Medizin.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Penyusunan SOP & Dokumen',
    description: 'Penyusunan manual mutu 13 Bab CDAKB/CPB/CPPKRTB, penyiapan formulir teknis, & registrasi PJT.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Pengajuan Portal Resmi',
    description: 'Upload berkas teknis ke portal resmi pemerintah (OSS RBA, E-Akustik Kemenkes, E-BPOM, SIMPONI, BPJPH).',
    icon: UploadCloud,
  },
  {
    step: '04',
    title: 'Audit Lapangan & Terbit Izin',
    description: 'Pendampingan verifikasi lapangan oleh auditor Kemenkes/BPOM, perbaikan CAPA, hingga sertifikat resmi terbit.',
    icon: ShieldCheck,
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 bg-slate-950/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-teal-400 uppercase">Alur Kerja Transparan</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            4 Tahap Pendampingan Legalitas
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            Proses kerja terstruktur untuk menjamin keberhasilan audit dan percepatan terbitnya izin edar Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="glass-card p-6 rounded-2xl border border-slate-800 relative group hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-teal-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
