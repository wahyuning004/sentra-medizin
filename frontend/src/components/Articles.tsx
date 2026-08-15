'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, Sparkles, Search } from 'lucide-react';

export interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  read_time: string;
  summary: string;
  content: string;
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 1,
    title: 'Panduan Lengkap Syarat & Alur Sertifikasi CDAKB Kemenkes 2026',
    slug: 'panduan-sertifikasi-cdakb-kemenkes',
    category: 'Alat Kesehatan',
    author: 'apt. Rina Wijaya, S.Farm',
    date: '12 Agustus 2026',
    read_time: '5 min baca',
    summary: 'Memahami 13 Bab Standar Mutu Distribusi Alat Kesehatan yang Baik (CDAKB) dan persiapan audit sarana gudang pendingin.',
    content: 'CDAKB merupakan standar wajib bagi seluruh perusahaan penyalur alat kesehatan di Indonesia...'
  },
  {
    id: 2,
    title: 'Perbedaan Izin Edar Alkes AKD dan AKL: Mana yang Perusahaan Anda Butuhkan?',
    slug: 'perbedaan-izin-edar-akd-akl',
    category: 'Regulasi Alkes',
    author: 'Drs. Eko Prasetyo, M.Si',
    date: '08 Agustus 2026',
    read_time: '4 min baca',
    summary: 'Penjelasan detail klasifikasi AKD (Alat Kesehatan Dalam Negeri) vs AKL (Alat Kesehatan Luar Negeri/Impor) beserta syarat CFS & LoA.',
    content: 'Dalam pengajuan Izin Edar Alkes di Kementerian Kesehatan RI, produk dibagi menjadi kategori AKD dan AKL...'
  },
  {
    id: 3,
    title: 'Cara Mengurus Notifikasi Kosmetika BPOM Tanpa Risiko Temuan CAPA',
    slug: 'cara-mengurus-notifikasi-kosmetik-bpom',
    category: 'BPOM & Kosmetik',
    author: 'apt. Rina Wijaya, S.Farm',
    date: '01 Agustus 2026',
    read_time: '6 min baca',
    summary: 'Langkah taktis menyiapkan Dokumen Informasi Produk (DIP), pengujian laboratorium terakreditasi, dan klaim etiket sesuai BPOM RI.',
    content: 'Notifikasi kosmetik di portal e-BPOM memerlukan keabsahan data CAS Number, formula kualitatif-kuantitatif...'
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Pusat Edukasi Regulasi & Artikel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Wawasan & Panduan Perizinan Terbaru
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Artikel ilmiah & regulasi dari Tim Apoteker dan Konsultan Regulasi Senior PT Sentra Medizin.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-md font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" /> {article.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                  <User className="w-3.5 h-3.5 text-teal-400" />
                  <span className="truncate max-w-[120px]">{article.author}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0B192C] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{selectedArticle.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Oleh: {selectedArticle.author} • {selectedArticle.date}</p>
              </div>
              <button onClick={() => setSelectedArticle(null)} className="text-slate-400 hover:text-white font-bold p-1">✕</button>
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
              <p className="font-semibold text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                {selectedArticle.summary}
              </p>
              <p>{selectedArticle.content}</p>
              <p>Untuk panduan teknis implementasi di fasilitas pabrik atau gudang Anda, konsultasikan langsung dengan tim konsultan kami melalui portal ini.</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="py-2 px-5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700"
              >
                Tutup Artikel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
