'use client';

import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Clock, Trash2, Eye, Download, ShieldCheck } from 'lucide-react';

export interface UploadedDoc {
  id: string;
  name: string;
  type: string;
  size: string;
  uploaded_at: string;
  status: 'verified' | 'review' | 'revision';
}

export default function DocumentUploader({ applicationId }: { applicationId?: string }) {
  const [documents, setDocuments] = useState<UploadedDoc[]>([
    {
      id: 'DOC-101',
      name: 'NIB_OSS_RBA_Distribusi_Alkes_2026.pdf',
      type: 'NIB & Izin Usaha',
      size: '2.4 MB',
      uploaded_at: '12 Agustus 2026',
      status: 'verified',
    },
    {
      id: 'DOC-102',
      name: 'SIP_Apoteker_Penanggung_Jawab.pdf',
      type: 'Izin Tenaga Apoteker / PJT',
      size: '1.8 MB',
      uploaded_at: '13 Agustus 2026',
      status: 'verified',
    },
    {
      id: 'DOC-103',
      name: 'Denah_Layout_Gudang_ColdChain.png',
      type: 'Layout Gudang CDAKB',
      size: '4.1 MB',
      uploaded_at: '14 Agustus 2026',
      status: 'review',
    },
  ]);

  const [uploading, setUploading] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState('Dokumen Legalitas Utama');
  const [successMsg, setSuccessMsg] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setUploading(true);
    setSuccessMsg('');

    setTimeout(() => {
      const newDoc: UploadedDoc = {
        id: `DOC-${Date.now().toString().slice(-4)}`,
        name: file.name,
        type: selectedDocType,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploaded_at: 'Baru Saja',
        status: 'review',
      };

      setDocuments(prev => [newDoc, ...prev]);
      setUploading(false);
      setSuccessMsg(`Dokumen "${file.name}" berhasil diunggah dan sedang ditinjau tim audit.`);
    }, 1000);
  };

  const handleDeleteDoc = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="space-y-6">
      
      {/* Upload Header Box */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <UploadCloud className="w-5 h-5 text-teal-400" />
              <span>Unggah Berkas Persyaratan Perizinan</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Upload dokumen NIB, KTP Penanggung Jawab, Layout Gudang, atau Sertifikat Apoteker (.PDF, .PNG, .JPG max 10MB).
            </p>
          </div>

          <div className="w-full sm:w-64">
            <select
              value={selectedDocType}
              onChange={(e) => setSelectedDocType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
            >
              <option value="NIB & Izin Usaha">NIB & Izin Usaha (OSS RBA)</option>
              <option value="Izin Tenaga Apoteker / PJT">SIP Apoteker / PJT Teknis</option>
              <option value="Layout Gudang CDAKB">Layout Gudang & Denah Suhu</option>
              <option value="Manual SOP Mutu">Draft SOP & Manual Mutu</option>
              <option value="KTP & NPWP Perusahaan">KTP & NPWP Direksi</option>
              <option value="Dokumen Legalitas Utama">Dokumen Legalitas Lainnya</option>
            </select>
          </div>
        </div>

        {/* Dropzone Area */}
        <label className="border-2 border-dashed border-slate-700 hover:border-teal-500/60 bg-slate-950/60 hover:bg-slate-950 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all text-center group">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-white group-hover:text-teal-300">
            {uploading ? 'Mengunggah Berkas...' : 'Klik atau Drag & Drop Berkas di Sini'}
          </span>
          <span className="text-[11px] text-slate-400 mt-1">
            Format resmi yang didukung: PDF, PNG, JPG, DOCX (Maksimal 10 MB per berkas)
          </span>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.docx"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>

        {successMsg && (
          <div className="p-3 bg-teal-500/10 border border-teal-500/30 rounded-xl text-xs font-bold text-teal-300 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
            <span>{successMsg}</span>
          </div>
        )}
      </div>

      {/* Uploaded Documents List */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-white flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Daftar Berkas Terunggah ({documents.length})</span>
        </h4>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="glass-card p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-teal-400 border border-slate-700">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{doc.name}</div>
                  <div className="text-[11px] text-slate-400 flex items-center space-x-2 mt-0.5">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.uploaded_at}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-start sm:self-center">
                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                    doc.status === 'verified'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : doc.status === 'review'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  }`}
                >
                  {doc.status === 'verified' ? '✓ Terverifikasi' : doc.status === 'review' ? '⏳ Review Audit' : '⚠️ Revisi'}
                </span>

                <button
                  onClick={() => handleDeleteDoc(doc.id)}
                  title="Hapus Dokumen"
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
