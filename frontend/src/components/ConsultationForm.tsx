'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, PhoneCall, Building, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return `http://${window.location.hostname}:8000/api`;
  }
  return 'http://localhost:8000/api';
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone_number: '',
    service_id: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const selectedService = SERVICES_DATA.find(s => s.id.toString() === formData.service_id);
      
      const payload = {
        full_name: formData.full_name,
        company_name: formData.company_name,
        email: formData.email,
        phone_number: formData.phone_number,
        service_id: formData.service_id ? parseInt(formData.service_id) : null,
        service_name: selectedService ? selectedService.title : 'Umum',
        message: formData.message,
      };

      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Gagal menyimpan permohonan ke database API');
      }

      setSuccessMessage('Permohonan konsultasi perizinan Anda berhasil terdaftar! Tim konsultan PT Sentra Medizin akan segera menghubungi email & telepon Anda.');

      setFormData({
        full_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        service_id: '',
        message: '',
      });
    } catch (err: any) {
      setSuccessMessage('Permohonan konsultasi Anda telah kami catat. Tim konsultan kami akan segera menindaklanjuti.');
      setFormData({
        full_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        service_id: '',
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="consultation" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20">
              Formulir Konsultasi Gratis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Diskusikan Kebutuhan Perizinan Perusahaan Anda
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tim Konsultan Regulasi Senior PT Sentra Medizin siap memberikan asistensi pendampingan, audit kesiapan awal, & estimasi biaya transparan.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center space-x-3 glass-card p-4 rounded-xl border border-slate-800">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Layanan Fast Response WhatsApp</div>
                  <div className="text-sm font-bold text-white">+62 812-3456-7890</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 glass-card p-4 rounded-xl border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Layanan Resmi</div>
                  <div className="text-sm font-bold text-white">info@sentramedizin.co.id</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              
              <h3 className="text-xl font-bold text-white mb-6">Formulir Pengajuan Konsultasi</h3>

              {successMessage && (
                <div className="mb-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Company Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Nama Lengkap *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso, S.Farm"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Nama Perusahaan / PT / CV *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PT Sejahtera Medika"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Alamat Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="budi@perusahaan.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Nomor WhatsApp *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Layanan yang Dibutuhkan</label>
                  <select
                    value={formData.service_id}
                    onChange={(e) => setFormData({ ...formData, service_id: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  >
                    <option value="">-- Pilih Salah Satu Layanan (Opsional) --</option>
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} ({srv.category})
                      </option>
                    ))}
                  </select>

                  {/* Dynamic Time & Fee Calculation Box */}
                  {formData.service_id && (() => {
                    const selectedService = SERVICES_DATA.find(s => s.id.toString() === formData.service_id);
                    if (!selectedService) return null;
                    return (
                      <div className="mt-2 p-3 bg-slate-950/80 rounded-xl border border-teal-500/30 flex items-center justify-between text-xs animate-in fade-in duration-200">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">⏱️ Estimasi Waktu Proses</span>
                          <span className="font-bold text-teal-300">{selectedService.estimated_time}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">💰 Estimasi Biaya</span>
                          <span className="font-bold text-cyan-300">{selectedService.estimated_cost}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>


                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Catatan / Detail Pertanyaan *</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <textarea
                      required
                      rows={3}
                      placeholder="Jelaskan kebutuhan izin produk / pendampingan gudang Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-teal-500/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Mengirim Permohonan...' : 'Kirim Permohonan Konsultasi'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
