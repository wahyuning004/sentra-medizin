'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  LogOut, 
  Layers, 
  Plus, 
  Trash2, 
  UploadCloud, 
  BookOpen, 
  Sun, 
  Moon, 
  ChevronRight, 
  Shield, 
  HelpCircle, 
  BarChart3, 
  UserCheck, 
  Download, 
  Building2,
  CheckCircle2,
  Clock,
  Menu,
  X,
  Phone
} from 'lucide-react';
import DocumentUploader from './DocumentUploader';

interface ConsultationItem {
  id: number;
  full_name: string;
  company_name: string;
  email: string;
  phone_number: string;
  service_name: string;
  message: string;
  status: 'Baru' | 'Menunggu Dokumen' | 'Dokumen Diverifikasi' | 'Dalam Proses' | 'Selesai' | 'Ditolak';
  created_at: string;
}

interface ServiceItem {
  id: number;
  title: string;
  category: string;
  estimated_time: string;
  requirements: string;
  description: string;
}

interface ArticleItem {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<'dashboard' | 'services' | 'consultations' | 'documents' | 'articles' | 'faq' | 'profile' | 'reports'>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State: Consultations Data
  const [consultations, setConsultations] = useState<ConsultationItem[]>([
    {
      id: 101,
      full_name: 'Budi Santoso, S.ST',
      company_name: 'PT Sejahtera Medika Nusantara',
      email: 'budi@sejahteramedika.com',
      phone_number: '081299887766',
      service_name: 'Izin Distribusi Alat Kesehatan (IDAK)',
      message: 'Permohonan pengurusan IDAK baru untuk 10 kategori alkes non-elektromedik steril.',
      status: 'Dalam Proses',
      created_at: '2026-08-14 14:30'
    },
    {
      id: 102,
      full_name: 'Dr. Hendra Wijaya',
      company_name: 'PT Nusantara Farma Utama',
      email: 'hendra@nusantarafarma.co.id',
      phone_number: '081388776655',
      service_name: 'Notifikasi Kosmetika BPOM',
      message: 'Pengajuan NIE BPOM untuk 5 SKU produk Hair Care Serum terbaru.',
      status: 'Baru',
      created_at: '2026-08-15 09:15'
    },
    {
      id: 103,
      full_name: 'Siti Rahmawati',
      company_name: 'CV Medika Jaya Bersama',
      email: 'siti@medikajaya.com',
      phone_number: '085711223344',
      service_name: 'Pendampingan Audit CDAKB Kemenkes',
      message: 'Persiapan penataan sarana gudang pendingin & pembuatan SOP mutu distribusi.',
      status: 'Selesai',
      created_at: '2026-08-10 11:00'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // State: Services List
  const [servicesList, setServicesList] = useState<ServiceItem[]>([
    { id: 1, title: 'Izin Distribusi Alat Kesehatan (IDAK)', category: 'Alat Kesehatan', estimated_time: '14 - 21 Hari Kerja', requirements: 'NIB, PJT Apoteker/Teknik, Layout Gudang', description: 'Izin resmi Kemenkes RI untuk menyalurkan alkes secara legal.' },
    { id: 2, title: 'Sertifikasi Audit CDAKB Kemenkes RI', category: 'Audit Mutu', estimated_time: '30 - 45 Hari Kerja', requirements: 'Dokumen SOP Mutu, Denah Bangunan, Struktur Organisasi', description: 'Pendampingan pemenuhan standar Cara Distribusi Alkes yang Baik.' },
    { id: 3, title: 'Notifikasi Kosmetika BPOM', category: 'Kosmetika & BPOM', estimated_time: '7 - 14 Hari Kerja', requirements: 'Formula Produk, Sertifikat CoA, Sertifikat Merek', description: 'Registrasi pendaftaran Nomor Izin Edar (NIE) BPOM produk kosmetik.' },
    { id: 4, title: 'Izin Edar Obat Tradisional (POM TR)', category: 'Herbal & Jamu', estimated_time: '30 - 60 Hari Kerja', requirements: 'Uji Stabilitas, Desain Kemasan, Surat Penunjukan', description: 'Registrasi obat bahan alam & suplemen kesehatan di BPOM RI.' }
  ]);

  const [newServiceModal, setNewServiceModal] = useState(false);
  const [newServiceForm, setNewServiceForm] = useState({ title: '', category: 'Alat Kesehatan', estimated_time: '14 Hari Kerja', requirements: '', description: '' });

  // State: Articles
  const [articlesList, setArticlesList] = useState<ArticleItem[]>([
    { id: 1, title: 'Panduan Audit CDAKB Kemenkes Terbaru 2026', category: 'Alkes & CDAKB', author: 'apt. Prayoga Rahmat, S.Farm', date: '12 Agustus 2026' },
    { id: 2, title: 'Syarat Lengkap Notifikasi BPOM Kosmetik Impor', category: 'Kosmetik & BPOM', author: 'apt. Rina Wijaya', date: '08 Agustus 2026' }
  ]);
  const [newArticleTitle, setNewArticleTitle] = useState('');

  // State: FAQ
  const [faqList, setFaqList] = useState<FaqItem[]>([
    { id: 1, question: 'Berapa lama proses pembuatan izin IDAK Kemenkes?', answer: 'Estimasi pengerjaan berkisar 14 - 21 hari kerja setelah seluruh dokumen PJT dan sarana gudang terverifikasi.' },
    { id: 2, question: 'Apakah Sentra Medizin menjamin izin resmi terbit?', answer: 'Ya, seluruh pendampingan kami bergaransi legalitas 100% sesuai standar Kemenkes & BPOM RI.' }
  ]);
  const [newFaqQ, setNewFaqQ] = useState('');
  const [newFaqA, setNewFaqA] = useState('');

  // State: Consultant Profile
  const [consultantProfile, setConsultantProfile] = useState({
    name: 'apt. Prayoga Rahmat, S.Farm',
    title: 'Senior Regulatory Consultant & Auditor CDAKB',
    experience: '8+ Tahun Pengalaman Regulasi Kefarmasian & Alkes',
    phone: '0812-9988-7766',
    email: 'prayoga@sentramedizin.co.id',
    address: 'Jl. MT Haryono Kav. 10, Jakarta Selatan, DKI Jakarta 12810'
  });

  // State: Create Consultation Modal
  const [createConsultationModal, setCreateConsultationModal] = useState(false);
  const [newForm, setNewForm] = useState({ full_name: '', company_name: '', email: '', phone_number: '', service_name: 'Izin Distribusi Alat Kesehatan (IDAK)', message: '' });

  if (!user || user.role !== 'admin') return null;

  const handleUpdateStatus = (id: number, newStatus: any) => {
    setConsultations(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  const handleDeleteConsultation = (id: number) => {
    if (confirm(`Apakah Anda yakin ingin menghapus permohonan #${id}?`)) {
      setConsultations(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleCreateConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: ConsultationItem = {
      id: Date.now(),
      ...newForm,
      status: 'Baru',
      created_at: 'Baru Saja'
    };
    setConsultations(prev => [newEntry, ...prev]);
    setCreateConsultationModal(false);
    setNewForm({ full_name: '', company_name: '', email: '', phone_number: '', service_name: 'Izin Distribusi Alat Kesehatan (IDAK)', message: '' });
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceForm.title) return;
    setServicesList(prev => [...prev, { id: Date.now(), ...newServiceForm }]);
    setNewServiceModal(false);
    setNewServiceForm({ title: '', category: 'Alat Kesehatan', estimated_time: '14 Hari Kerja', requirements: '', description: '' });
  };

  const handleDeleteService = (id: number) => {
    if (confirm('Hapus layanan dari katalog?')) {
      setServicesList(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleExportCSV = () => {
    const dataToExport = filteredConsultations.length > 0 ? filteredConsultations : consultations;
    const headers = ['ID REQ', 'Nama Perusahaan', 'Nama Pemohon PIC', 'Email', 'No WhatsApp', 'Layanan Perizinan', 'Status Pengajuan', 'Deskripsi Keluhan', 'Tanggal Input'];
    const rows = dataToExport.map(item => [
      `"${item.id}"`,
      `"${(item.company_name || '').replace(/"/g, '""')}"`,
      `"${(item.full_name || '').replace(/"/g, '""')}"`,
      `"${item.email}"`,
      `"${item.phone_number}"`,
      `"${(item.service_name || '').replace(/"/g, '""')}"`,
      `"${item.status}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`,
      `"${item.created_at}"`
    ]);

    const csvString = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Data_Konsultasi_SentraMedizin_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredConsultations = consultations.filter(item => {
    const matchesSearch = 
      item.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.service_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Selesai':
        return 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30 dark:text-emerald-400';
      case 'Baru':
        return 'bg-blue-500/15 text-blue-600 border-blue-500/30 dark:text-blue-400';
      case 'Dalam Proses':
        return 'bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400';
      case 'Dokumen Diverifikasi':
        return 'bg-cyan-500/15 text-cyan-600 border-cyan-500/30 dark:text-cyan-400';
      case 'Menunggu Dokumen':
        return 'bg-purple-500/15 text-purple-600 border-purple-500/30 dark:text-purple-400';
      case 'Ditolak':
        return 'bg-rose-500/15 text-rose-600 border-rose-500/30 dark:text-rose-400';
      default:
        return 'bg-slate-500/15 text-slate-600 border-slate-500/30 dark:text-slate-400';
    }
  };

  const selectTabMobile = (tab: any) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row font-sans transition-colors duration-200 ${
      isDark ? 'bg-[#070F1E] text-slate-100' : 'bg-slate-100 text-slate-900'
    }`}>
      
      {/* SIDEBAR NAVIGATION (DESKTOP + MOBILE HAMBURGER DRAWER) */}
      <aside className={`w-full lg:w-72 p-4 sm:p-5 flex flex-col justify-between shrink-0 z-30 border-r border-b lg:border-b-0 transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-md'
      }`}>
        <div className="space-y-4">
          
          {/* Top Brand Header Bar */}
          <div className="flex items-center justify-between pb-3 lg:pb-4 border-b border-slate-200/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20 shrink-0">
                <Shield className="w-6 h-6 text-slate-950 font-black" />
              </div>
              <div>
                <span className={`text-base font-black tracking-tight block leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  SENTRA <span className="text-teal-500">MEDIZIN</span>
                </span>
                <span className="text-[9px] font-bold text-teal-600 dark:text-teal-400 uppercase block tracking-wider mt-0.5">
                  ADMIN KONSULTASI REGULASI
                </span>
              </div>
            </div>

            {/* Mobile Actions: Dark Mode Button OUTSIDE Hamburger Menu */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-xl border transition-all ${
                  isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-blue-600 hover:bg-slate-200'
                }`}
                title="Beralih Mode Tema"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className={`p-2 rounded-xl border transition-all ${
                  isDark ? 'bg-slate-900 border-slate-800 text-teal-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* DESKTOP NAVIGATION MENU (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-4">
            
            {/* Group 1: UTAMA */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                UTAMA
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'dashboard'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    <span>Dashboard Overview</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'services'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>Kelola Layanan</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeTab === 'services' ? 'bg-slate-950 text-teal-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    {servicesList.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'consultations'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>Kelola Konsultasi</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeTab === 'consultations' ? 'bg-slate-950 text-teal-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    {consultations.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Group 2: MANAJEMEN */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                MANAJEMEN & BERKAS
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'documents'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <UploadCloud className="w-4 h-4 shrink-0" />
                    <span>Kelola Dokumen</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('articles')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'articles'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>Kelola Artikel</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeTab === 'articles' ? 'bg-slate-950 text-teal-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    {articlesList.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('faq')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'faq'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Kelola FAQ</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

            {/* Group 3: SISTEM & LAPORAN */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                SISTEM & LAPORAN
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'profile'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-4 h-4 shrink-0" />
                    <span>Profil Konsultan</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'reports'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    <span>Laporan & Rekap</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

          </div>

          {/* MOBILE HAMBURGER EXPANDABLE DRAWER */}
          {isMobileMenuOpen && (
            <div className="lg:hidden space-y-4 pt-3 pb-2 animate-fadeIn border-t border-slate-200/20">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                MENU ADMIN DASHBOARD
              </span>

              <div className="space-y-1.5">
                <button onClick={() => selectTabMobile('dashboard')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'dashboard' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><LayoutDashboard className="w-4 h-4" /><span>Dashboard Overview</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('services')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'services' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><Layers className="w-4 h-4" /><span>Kelola Layanan</span></div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">{servicesList.length}</span>
                </button>

                <button onClick={() => selectTabMobile('consultations')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'consultations' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><FileText className="w-4 h-4" /><span>Kelola Konsultasi</span></div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">{consultations.length}</span>
                </button>

                <button onClick={() => selectTabMobile('documents')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'documents' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><UploadCloud className="w-4 h-4" /><span>Kelola Dokumen</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('articles')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'articles' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><BookOpen className="w-4 h-4" /><span>Kelola Artikel</span></div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">{articlesList.length}</span>
                </button>

                <button onClick={() => selectTabMobile('faq')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'faq' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><HelpCircle className="w-4 h-4" /><span>Kelola FAQ</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('profile')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'profile' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><UserCheck className="w-4 h-4" /><span>Profil Konsultan</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('reports')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'reports' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><BarChart3 className="w-4 h-4" /><span>Laporan & Rekap</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Drawer Logout Button */}
              <div className="pt-3 border-t border-slate-200/20">
                <button
                  onClick={logout}
                  className="w-full py-3 px-4 rounded-xl font-extrabold text-xs text-white bg-rose-600 hover:bg-rose-700 shadow-md flex items-center justify-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Sesi Admin</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar Footer User Info (Desktop) */}
        <div className={`hidden lg:block pt-4 border-t space-y-3 mt-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className={`p-3 rounded-xl border flex items-center justify-between ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-md">
                {user.name.charAt(0)}
              </div>
              <div>
                <span className={`text-xs font-bold block leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{user.name}</span>
                <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider">Super Admin</span>
              </div>
            </div>

            <button onClick={toggleTheme} className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800 text-amber-400' : 'bg-white border-slate-300 text-blue-600'}`}>
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={logout}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-all flex items-center justify-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Sesi Admin</span>
          </button>
        </div>
      </aside>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 flex flex-col justify-between max-w-full">
        
        <div className="space-y-6">
          {/* DASHBOARD OVERVIEW TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Top Workspace Header */}
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-600 dark:text-teal-400 mb-1">
                    <span>SISTEM INFORMASI KONSULTASI REGULASI</span>
                  </div>
                  <h1 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Dashboard Admin Sistem 📊
                  </h1>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Kelola katalog perizinan, verifikasi kelengkapan berkas, dan pantau status pengajuan calon klien.
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={handleExportCSV}
                    className="py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center space-x-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Ekspor CSV Data</span>
                  </button>
                  <button
                    onClick={() => setCreateConsultationModal(true)}
                    className="py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center space-x-1.5 shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Input Konsultasi</span>
                  </button>
                </div>
              </div>

              {/* KPI Summary Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">KATALOG LAYANAN</span>
                    <Layers className="w-4 h-4 text-teal-500" />
                  </div>
                  <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{servicesList.length}</p>
                  <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold mt-1 block">Layanan Aktif</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">TOTAL MASUK</span>
                    <FileText className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{consultations.length}</p>
                  <span className="text-[10px] text-blue-500 font-bold mt-1 block">Permohonan Klien</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-blue-500/30' : 'bg-white border-blue-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-wider">KONSULTASI BARU</span>
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-black text-blue-500">{consultations.filter(c => c.status === 'Baru').length}</p>
                  <span className="text-[10px] text-blue-500 font-bold mt-1 block">Perlu Respons Admin</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-amber-500/30' : 'bg-white border-amber-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-wider">SEDANG DIPROSES</span>
                    <Building2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-black text-amber-500">
                    {consultations.filter(c => c.status === 'Dalam Proses' || c.status === 'Menunggu Dokumen' || c.status === 'Dokumen Diverifikasi').length}
                  </p>
                  <span className="text-[10px] text-amber-500 font-bold mt-1 block">Tahap Audit Sarana</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-emerald-500/30' : 'bg-white border-emerald-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider">NIE RESMI TERBIT</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-2xl font-black text-emerald-500">{consultations.filter(c => c.status === 'Selesai').length}</p>
                  <span className="text-[10px] text-emerald-500 font-bold mt-1 block">Selesai 100% Legal</span>
                </div>

              </div>

              {/* Table Structured Consultation Quick Preview */}
              <div className={`p-6 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200/20">
                  <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Daftar Konsultasi Masuk Terbaru</h3>
                  <button onClick={() => setActiveTab('consultations')} className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
                    Kelola Selengkapnya →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className={`border-b text-[11px] font-black uppercase tracking-wider ${
                        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                      }`}>
                        <th className="py-3 px-3">ID REQ</th>
                        <th className="py-3 px-3">PERUSAHAAN & PIC</th>
                        <th className="py-3 px-3">LAYANAN DIBUTUHKAN</th>
                        <th className="py-3 px-3">STATUS PENGAJUAN</th>
                        <th className="py-3 px-3 text-right">AKSI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/20">
                      {consultations.map((c) => (
                        <tr key={c.id} className={`hover:bg-slate-500/5 transition-colors ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">#{c.id}</td>
                          <td className="py-3 px-3">
                            <span className="font-bold block">{c.company_name}</span>
                            <span className="text-[11px] text-slate-500">{c.full_name} • {c.phone_number}</span>
                          </td>
                          <td className="py-3 px-3 font-semibold">{c.service_name}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-extrabold ${getStatusBadgeClass(c.status)}`}>
                              ● {c.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button onClick={() => setActiveTab('consultations')} className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
                              Detail →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* KELOLA LAYANAN TAB */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div>
                  <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Kelola Katalog Layanan Regulasi</h1>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Tambah, edit, dan atur katalog 17 layanan perizinan Kemenkes & BPOM RI.</p>
                </div>
                <button onClick={() => setNewServiceModal(true)} className="py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center space-x-1.5 shadow-sm">
                  <Plus className="w-4 h-4" />
                  <span>+ Tambah Layanan Baru</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map(svc => (
                  <div key={svc.id} className={`p-5 rounded-2xl border space-y-3 transition-all ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                        {svc.category}
                      </span>
                      <button onClick={() => handleDeleteService(svc.id)} className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{svc.title}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{svc.description}</p>
                    
                    <div className={`p-3 rounded-xl text-xs space-y-1.5 ${isDark ? 'bg-slate-950/80 border border-slate-800' : 'bg-slate-50 border border-slate-200'}`}>
                      <div><strong>Estimasi Waktu:</strong> {svc.estimated_time}</div>
                      <div><strong>Persyaratan Dokumen:</strong> {svc.requirements}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KELOLA KONSULTASI & STATUS PENGAJUAN TAB */}
          {activeTab === 'consultations' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div>
                  <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Kelola Data Konsultasi Calon Klien</h1>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pantau & ubah 6 tahapan status pengajuan konsultasi Kemenkes & BPOM.</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button onClick={handleExportCSV} className="py-2 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center space-x-1.5 shadow-sm">
                    <Download className="w-4 h-4" />
                    <span>Ekspor CSV / Excel</span>
                  </button>
                  <button onClick={() => setCreateConsultationModal(true)} className="py-2 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center space-x-1.5 shadow-sm">
                    <Plus className="w-4 h-4" />
                    <span>+ Input Konsultasi</span>
                  </button>
                </div>
              </div>

              {/* Search & Status Filters */}
              <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-3 ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="relative w-full sm:w-80">
                  <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                  <input
                    type="text"
                    placeholder="Cari nama PT/CV atau nama PIC..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs border focus:outline-none focus:border-teal-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                  {['all', 'Baru', 'Menunggu Dokumen', 'Dokumen Diverifikasi', 'Dalam Proses', 'Selesai', 'Ditolak'].map(st => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-extrabold shrink-0 border transition-all ${
                        statusFilter === st
                          ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-sm'
                          : isDark ? 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {st === 'all' ? 'Semua Status' : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* HTML Data Table for Consultations */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className={`border-b text-[11px] font-black uppercase tracking-wider ${
                        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                      }`}>
                        <th className="py-3 px-3">ID REQ</th>
                        <th className="py-3 px-3">NAMA PERUSAHAAN & PIC</th>
                        <th className="py-3 px-3">LAYANAN REGULASI</th>
                        <th className="py-3 px-3">KONTAK WHATSAPP / EMAIL</th>
                        <th className="py-3 px-3">STATUS PENGAJUAN</th>
                        <th className="py-3 px-3 text-right">AKSI KELOLA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/20">
                      {filteredConsultations.map((item) => (
                        <tr key={item.id} className={`hover:bg-slate-500/5 transition-colors ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">#{item.id}</td>
                          <td className="py-3 px-3">
                            <span className="font-bold block">{item.company_name}</span>
                            <span className="text-[11px] text-slate-500">PIC: {item.full_name}</span>
                          </td>
                          <td className="py-3 px-3 font-semibold">{item.service_name}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center space-x-1.5 text-teal-600 dark:text-teal-400 font-bold">
                              <Phone className="w-3 h-3" />
                              <span>{item.phone_number}</span>
                            </div>
                            <span className="text-[11px] text-slate-500 block">{item.email}</span>
                          </td>
                          <td className="py-3 px-3">
                            {/* Quick Status Dropdown */}
                            <select
                              value={item.status}
                              onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                              className={`p-1.5 rounded-lg text-[11px] font-extrabold border focus:outline-none cursor-pointer ${getStatusBadgeClass(item.status)}`}
                            >
                              <option value="Baru">● Baru</option>
                              <option value="Menunggu Dokumen">● Menunggu Dokumen</option>
                              <option value="Dokumen Diverifikasi">● Dokumen Diverifikasi</option>
                              <option value="Dalam Proses">● Dalam Proses</option>
                              <option value="Selesai">● Selesai</option>
                              <option value="Ditolak">● Ditolak</option>
                            </select>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button onClick={() => handleDeleteConsultation(item.id)} className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* KELOLA DOKUMEN TAB */}
          {activeTab === 'documents' && (
            <div className="space-y-6 animate-fadeIn">
              <DocumentUploader />
            </div>
          )}

          {/* KELOLA ARTIKEL TAB */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Kelola Artikel Edukasi Regulasi</h1>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Publikasi artikel panduan regulasi Kemenkes RI, CDAKB, dan BPOM.</p>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                if (!newArticleTitle) return;
                setArticlesList(prev => [...prev, { id: Date.now(), title: newArticleTitle, category: 'Alkes & Regulasi', author: 'apt. Prayoga Rahmat, S.Farm', date: 'Baru Saja' }]);
                setNewArticleTitle('');
              }} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Judul Artikel Baru..."
                  value={newArticleTitle}
                  onChange={(e) => setNewArticleTitle(e.target.value)}
                  className={`flex-1 rounded-xl p-3 text-xs border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
                <button type="submit" className="py-3 px-5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300">
                  + Tambah Artikel
                </button>
              </form>

              <div className="space-y-3">
                {articlesList.map(art => (
                  <div key={art.id} className={`p-4 rounded-xl border flex justify-between items-center text-xs ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div>
                      <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{art.title}</span>
                      <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">{art.category} • Penulis: {art.author} • {art.date}</span>
                    </div>
                    <button onClick={() => setArticlesList(prev => prev.filter(a => a.id !== art.id))} className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KELOLA FAQ TAB */}
          {activeTab === 'faq' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Kelola Pertanyaan Umum (FAQ)</h1>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                if (!newFaqQ || !newFaqA) return;
                setFaqList(prev => [...prev, { id: Date.now(), question: newFaqQ, answer: newFaqA }]);
                setNewFaqQ('');
                setNewFaqA('');
              }} className={`space-y-3 p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <input
                  type="text"
                  placeholder="Pertanyaan Baru..."
                  value={newFaqQ}
                  onChange={(e) => setNewFaqQ(e.target.value)}
                  className={`w-full rounded-xl p-3 text-xs border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
                <textarea
                  rows={2}
                  placeholder="Jawaban Pertanyaan..."
                  value={newFaqA}
                  onChange={(e) => setNewFaqA(e.target.value)}
                  className={`w-full rounded-xl p-3 text-xs border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
                <button type="submit" className="py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300">
                  + Tambah FAQ
                </button>
              </form>

              <div className="space-y-3">
                {faqList.map(faq => (
                  <div key={faq.id} className={`p-4 rounded-xl border space-y-1 text-xs ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div className="flex justify-between items-start font-bold">
                      <span className="text-teal-600 dark:text-teal-400">Q: {faq.question}</span>
                      <button onClick={() => setFaqList(prev => prev.filter(f => f.id !== faq.id))} className="text-rose-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFIL KONSULTAN TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Kelola Profil Konsultan Utama</h1>
              </div>

              <div className={`p-6 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold mb-1">Nama Konsultan Utama</label>
                    <input type="text" value={consultantProfile.name} onChange={(e) => setConsultantProfile({...consultantProfile, name: e.target.value})} className={`w-full rounded-xl p-3 border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Gelar & Jabatan</label>
                    <input type="text" value={consultantProfile.title} onChange={(e) => setConsultantProfile({...consultantProfile, title: e.target.value})} className={`w-full rounded-xl p-3 border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">No. WA Official</label>
                    <input type="text" value={consultantProfile.phone} onChange={(e) => setConsultantProfile({...consultantProfile, phone: e.target.value})} className={`w-full rounded-xl p-3 border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Email Resmi</label>
                    <input type="email" value={consultantProfile.email} onChange={(e) => setConsultantProfile({...consultantProfile, email: e.target.value})} className={`w-full rounded-xl p-3 border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                </div>

                <button onClick={() => alert('Profil berhasil diperbarui!')} className="py-3 px-5 font-bold text-xs text-slate-950 bg-teal-400 rounded-xl hover:bg-teal-300">
                  Simpan Profil Konsultan
                </button>
              </div>
            </div>
          )}

          {/* LAPORAN & REKAP TAB */}
          {activeTab === 'reports' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div>
                  <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Laporan & Rekapitulasi Data</h1>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Rekap statistik pengajuan perizinan & laporan layanan paling diminati.</p>
                </div>
                <button onClick={handleExportCSV} className="py-2.5 px-5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center space-x-2 shadow-md shrink-0">
                  <Download className="w-4 h-4" />
                  <span>Unduh Laporan Rekap (CSV/Excel)</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="font-bold text-teal-600 dark:text-teal-400 block">LAYANAN PALING FAVORIT</span>
                  <p className={`text-base font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>1. IDAK Kemenkes (45%)</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>2. Notifikasi BPOM Kosmetik (30%)</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block">KONSULTASI SELESAI</span>
                  <p className={`text-2xl font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {consultations.filter(c => c.status === 'Selesai').length} Permohonan
                  </p>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">NIE Resmi Terbit</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="font-bold text-blue-600 dark:text-blue-400 block">TOTAL DATA CLIENT REKAP</span>
                  <p className={`text-2xl font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {consultations.length} Klien PT/CV
                  </p>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">Terdata di Sistem</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DASHBOARD FOOTER & COPYRIGHT */}
        <footer className={`mt-10 pt-5 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-xs ${
          isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-teal-600 dark:text-teal-400">PT Sentra Medizin Konsultindo</span>
            <span>• Sistem Informasi Administrative Portal</span>
          </div>
          <div className="text-[11px] font-medium">
            © {new Date().getFullYear()} PT Sentra Medizin. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </footer>

      </main>

      {/* CREATE CONSULTATION MODAL */}
      {createConsultationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`w-full max-w-lg rounded-2xl p-6 space-y-4 border shadow-2xl ${
            isDark ? 'bg-[#0B192C] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-sm">Tambah Data Konsultasi Baru</h3>
              <button onClick={() => setCreateConsultationModal(false)} className="font-bold text-slate-400">✕</button>
            </div>

            <form onSubmit={handleCreateConsultation} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Nama Perusahaan / PT / CV</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: PT Medika Jaya Utama"
                  value={newForm.company_name}
                  onChange={(e) => setNewForm({ ...newForm, company_name: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Nama Pemohon / PIC</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Dr. Budi Santoso"
                  value={newForm.full_name}
                  onChange={(e) => setNewForm({ ...newForm, full_name: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="email@klien.com"
                    value={newForm.email}
                    onChange={(e) => setNewForm({ ...newForm, email: e.target.value })}
                    className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">No. WhatsApp</label>
                  <input
                    type="text"
                    required
                    placeholder="081234567890"
                    value={newForm.phone_number}
                    onChange={(e) => setNewForm({ ...newForm, phone_number: e.target.value })}
                    className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Layanan yang Dipilih</label>
                <select
                  value={newForm.service_name}
                  onChange={(e) => setNewForm({ ...newForm, service_name: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                >
                  <option value="Izin Distribusi Alat Kesehatan (IDAK)">Izin Distribusi Alat Kesehatan (IDAK)</option>
                  <option value="Sertifikasi CDAKB Kemenkes RI">Sertifikasi CDAKB Kemenkes RI</option>
                  <option value="Notifikasi Kosmetika BPOM">Notifikasi Kosmetika BPOM</option>
                  <option value="Izin Edar Obat Tradisional (POM TR)">Izin Edar Obat Tradisional (POM TR)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Keluhan / Kebutuhan Izin</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Deskripsi keluhan..."
                  value={newForm.message}
                  onChange={(e) => setNewForm({ ...newForm, message: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button type="button" onClick={() => setCreateConsultationModal(false)} className="px-3 py-1.5 text-slate-400 font-bold">Batal</button>
                <button type="submit" className="px-4 py-1.5 font-bold text-slate-950 bg-teal-400 rounded-xl">Simpan Data</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE SERVICE MODAL */}
      {newServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`w-full max-w-lg rounded-2xl p-6 space-y-4 border shadow-2xl ${
            isDark ? 'bg-[#0B192C] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-sm">Tambah Layanan Baru</h3>
              <button onClick={() => setNewServiceModal(false)} className="font-bold text-slate-400">✕</button>
            </div>

            <form onSubmit={handleAddService} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Nama Layanan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Izin Produksi PKRT"
                  value={newServiceForm.title}
                  onChange={(e) => setNewServiceForm({ ...newServiceForm, title: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Kategori</label>
                  <input
                    type="text"
                    required
                    placeholder="Alat Kesehatan / BPOM"
                    value={newServiceForm.category}
                    onChange={(e) => setNewServiceForm({ ...newServiceForm, category: e.target.value })}
                    className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Estimasi Waktu</label>
                  <input
                    type="text"
                    required
                    placeholder="14 Hari Kerja"
                    value={newServiceForm.estimated_time}
                    onChange={(e) => setNewServiceForm({ ...newServiceForm, estimated_time: e.target.value })}
                    className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Persyaratan Dokumen</label>
                <input
                  type="text"
                  required
                  placeholder="NIB, PJT, SOP Gudang..."
                  value={newServiceForm.requirements}
                  onChange={(e) => setNewServiceForm({ ...newServiceForm, requirements: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Deskripsi Layanan</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Penjelasan ringkas..."
                  value={newServiceForm.description}
                  onChange={(e) => setNewServiceForm({ ...newServiceForm, description: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button type="button" onClick={() => setNewServiceModal(false)} className="px-3 py-1.5 text-slate-400 font-bold">Batal</button>
                <button type="submit" className="px-4 py-1.5 font-bold text-slate-950 bg-teal-400 rounded-xl">Simpan Layanan</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
