'use client';

import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, Shield, ArrowRight, DollarSign, FileText } from 'lucide-react';

export default function LicensingCalculator() {
  const [entityType, setEntityType] = useState('PT (Perseroan Terbatas)');
  const [selectedService, setSelectedService] = useState('idak');
  const [warehouseStatus, setWarehouseStatus] = useState('sewa');

  const pricingMatrix: Record<string, { title: string; cost: string; time: string; docs: string[] }> = {
    idak: {
      title: 'Izin Distribusi Alat Kesehatan (IDAK)',
      cost: 'Rp 15.000.000 - Rp 25.000.000',
      time: '14 - 21 Hari Kerja',
      docs: ['NIB KBLI 46691 OSS RBA', 'SIP & STRA Apoteker Penanggung Jawab', 'Denah Suhu Layout Gudang', 'Akte Pendirian PT & SK Menteri']
    },
    cdakb: {
      title: 'Sertifikasi CDAKB (Cara Distribusi Alkes yang Baik)',
      cost: 'Rp 20.000.000 - Rp 35.000.000',
      time: '30 - 45 Hari Kerja',
      docs: ['Dokumen Manual Mutu 13 Bab', 'SOP Penanganan Keluhan & Recall', 'Sertifikat Kalibrasi Termohigrometer', 'Sertifikat IDAK Aktif']
    },
    bpom_kosmetik: {
      title: 'Notifikasi Kosmetika BPOM (Per SKU)',
      cost: 'Rp 2.500.000 - Rp 4.500.000 / SKU',
      time: '7 - 14 Hari Kerja',
      docs: ['Dokumen Informasi Produk (DIP)', 'Hasil Uji Lab Terakreditasi CAS', 'Surat Perjanjian Kontrak Maklon / Pabrik', 'Desain Kemasan Etiket BPOM']
    },
    pkrt: {
      title: 'Izin Produksi / Edar PKRT Kemenkes',
      cost: 'Rp 12.000.000 - Rp 18.000.000',
      time: '14 - 30 Hari Kerja',
      docs: ['Formula Bahan Aktif & SDS', 'Hasil Uji Efektivitas / Uji Iritasi', 'Layout Bangunan Produksi CPPKRT', 'Izin Usaha OSS']
    },
    pbf: {
      title: 'Izin Perdagangan Besar Farmasi (PBF)',
      cost: 'Rp 35.000.000 - Rp 50.000.000',
      time: '45 - 60 Hari Kerja',
      docs: ['SIP & STRA 2 Apoteker Aktif', 'Denah Gudang Cold Chain APKL', 'Rekomendasi Balai Besar BPOM', 'Akte Pendirian PT']
    }
  };

  const currentResult = pricingMatrix[selectedService];

  return (
    <section id="calculator" className="py-20 bg-[#070F1E] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20">
            <Calculator className="w-3.5 h-3.5 text-teal-400" />
            <span>Kalkulator & Simulator Perizinan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Simulasi Biaya & Waktu Pengurusan Izin
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hitung perkiraan biaya investasi legalitas dan estimasi waktu terbit izin resmi perusahaan Anda secara transparan.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center space-x-2 pb-3 border-b border-slate-800">
              <FileText className="w-5 h-5 text-teal-400" />
              <span>Pilih Kriteria Perusahaan & Izin</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">1. Bentuk Badan Usaha:</label>
              <select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
              >
                <option value="PT (Perseroan Terbatas)">PT (Perseroan Terbatas) — Direkomendasikan Kemenkes</option>
                <option value="PT PMA (Modal Asing)">PT PMA (Penanaman Modal Asing)</option>
                <option value="CV (Commanditaire Venootschap)">CV (Commanditaire Venootschap)</option>
                <option value="PT Perorangan">PT Perorangan (UMKM)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">2. Jenis Perizinan yang Dibutuhkan:</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
              >
                <option value="idak">Izin Distribusi Alat Kesehatan (IDAK)</option>
                <option value="cdakb">Sertifikasi CDAKB (Cara Distribusi Alkes yang Baik)</option>
                <option value="bpom_kosmetik">Notifikasi Kosmetika BPOM RI</option>
                <option value="pkrt">Izin Industri / Edar PKRT Kemenkes</option>
                <option value="pbf">Izin Perdagangan Besar Farmasi (PBF)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">3. Status Bangunan Gudang / Kantor:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setWarehouseStatus('sewa')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition-all ${
                    warehouseStatus === 'sewa'
                      ? 'bg-teal-500/10 text-teal-300 border-teal-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Sewa / Virtual Office
                </button>
                <button
                  type="button"
                  onClick={() => setWarehouseStatus('milik')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition-all ${
                    warehouseStatus === 'milik'
                      ? 'bg-teal-500/10 text-teal-300 border-teal-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Milik Sendiri
                </button>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#consultation"
                className="w-full py-3.5 rounded-2xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center space-x-2"
              >
                <span>Konsultasikan Hasil Simulasi Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-teal-500/30 bg-slate-900/80 space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Hasil Estimasi Resmi</span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  {entityType.split(' ')[0]}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">{currentResult.title}</h4>
                <p className="text-xs text-slate-400 mt-1">Pendampingan penuh hingga sertifikat / NIE terbit dari kementerian.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Estimasi Investasi:</span>
                  <span className="text-sm sm:text-base font-extrabold text-teal-300 mt-0.5 block">
                    {currentResult.cost}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Estimasi Waktu:</span>
                  <span className="text-sm sm:text-base font-extrabold text-white mt-0.5 block flex items-center gap-1">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>{currentResult.time}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 block">Checklist Berkas yang Perlu Disiapkan:</span>
                <div className="space-y-1.5">
                  {currentResult.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-[11px] text-teal-300">
              🔒 <span className="font-bold">Garansi Legalitas 100%:</span> Seluruh proses pendampingan dikawal langsung oleh Tim Apoteker Senior & Konsultan Hukum Terverifikasi PT Sentra Medizin.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
