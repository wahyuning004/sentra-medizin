'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, Clock, CheckCircle2, AlertCircle, ArrowRight, Building, FileText } from 'lucide-react';

export default function TrackingWidget() {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const mockDb: Record<string, any> = {
    'REQ-2026-001': {
      id: 'REQ-2026-001',
      company: 'PT Sejahtera Medika Indonesia',
      service: 'Izin Distribusi Alat Kesehatan (IDAK)',
      status: 'Proses Evaluasi Kemenkes RI',
      progress: 75,
      date: '10 Agustus 2026',
      estimated: '25 Agustus 2026',
      consultant: 'apt. Rina Wijaya, S.Farm',
      notes: 'Dokumen Penanggung Jawab Teknis (PJT) lolos verifikasi. Menunggu audit sarana gudang.'
    },
    'REQ-2026-002': {
      id: 'REQ-2026-002',
      company: 'PT Nusantara Farma Utama',
      service: 'Notifikasi Kosmetika & Suplemen BPOM',
      status: 'Proses Pengujian Lab BPOM',
      progress: 45,
      date: '02 Agustus 2026',
      estimated: '30 Agustus 2026',
      consultant: 'Drs. Eko Prasetyo, M.Si',
      notes: 'Uji stabilitas lab terakreditasi sedang berjalan.'
    },
    'REQ-2026-003': {
      id: 'REQ-2026-003',
      company: 'CV Medika Jaya Bersama',
      service: 'Sertifikasi CDAKB Kemenkes RI',
      status: 'Sertifikat & NIE Terbit (Selesai)',
      progress: 100,
      date: '15 Juli 2026',
      estimated: '05 Agustus 2026',
      consultant: 'apt. Rina Wijaya, S.Farm',
      notes: 'Sertifikat CDAKB telah terbit resmi dari Kementerian Kesehatan RI.'
    }
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSearchResult(null);

    const query = searchId.trim().toUpperCase();
    if (!query) {
      setErrorMsg('Silakan masukkan Nomor Registrasi Permohonan (contoh: REQ-2026-001)');
      return;
    }

    if (mockDb[query]) {
      setSearchResult(mockDb[query]);
    } else {
      // General fallback result matching query
      setSearchResult({
        id: query,
        company: 'PT Medika Nusantara (Perusahaan Klien)',
        service: 'Pendampingan Izin Regulasi Medis',
        status: 'Dalam Pengolahan Berkas Tim Audit',
        progress: 60,
        date: 'Terdaftar Sistem',
        estimated: '14 Hari Kerja',
        consultant: 'Tim Konsultan Sentra Medizin',
        notes: 'Permohonan Anda sedang dalam antrean verifikasi tim ahli legalitas.'
      });
    }
  };

  return (
    <section id="tracking" className="py-16 bg-[#0B192C] relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Card Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-teal-500/20 bg-slate-900/80 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Portal Cek Status Permohonan Publik</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lacak Progres Perizinan Anda Real-Time
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Masukkan Nomor Permohonan (*Request ID*) untuk melihat tahap evaluasi audit Kemenkes & BPOM.
            </p>
          </div>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Masukkan ID Permohonan (Contoh: REQ-2026-001)..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 shrink-0"
            >
              Lacak Permohonan
            </button>
          </form>

          {errorMsg && (
            <p className="text-xs text-rose-400 font-semibold text-center">{errorMsg}</p>
          )}

          {/* Result Card */}
          {searchResult && (
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-teal-400 uppercase">
                    ID: {searchResult.id}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">{searchResult.company}</h4>
                  <p className="text-slate-400">{searchResult.service}</p>
                </div>
                <span className="px-3 py-1 rounded-full font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 self-start sm:self-center">
                  {searchResult.status}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Tahap Kesiapan Dokumen</span>
                  <span className="text-teal-400">{searchResult.progress}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${searchResult.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-500 block">Tgl Pengajuan:</span>
                  <span className="font-semibold">{searchResult.date}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Estimasi Terbit:</span>
                  <span className="font-semibold text-teal-300">{searchResult.estimated}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Konsultan:</span>
                  <span className="font-semibold text-white">{searchResult.consultant}</span>
                </div>
              </div>

              <p className="text-slate-400 italic">
                💡 <span className="font-medium text-slate-200">Update Terakhir:</span> {searchResult.notes}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
