'use client';

import React from 'react';
import { X, Clock, Banknote, FileCheck, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react';
import { Service } from '../data/servicesData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B192C] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-start justify-between">
          <div className="pr-4 space-y-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/20">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          {/* Metadata Badges (Durasi & Biaya) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Estimasi Waktu Proses</div>
                <div className="text-sm font-bold text-white">{service.estimated_time}</div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Estimasi Biaya Konsultasi</div>
                <div className="text-sm font-bold text-teal-300">{service.estimated_cost}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Deskripsi Layanan</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
              {service.description}
            </p>
          </div>

          {/* Requirements Document List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-teal-400" />
                <span>Persyaratan Dokumen & Berkas</span>
              </h4>
              <span className="text-xs text-slate-400">
                {service.requirements.length} Dokumen Diperlukan
              </span>
            </div>

            <div className="space-y-3">
              {service.requirements.map((req, idx) => (
                <div
                  key={req.id || idx}
                  className="glass-card p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex items-start space-x-3"
                >
                  {req.is_mandatory ? (
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-white truncate">{req.document_name}</p>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          req.is_mandatory
                            ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}
                      >
                        {req.is_mandatory ? 'Wajib' : 'Opsional'}
                      </span>
                    </div>
                    {req.description && (
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{req.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row justify-end gap-3">
          <a
            href="#consultation"
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-md shadow-teal-500/20 flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Ajukan Konsultasi Layanan Ini</span>
          </a>
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl font-semibold text-xs text-slate-300 glass-card hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            Tutup
          </button>
        </div>


      </div>
    </div>
  );
}
