'use client';

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Clock, Banknote, FileText, ArrowUpRight, ShieldCheck, Activity, Award, Factory, Cpu, Truck, CheckCircle2, FileCheck, Building2, HeartHandshake, Globe2, Pill, ShieldAlert, FileBadge, Shield } from 'lucide-react';
import { SERVICES_DATA, CATEGORIES, Service } from '../data/servicesData';
import ServiceModal from './ServiceModal';

// Map icon strings to Lucide components
const iconMap: { [key: string]: React.ElementType } = {
  ShieldCheck,
  Activity,
  Award,
  Factory,
  Cpu,
  Truck,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Building2,
  HeartHandshake,
  Globe2,
  Pill,
  ShieldAlert,
  FileBadge,
  FileText,
  Shield
};

export default function ServiceCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category_slug === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Resmi 17 Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Spesialisasi Regulasi & Perizinan Industri
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Pilih jenis layanan perizinan di bawah untuk melihat rincian estimasi waktu, estimasi biaya, dan persyaratannya.
          </p>
        </div>

        {/* Search Bar & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Live Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama perizinan (misal: IDAK, CDAKB, Halal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-inner transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.slug
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/25'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (17 Services) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 max-w-lg mx-auto">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">Layanan tidak ditemukan</p>
            <p className="text-slate-500 text-xs mt-1">Coba gunakan kata kunci pencarian atau kategori lain.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || ShieldCheck;

              return (
                <div
                  key={service.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {service.is_popular && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Populer
                        </span>
                      )}
                    </div>

                    {/* Category Label */}
                    <span className="text-[11px] font-semibold text-teal-400/90 tracking-wide uppercase block mb-1">
                      {service.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-teal-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Time & Cost Metadata */}
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80 text-xs mb-5">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-teal-400" /> Estimasi
                        </span>
                        <span className="font-semibold text-slate-200 block truncate">
                          {service.estimated_time}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Banknote className="w-3 h-3 text-cyan-400" /> Biaya
                        </span>
                        <span className="font-semibold text-teal-300 block truncate">
                          {service.estimated_cost}
                        </span>
                      </div>
                    </div>

                    {/* Modal Popup Button */}
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800/80 hover:bg-teal-500 hover:text-slate-950 border border-slate-700/80 hover:border-teal-400 transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Lihat Persyaratan Dokumen ({service.requirements.length})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Requirements Popup */}
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
        />

      </div>
    </section>
  );
}
