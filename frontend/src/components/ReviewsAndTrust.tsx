'use client';

import React from 'react';
import { Star, ShieldCheck, Award, Building, CheckCircle2, ThumbsUp, Users, Lock } from 'lucide-react';

export default function ReviewsAndTrust() {
  const reviews = [
    {
      name: 'Dr. Hendra Wijaya',
      role: 'Direktur Utama',
      company: 'PT Sejahtera Medika Indonesia',
      service: 'Izin Distribusi Alat Kesehatan (IDAK)',
      comment: 'Proses perizinan IDAK dan audit CDAKB gudang kami berjalan sangat cepat dan mulus bersama tim PT Sentra Medizin. Konsultan Apoteker sangat menguasai teknis Kemenkes.',
      rating: 5,
      date: 'Agustus 2026'
    },
    {
      name: 'apt. Sinta Kusuma, S.Farm',
      role: 'Head of Regulatory Affairs',
      company: 'PT Nusantara Farma Utama',
      service: 'Sertifikasi CDAKB & Notifikasi BPOM',
      comment: 'Layanan sangat profesional dan transparan. Tim membantu penyusunan 13 Bab Manual Mutu CDAKB dari nol hingga lolos verifikasi tanpa temuan CAPA mayor.',
      rating: 5,
      date: 'Juli 2026'
    },
    {
      name: 'Budi Santoso',
      role: 'General Manager',
      company: 'CV Medika Jaya Bersama',
      service: 'Izin Produksi & Edar PKRT',
      comment: 'Sangat terbantu untuk pengurusan izin edar PKRT dan notifikasi kosmetika BPOM. Komunikasi sangat responsif melalui portal klien.',
      rating: 5,
      date: 'Juni 2026'
    }
  ];

  return (
    <section id="trust" className="py-20 bg-[#0B192C] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Why Choose Us Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>Keunggulan & Standar Kepatuhan Hukum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Mengapa Perusahaan Kesehatan Memilih Kami?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Pendekatan hukum dan regulasi kesehatan berbasis regulasi Kementerian Kesehatan RI & BPOM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">100% Legal & Resmi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seluruh sertifikat, IDAK, dan NIE diterbitkan langsung oleh portal resmi Kementerian Kesehatan & BPOM RI.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Tim Apoteker Senior</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Didampingi langsung oleh Tenaga Apoteker & Konsultan Hukum Regulasi Kesehatan berlisensi resmi.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Bebas Biaya Tersembunyi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rincian investasi legalitas disampaikan secara tertulis dan transparan sejak awal perjanjian.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Portal Digital Real-Time</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Klien memiliki akses portal khusus untuk mengunggah dokumen dan melacak progres audit setiap hari.
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials Carousel / Grid */}
        <div className="space-y-8 pt-6 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white">Ulasan Klien Perusahaan Terverifikasi</h3>
            <p className="text-xs text-slate-400">Pengalaman nyata dari direksi & kepala regulasi perusahaan farmasi & alkes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{rev.name}</span>
                    <span className="text-[11px] text-slate-400 block">{rev.role} • {rev.company}</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Authority Trust Badges */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 text-center space-y-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Terintegrasi & Sesuai Standar Regulasi Resmi Republik Indonesia
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-300">
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-teal-300">
              🇮🇩 Kementerian Kesehatan RI (E-Sertifikasi Alkes)
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">
              🏛️ Badan POM RI (e-BPOM Notifikasi)
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-teal-300">
              📊 OSS RBA Kementerian Investasi / BKPM
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-amber-300">
              🏷️ Ditjen HKI Kemenkumham (Merek & Paten)
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300">
              🕌 BPJPH / LPPOM MUI (Sertifikasi Halal)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
