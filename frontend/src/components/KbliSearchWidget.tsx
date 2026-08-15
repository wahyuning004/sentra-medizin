'use client';

import React, { useState } from 'react';
import { Search, BookOpen, ShieldCheck, ArrowRight, CheckCircle2, Building, AlertCircle } from 'lucide-react';

export interface KbliItem {
  code: string;
  title: string;
  category: string;
  risk_level: string;
  required_permits: string[];
  description: string;
}

export const KBLI_DATA: KbliItem[] = [
  {
    code: '46691',
    title: 'Perdagangan Besar Alat Kesehatan (IDAK / IPAK)',
    category: 'Alat Kesehatan',
    risk_level: 'Tinggi (High Risk)',
    required_permits: ['NIB OSS RBA', 'Sertifikat Standar IDAK Kemenkes', 'Sertifikat CDAKB', 'SIP Apoteker PJT'],
    description: 'Mencakup usaha perdagangan besar alat kesehatan elektromedis, non-elektromedis steril & non-steril, serta produk diagnostik in-vitro.'
  },
  {
    code: '46441',
    title: 'Perdagangan Besar Farmasi (PBF)',
    category: 'Farmasi & Obat',
    risk_level: 'Tinggi (High Risk)',
    required_permits: ['Izin PBF Kemenkes', 'Sertifikat CDOB BPOM RI', 'STRA & SIPA Apoteker PJT', 'Denah Gudang Cold Chain'],
    description: 'Mencakup usaha pengadaan, penyimpanan, dan penyaluran obat jadi, bahan baku obat, serta produk biologi.'
  },
  {
    code: '20411',
    title: 'Industri Kosmetika & Skincare',
    category: 'Kosmetik & BPOM',
    risk_level: 'Menengah Tinggi',
    required_permits: ['Izin Produksi Kosmetika Gol A/B', 'Notifikasi Kosmetika BPOM', 'Sertifikat CPKB BPOM', 'Sertifikat Halal BPJPH'],
    description: 'Mencakup pembuatan kosmetika pembersih, perawatan kulit, rambut, serta sediaan wewangian.'
  },
  {
    code: '21001',
    title: 'Industri Farmasi & Produk Biologi',
    category: 'Farmasi',
    risk_level: 'Tinggi (High Risk)',
    required_permits: ['Izin Industri Farmasi Kemenkes', 'Sertifikat CPOB BPOM', 'SIP Apoteker Pembuat Obat'],
    description: 'Pembuatan zat berkhasiat, obat racikan, vaksin, serum, dan sediaan farmasi steril.'
  },
  {
    code: '46442',
    title: 'Perdagangan Besar Perbekalan Kesehatan Rumah Tangga (PKRT)',
    category: 'PKRT',
    risk_level: 'Menengah',
    required_permits: ['Izin Cabang PKRT Kemenkes', 'Izin Edar PKRT (Kelas I/II/III)', 'Sertifikat CPPKRT'],
    description: 'Penyaluran pembersih, desinfektan, antiseptik, tisu basah, serta produk perawatan rumah tangga.'
  },
  {
    code: '10799',
    title: 'Industri Olahan Makanan Minuman & Suplemen Kesehatan',
    category: 'Pangan & BPOM',
    risk_level: 'Menengah Tinggi',
    required_permits: ['Izin Edar BPOM MD / PIRT', 'Sertifikat CPPOB BPOM', 'Sertifikat Halal Indonesia'],
    description: 'Pengolahan dan pengemasan suplemen makanan, minuman herbal, serta makanan olahan berizin resmi.'
  }
];

export default function KbliSearchWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredKbli = KBLI_DATA.filter(item => {
    const matchesSearch = 
      item.code.includes(searchTerm) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="kbli" className="py-20 bg-[#070F1E] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>Database KBLI 2026 & Perizinan Medis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cari Kode KBLI & Syarat Izin Perusahaan Anda
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Temukan kode KBLI OSS RBA resmi beserta daftar izin Kemenkes & BPOM yang wajib dimiliki bisnis Anda.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="glass-card p-4 sm:p-6 rounded-3xl border border-slate-800 bg-slate-900/60 max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Ketik nama bidang usaha (contoh: Alkes, Gudang, Kosmetik, Farmasi, KBLI 46691)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-semibold shrink-0">Kategori:</span>
            {['all', 'Alat Kesehatan', 'Farmasi & Obat', 'Kosmetik & BPOM', 'PKRT', 'Pangan & BPOM'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 rounded-xl font-bold transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-slate-950 border-teal-400'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Semua KBLI' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* KBLI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredKbli.map((kbli) => (
            <div
              key={kbli.code}
              className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-teal-500/40 transition-all space-y-4 shadow-lg group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-extrabold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-lg border border-teal-500/20">
                    KBLI {kbli.code}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2.5 group-hover:text-teal-300 transition-colors">
                    {kbli.title}
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 shrink-0">
                  {kbli.risk_level}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {kbli.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-300 block">Daftar Izin & Sertifikasi Wajib:</span>
                <div className="flex flex-wrap gap-1.5">
                  {kbli.required_permits.map((permit, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      <span>{permit}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="#consultation"
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center space-x-1"
                >
                  <span>Konsultasikan KBLI Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
