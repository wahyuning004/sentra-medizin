'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  LayoutDashboard, 
  Shield, 
  FileText, 
  PlusCircle, 
  LogOut, 
  Layers, 
  Trash2, 
  Edit3, 
  Sun, 
  Moon, 
  ChevronRight, 
  UploadCloud,
  Menu,
  X,
  Search,
  Bell,
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Building,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  ExternalLink,
  History,
  Activity,
  ArrowRight,
  Filter,
  Check,
  RefreshCw
} from 'lucide-react';
import DocumentUploader from './DocumentUploader';

interface ClientApplication {
  id: string;
  title: string;
  category: string;
  submitted_at: string;
  estimated_completion: string;
  progress: number;
  status: 'Konsultasi Baru' | 'Menunggu Dokumen' | 'Dokumen Diverifikasi' | 'Dalam Proses' | 'Selesai' | 'Dibatalkan';
  consultant: string;
  notes: string;
  communication_method?: string;
  documents_count?: number;
}

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
}

export default function ClientDashboard() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<
    'overview' | 'services' | 'new_application' | 'documents' | 'tracking' | 'history' | 'notifications' | 'profile' | 'faq'
  >('overview');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Client Applications State
  const [clientApplications, setClientApplications] = useState<ClientApplication[]>([
    {
      id: 'REQ-2026-001',
      title: 'Permohonan IDAK (Izin Distribusi Alat Kesehatan)',
      category: 'Alat Kesehatan',
      submitted_at: '10 Agustus 2026',
      estimated_completion: '25 Agustus 2026',
      progress: 75,
      status: 'Dalam Proses',
      consultant: 'apt. Prayoga Rahmat, S.Farm',
      notes: 'Dokumen Penanggung Jawab Teknis (PJT) telah lolos verifikasi awal. Menunggu penjadwalan audit sarana gudang.',
      communication_method: 'WhatsApp & Zoom',
      documents_count: 5
    },
    {
      id: 'REQ-2026-002',
      title: 'Pendampingan Sertifikasi CDAKB (Cara Distribusi Alkes yang Baik)',
      category: 'Audit & Sertifikasi',
      submitted_at: '02 Agustus 2026',
      estimated_completion: '30 Agustus 2026',
      progress: 45,
      status: 'Menunggu Dokumen',
      consultant: 'Drs. Eko Prasetyo, M.Si',
      notes: 'Harap mengunggah ulang Lampiran Layout Denah Gudang Pendingin sesuai standar Permenkes 2026.',
      communication_method: 'WhatsApp',
      documents_count: 3
    },
    {
      id: 'REQ-2026-003',
      title: 'Notifikasi Kosmetik BPOM (SKU Hair Care Serum)',
      category: 'Kosmetika',
      submitted_at: '15 Juli 2026',
      estimated_completion: '05 Agustus 2026',
      progress: 100,
      status: 'Selesai',
      consultant: 'apt. Prayoga Rahmat, S.Farm',
      notes: 'Nomor Izin Edar (NIE) BPOM telah terbit resmi. Salinan digital e-sertifikat dapat diunduh di portal ini.',
      communication_method: 'Tatap Muka Kantor',
      documents_count: 6
    }
  ]);

  // Notifications State
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: 1, title: 'Dokumen Diverifikasi', message: 'Dokumen PJT Apoteker untuk REQ-2026-001 telah diverifikasi konsultan.', time: '10 Menit lalu', type: 'success', read: false },
    { id: 2, title: 'Dokumen Perlu Diperbaiki', message: 'Layout gudang untuk REQ-2026-002 perlu revisi pencahayaan & pendingin.', time: '2 Jam lalu', type: 'warning', read: false },
    { id: 3, title: 'Permohonan Diterima', message: 'Permohonan konsultasi baru REQ-2026-001 telah diterima tim admin.', time: '1 Hari lalu', type: 'info', read: true }
  ]);

  // Services State
  const [serviceCategory, setServiceCategory] = useState('all');
  const [serviceSearch, setServiceSearch] = useState('');
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  const servicesCatalog = [
    {
      id: 1,
      title: 'Izin Distribusi Alat Kesehatan (IDAK)',
      category: 'Alat Kesehatan',
      est_time: '14 - 21 Hari Kerja',
      est_cost: 'Konsultasi Gratis',
      description: 'Izin resmi Kementerian Kesehatan RI untuk perusahaan yang menyalurkan alat kesehatan secara legal di seluruh Indonesia.',
      requirements: ['NIB OSS RBA KBLI 46691', 'PJT Apoteker / Tenaga Teknis Kefarmasian', 'BAP Layak Gudang & Fasilitas', 'SOP Distribusi & Mutu'],
      steps: ['Pengumpulan Berkas PJT', 'Pemeriksaan Layout Gudang', 'Pengajuan Online e-Report', 'Verifikasi & Terbit IDAK'],
      faq: 'Berapa lama IDAK berlaku? IDAK berlaku selama perusahaan masih beroperasi aktif dan memenuhi audit tahunan.'
    },
    {
      id: 2,
      title: 'Audit & Sertifikasi CDAKB Kemenkes RI',
      category: 'Audit & Sertifikasi',
      est_time: '30 - 45 Hari Kerja',
      est_cost: 'Paket Pendampingan Full',
      description: 'Pendampingan pemenuhan standar Cara Distribusi Alat Kesehatan yang Baik (CDAKB) sesuai Permenkes RI.',
      requirements: ['Dokumen Manual Mutu', 'Denah & Layout Sarana Gudang', 'Form Pemantauan Suhu & Kelembaban', 'SOP Penanganan Keluhan & Recall'],
      steps: ['Self-Assessment Audit', 'Penyusunan SOP & Dokumen', 'Simulasi Pra-Audit', 'Pendampingan Audit Resmi Kemenkes'],
      faq: 'Apakah audit CDAKB wajib? Ya, seluruh distributor alkes pemegang IDAK wajib bersertifikat CDAKB.'
    },
    {
      id: 3,
      title: 'Notifikasi Kosmetika BPOM RI',
      category: 'Kosmetika',
      est_time: '7 - 14 Hari Kerja',
      est_cost: 'Biaya BPOM Resmi',
      description: 'Pendaftaran Nomor Izin Edar (NIE) BPOM untuk produk kosmetik lokal maupun impor secara cepat.',
      requirements: ['Sertifikat Merek HAKI', 'Formula Bahan Baku (CoA)', 'Surat Perjanjian Kontrak Maklon / Impor', 'Desain Kemasan & Etiket'],
      steps: ['Verifikasi Formula Produk', 'Upload Berkas BPOM', 'Pembayaran PNBP BPOM', 'NIE Terbit'],
      faq: 'Apakah merek harus terdaftar di HAKI? Ya, BPOM menyaratkan minimal resi pendaftaran merek HAKI.'
    },
    {
      id: 4,
      title: 'Izin Edar Obat Tradisional (POM TR)',
      category: 'Obat Tradisional',
      est_time: '30 - 60 Hari Kerja',
      est_cost: 'Pendampingan Lengkap',
      description: 'Registrasi obat bahan alam, herbal, dan suplemen kesehatan untuk memperoleh Nomor Izin Edar (NIE) POM TR.',
      requirements: ['Uji Stabilitas & Laboratorium', 'Sertifikat CPOTB / Surat Keterangan Pemenuhan CPOTB', 'Sampel Kemasan Produk'],
      steps: ['Uji Laboratorium Sampel', 'Evaluasi Formula Herbs', 'Pengajuan BPOM TR', 'NIE Terbit'],
      faq: 'Apakah jamu buatan rumah tangga bisa didaftarkan? Harus diproduksi di sarana ber-CPOTB atau UMOT.'
    }
  ];

  // New Application Form State
  const [newAppForm, setNewAppForm] = useState({
    service_id: '1',
    company_name: user?.company_name || '',
    pic_name: user?.name || '',
    whatsapp: user?.phone_number || '',
    email: user?.email || '',
    comm_method: 'WhatsApp & Zoom',
    notes: ''
  });

  // Client Profile State
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Dr. Budi Santoso',
    email: user?.email || 'budi@sejahteramedika.com',
    whatsapp: user?.phone_number || '081299887766',
    company: user?.company_name || 'PT Sejahtera Medika Nusantara',
    address: 'Jl. Raya Industri No. 45, Cikarang Barat, Bekasi, Jawa Barat',
    nib: '9120001234567',
    kbli: '46691 - Perdagangan Besar Alat Laboratorium & Farmasi'
  });

  const [editNotesId, setEditNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  if (!user) return null;

  const handleCreateApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = servicesCatalog.find(s => s.id.toString() === newAppForm.service_id) || servicesCatalog[0];
    const newEntry: ClientApplication = {
      id: `REQ-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      title: svc.title,
      category: svc.category,
      submitted_at: 'Baru Saja',
      estimated_completion: '14 Hari Kerja',
      progress: 15,
      status: 'Konsultasi Baru',
      consultant: 'apt. Prayoga Rahmat, S.Farm',
      notes: newAppForm.notes || 'Pengajuan baru telah diterima. Tim konsultan akan menghubungi Anda.',
      communication_method: newAppForm.comm_method,
      documents_count: 0
    };

    setClientApplications(prev => [newEntry, ...prev]);
    setNotifications(prev => [
      { id: Date.now(), title: 'Pengajuan Terkirim', message: `Pengajuan ${newEntry.id} berhasil dikirim.`, time: 'Baru saja', type: 'info', read: false },
      ...prev
    ]);
    setActiveTab('tracking');
  };

  const handleCancelApplication = (id: string) => {
    if (confirm(`Apakah Anda yakin ingin membatalkan permohonan #${id}?`)) {
      setClientApplications(prev => prev.map(a => a.id === id ? { ...a, status: 'Dibatalkan', progress: 0 } : a));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Selesai':
        return 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30 dark:text-emerald-400';
      case 'Konsultasi Baru':
        return 'bg-blue-500/15 text-blue-600 border-blue-500/30 dark:text-blue-400';
      case 'Dalam Proses':
        return 'bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400';
      case 'Dokumen Diverifikasi':
        return 'bg-cyan-500/15 text-cyan-600 border-cyan-500/30 dark:text-cyan-400';
      case 'Menunggu Dokumen':
        return 'bg-purple-500/15 text-purple-600 border-purple-500/30 dark:text-purple-400';
      case 'Dibatalkan':
        return 'bg-rose-500/15 text-rose-600 border-rose-500/30 dark:text-rose-400';
      default:
        return 'bg-slate-500/15 text-slate-600 border-slate-500/30 dark:text-slate-400';
    }
  };

  const filteredServices = servicesCatalog.filter(s => {
    const matchesCat = serviceCategory === 'all' || s.category === serviceCategory;
    const matchesSearch = s.title.toLowerCase().includes(serviceSearch.toLowerCase()) || s.description.toLowerCase().includes(serviceSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const selectTabMobile = (tab: any) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row font-sans transition-colors duration-200 ${
      isDark ? 'bg-[#070F1E] text-slate-100' : 'bg-slate-100 text-slate-900'
    }`}>
      
      {/* SIDEBAR NAVIGATION (DESKTOP + MOBILE HAMBURGER DRAWER) */}
      <aside className={`w-full lg:w-72 p-4 sm:p-5 flex flex-col justify-between shrink-0 z-30 border-r border-b lg:border-b-0 transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-md'
      }`}>
        <div className="space-y-4">
          
          {/* Top Brand Header Bar & Mobile Actions */}
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
                  PORTAL LAYANAN KLIEN
                </span>
              </div>
            </div>

            {/* Mobile Actions: Dark Mode OUTSIDE Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-xl border transition-all ${
                  isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-blue-600 hover:bg-slate-200'
                }`}
                title="Mode Tema"
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

          {/* DESKTOP NAVIGATION MENU */}
          <div className="hidden lg:block space-y-4">
            
            {/* MENU PERIZINAN */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                UTAMA & PERIZINAN
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'overview'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    <span>Dashboard Klien</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('tracking')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'tracking'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Activity className="w-4 h-4 shrink-0" />
                    <span>Tracking Pengajuan</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeTab === 'tracking' ? 'bg-slate-950 text-teal-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    {clientApplications.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('new_application')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'new_application'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <PlusCircle className="w-4 h-4 shrink-0" />
                    <span>Pengajuan Konsultasi</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

            {/* DOKUMEN & KATALOG */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                LAYANAN & BERKAS
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'documents'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <UploadCloud className="w-4 h-4 shrink-0" />
                    <span>Upload Dokumen</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'services'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>Daftar Layanan</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'history'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <History className="w-4 h-4 shrink-0" />
                    <span>Riwayat Konsultasi</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

            {/* AKUN & NOTIFIKASI */}
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                AKUN & BANTUAN
              </span>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'notifications'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Bell className="w-4 h-4 shrink-0" />
                    <span>Notifikasi System</span>
                  </div>
                  {unreadNotificationsCount > 0 && (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500 text-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'profile'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 shrink-0" />
                    <span>Profil Klien</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => setActiveTab('faq')}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between border ${
                    activeTab === 'faq'
                      ? isDark ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-md' : 'bg-teal-600 text-white font-extrabold border-teal-700 shadow-md'
                      : isDark ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Bantuan / FAQ</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

          </div>

          {/* MOBILE HAMBURGER DRAWER */}
          {isMobileMenuOpen && (
            <div className="lg:hidden space-y-4 pt-3 pb-2 animate-fadeIn border-t border-slate-200/20">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                MENU PERIZINAN KLIEN
              </span>

              <div className="space-y-1.5">
                <button onClick={() => selectTabMobile('overview')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'overview' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><LayoutDashboard className="w-4 h-4" /><span>Dashboard Klien</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('tracking')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'tracking' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><Activity className="w-4 h-4" /><span>Tracking Pengajuan</span></div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">{clientApplications.length}</span>
                </button>

                <button onClick={() => selectTabMobile('new_application')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'new_application' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><PlusCircle className="w-4 h-4" /><span>Pengajuan Konsultasi</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('documents')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'documents' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><UploadCloud className="w-4 h-4" /><span>Upload Dokumen</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('services')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'services' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><Layers className="w-4 h-4" /><span>Daftar Layanan</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('history')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'history' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><History className="w-4 h-4" /><span>Riwayat Konsultasi</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('notifications')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'notifications' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><Bell className="w-4 h-4" /><span>Notifikasi System</span></div>
                  {unreadNotificationsCount > 0 && <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500 text-white">{unreadNotificationsCount}</span>}
                </button>

                <button onClick={() => selectTabMobile('profile')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'profile' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><User className="w-4 h-4" /><span>Profil Klien</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button onClick={() => selectTabMobile('faq')} className={`w-full p-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${activeTab === 'faq' ? 'bg-teal-500 text-slate-950 font-extrabold' : isDark ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>
                  <div className="flex items-center space-x-2.5"><HelpCircle className="w-4 h-4" /><span>Bantuan / FAQ</span></div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Drawer Logout */}
              <div className="pt-3 border-t border-slate-200/20">
                <button
                  onClick={logout}
                  className="w-full py-3 px-4 rounded-xl font-extrabold text-xs text-white bg-rose-600 hover:bg-rose-700 shadow-md flex items-center justify-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Portal Klien</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Desktop Sidebar Footer */}
        <div className={`hidden lg:block pt-4 border-t space-y-3 mt-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className={`p-3 rounded-xl border flex items-center justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-md">
                {user.name.charAt(0)}
              </div>
              <div>
                <span className={`text-xs font-bold block leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{user.name}</span>
                <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold block">{profileData.company}</span>
              </div>
            </div>

            <button onClick={toggleTheme} className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800 text-amber-400' : 'bg-white border-slate-300 text-blue-600'}`}>
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={logout}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-all flex items-center justify-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Portal Klien</span>
          </button>
        </div>
      </aside>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 flex flex-col justify-between max-w-full">
        
        <div className="space-y-6">

          {/* MODULE 1: DASHBOARD OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Welcome Card */}
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-600 dark:text-teal-400 mb-1">
                    <span>SENTRA MEDIZIN REGULATORY PLATFORM</span>
                  </div>
                  <h1 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Selamat Datang, {profileData.name} 👋
                  </h1>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Perusahaan: <strong className="text-teal-600 dark:text-teal-400">{profileData.company}</strong> • NIB: {profileData.nib}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <a
                    href="https://wa.me/6281299887766?text=Halo%20apt.%20Prayoga%20Rahmat,%20saya%20klien%20Sentra%20Medizin%20ingin%20konsultasi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center space-x-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasi WA Direct</span>
                  </a>
                  <button
                    onClick={() => setActiveTab('new_application')}
                    className="py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center space-x-1.5 shadow-sm"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Ajukan Izin Baru</span>
                  </button>
                </div>
              </div>

              {/* KPI Status Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">TOTAL PERMOHONAN</span>
                  <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{clientApplications.length}</p>
                  <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold mt-1 block">Tercatat di Portal</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-amber-500/30' : 'bg-white border-amber-200 shadow-sm'}`}>
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-wider block mb-1">PROSES EVALUASI</span>
                  <p className="text-2xl font-black text-amber-500">
                    {clientApplications.filter(a => a.status === 'Dalam Proses' || a.status === 'Konsultasi Baru').length}
                  </p>
                  <span className="text-[10px] text-amber-500 font-bold mt-1 block">Tahap Audit Sarana</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-purple-500/30' : 'bg-white border-purple-200 shadow-sm'}`}>
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-wider block mb-1">STATUS DOKUMEN</span>
                  <p className="text-2xl font-black text-purple-500">
                    {clientApplications.filter(a => a.status === 'Menunggu Dokumen').length}
                  </p>
                  <span className="text-[10px] text-purple-500 font-bold mt-1 block">Perlu Upload Revisi</span>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-emerald-500/30' : 'bg-white border-emerald-200 shadow-sm'}`}>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider block mb-1">NIE & SERTIFIKAT TERBIT</span>
                  <p className="text-2xl font-black text-emerald-500">
                    {clientApplications.filter(a => a.status === 'Selesai').length}
                  </p>
                  <span className="text-[10px] text-emerald-500 font-bold mt-1 block">Selesai 100% Legal</span>
                </div>
              </div>

              {/* Application Quick Summary List */}
              <div className={`p-6 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200/20">
                  <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Ringkasan Status Permohonan Terbaru</h3>
                  <button onClick={() => setActiveTab('tracking')} className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
                    Lihat Tracking Detail →
                  </button>
                </div>

                <div className="space-y-3">
                  {clientApplications.map((app) => (
                    <div key={app.id} className={`p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-teal-600 dark:text-teal-400 font-bold text-xs">{app.id}</span>
                          <span className="text-[11px] text-slate-500">• {app.submitted_at}</span>
                        </div>
                        <h4 className={`text-sm font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{app.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">Konsultan: {app.consultant}</p>
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${getStatusBadge(app.status)}`}>
                          ● {app.status}
                        </span>
                        <button onClick={() => setActiveTab('tracking')} className="p-2 text-slate-400 hover:text-teal-400">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* MODULE 2: DAFTAR & DETAIL LAYANAN */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div>
                  <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Katalog Layanan Regulasi & Sertifikasi</h1>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pilih layanan perizinan Kemenkes RI, BPOM, dan Sertifikasi CDAKB.</p>
                </div>

                <button onClick={() => setActiveTab('new_application')} className="py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300">
                  + Ajukan Konsultasi
                </button>
              </div>

              {/* Search & Category Filter */}
              <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-3 ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="relative w-full sm:w-80">
                  <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                  <input
                    type="text"
                    placeholder="Cari layanan (misal: IDAK, CDAKB, BPOM)..."
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs border focus:outline-none focus:border-teal-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                  {['all', 'Alat Kesehatan', 'Audit & Sertifikasi', 'Kosmetika', 'Obat Tradisional'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setServiceCategory(cat)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-extrabold shrink-0 border transition-all ${
                        serviceCategory === cat
                          ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-sm'
                          : isDark ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {cat === 'all' ? 'Semua Kategori' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredServices.map((svc) => (
                  <div key={svc.id} className={`p-5 rounded-2xl border space-y-4 transition-all flex flex-col justify-between ${
                    isDark ? 'bg-slate-900/80 border-slate-800 hover:border-teal-500/40' : 'bg-white border-slate-200 shadow-sm hover:border-teal-400'
                  }`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                          {svc.category}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">{svc.est_time}</span>
                      </div>
                      <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{svc.title}</h3>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{svc.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/20 flex justify-between items-center">
                      <button
                        onClick={() => setSelectedServiceModal(svc)}
                        className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                      >
                        <span>Lihat Detail Layanan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          setNewAppForm({ ...newAppForm, service_id: svc.id.toString() });
                          setActiveTab('new_application');
                        }}
                        className="py-2 px-3 rounded-xl text-xs font-extrabold bg-teal-400 text-slate-950 hover:bg-teal-300 shadow-sm"
                      >
                        Ajukan Izin →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 3: PENGAJUAN KONSULTASI */}
          {activeTab === 'new_application' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Form Pengajuan Konsultasi Perizinan</h1>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Isi kelengkapan data usaha & permohonan layanan yang dibutuhkan.</p>
              </div>

              <form onSubmit={handleCreateApplication} className={`p-6 rounded-2xl border space-y-4 ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold mb-1">Pilih Layanan Regulasi *</label>
                    <select
                      value={newAppForm.service_id}
                      onChange={(e) => setNewAppForm({ ...newAppForm, service_id: e.target.value })}
                      className={`w-full p-3 rounded-xl border font-semibold ${
                        isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      {servicesCatalog.map(s => (
                        <option key={s.id} value={s.id}>{s.title} ({s.category})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Nama Perusahaan / PT / CV *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Sejahtera Medika Nusantara"
                      value={newAppForm.company_name}
                      onChange={(e) => setNewAppForm({ ...newAppForm, company_name: e.target.value })}
                      className={`w-full p-3 rounded-xl border ${
                        isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Nama Penanggung Jawab (PIC) *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Budi Santoso"
                      value={newAppForm.pic_name}
                      onChange={(e) => setNewAppForm({ ...newAppForm, pic_name: e.target.value })}
                      className={`w-full p-3 rounded-xl border ${
                        isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Nomor WhatsApp Aktif *</label>
                    <input
                      type="text"
                      required
                      placeholder="081234567890"
                      value={newAppForm.whatsapp}
                      onChange={(e) => setNewAppForm({ ...newAppForm, whatsapp: e.target.value })}
                      className={`w-full p-3 rounded-xl border ${
                        isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1">Metode Komunikasi Konsultasi yang Diinginkan</label>
                  <select
                    value={newAppForm.comm_method}
                    onChange={(e) => setNewAppForm({ ...newAppForm, comm_method: e.target.value })}
                    className={`w-full p-3 rounded-xl border font-semibold ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="WhatsApp & Phone">WhatsApp & Phone Call Fast-Response</option>
                    <option value="Zoom Meeting Online">Online Video Meeting (Zoom / Google Meet)</option>
                    <option value="Tatap Muka Kantor">Tatap Muka di Kantor Konsultan (Jakarta)</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1">Deskripsi Kebutuhan / Kendala Perizinan</label>
                  <textarea
                    rows={3}
                    placeholder="Jelaskan kebutuhan pengurusan perizinan alat kesehatan atau sertifikasi..."
                    value={newAppForm.notes}
                    onChange={(e) => setNewAppForm({ ...newAppForm, notes: e.target.value })}
                    className={`w-full p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button type="submit" className="py-3 px-6 rounded-xl font-black text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md">
                    Kirim Permohonan Konsultasi →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* MODULE 4: UPLOAD & KELOLA DOKUMEN */}
          {activeTab === 'documents' && (
            <div className="space-y-6 animate-fadeIn">
              <DocumentUploader />
            </div>
          )}

          {/* MODULE 5: TRACKING PENGAJUAN */}
          {activeTab === 'tracking' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Tracking Tahapan Status Permohonan</h1>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pantau progres evaluasi 6 tahapan status secara real-time.</p>
              </div>

              <div className="space-y-6">
                {clientApplications.map((app) => (
                  <div key={app.id} className={`p-6 rounded-2xl border space-y-4 ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-200/20">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-teal-600 dark:text-teal-400 font-bold text-xs">{app.id}</span>
                          <span className="text-xs text-slate-500">• {app.submitted_at}</span>
                        </div>
                        <h3 className={`text-base font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{app.title}</h3>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-black border ${getStatusBadge(app.status)}`}>
                          ● {app.status}
                        </span>
                        <button onClick={() => handleCancelApplication(app.id)} className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Progres Kesiapan Audit:</span>
                        <span className="text-teal-600 dark:text-teal-400">{app.progress}% Selesai</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-950 overflow-hidden">
                        <div className="h-full bg-teal-500 rounded-full transition-all duration-500" style={{ width: `${app.progress}%` }} />
                      </div>
                    </div>

                    {/* 6 Steps Visual Timeline Bar */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2 text-[10px] font-bold text-center">
                      <div className={`p-2 rounded-lg border ${app.progress >= 15 ? 'bg-teal-500/15 border-teal-500/40 text-teal-400' : 'opacity-40'}`}>
                        1. Konsultasi Baru
                      </div>
                      <div className={`p-2 rounded-lg border ${app.progress >= 30 ? 'bg-teal-500/15 border-teal-500/40 text-teal-400' : 'opacity-40'}`}>
                        2. Menunggu Dokumen
                      </div>
                      <div className={`p-2 rounded-lg border ${app.progress >= 50 ? 'bg-teal-500/15 border-teal-500/40 text-teal-400' : 'opacity-40'}`}>
                        3. Dokumen Diverifikasi
                      </div>
                      <div className={`p-2 rounded-lg border ${app.progress >= 75 ? 'bg-teal-500/15 border-teal-500/40 text-teal-400' : 'opacity-40'}`}>
                        4. Dalam Proses
                      </div>
                      <div className={`p-2 rounded-lg border ${app.progress === 100 ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' : 'opacity-40'}`}>
                        5. NIE Selesai
                      </div>
                      <div className={`p-2 rounded-lg border ${app.status === 'Dibatalkan' ? 'bg-rose-500/15 border-rose-500/40 text-rose-400' : 'opacity-40'}`}>
                        6. Status Akhir
                      </div>
                    </div>

                    {/* Consultant Notes */}
                    <div className={`p-4 rounded-xl text-xs space-y-1.5 ${
                      isDark ? 'bg-slate-950/60 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}>
                      <div className="flex justify-between font-bold">
                        <span className="text-teal-600 dark:text-teal-400">Catatan Konsultan ({app.consultant}):</span>
                        <span className="text-slate-500">Metode: {app.communication_method || 'WhatsApp'}</span>
                      </div>
                      <p className="italic">{app.notes}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 6: RIWAYAT KONSULTASI */}
          {activeTab === 'history' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Riwayat Permohonan Konsultasi Terdahulu</h1>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Daftar permohonan yang telah selesai atau diajukan sebelumnya.</p>
              </div>

              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className={`border-b text-[11px] font-black uppercase tracking-wider ${
                        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                      }`}>
                        <th className="py-3 px-3">ID PERMOHONAN</th>
                        <th className="py-3 px-3">LAYANAN REGULASI</th>
                        <th className="py-3 px-3">TANGGAL MASUK</th>
                        <th className="py-3 px-3">STATUS AKHIR</th>
                        <th className="py-3 px-3 text-right">DOKUMEN E-SERTIFIKAT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/20">
                      {clientApplications.map(item => (
                        <tr key={item.id} className="hover:bg-slate-500/5 transition-colors">
                          <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">{item.id}</td>
                          <td className="py-3 px-3 font-bold">{item.title}</td>
                          <td className="py-3 px-3 text-slate-500">{item.submitted_at}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${getStatusBadge(item.status)}`}>
                              ● {item.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            {item.status === 'Selesai' ? (
                              <button onClick={() => alert('Mengunduh e-Sertifikat NIE resmi BPOM...')} className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
                                Download NIE (PDF) →
                              </button>
                            ) : (
                              <span className="text-slate-500 italic">Proses Audit</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 7: NOTIFIKASI SYSTEM */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border flex justify-between items-center ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div>
                  <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Notifikasi & Pembaruan Sistem</h1>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Informasi verifikasi berkas dan perubahan status audit.</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                  className="py-2 px-3 rounded-xl text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Tandai Semua Dibaca
                </button>
              </div>

              <div className="space-y-3">
                {notifications.map(n => (
                  <div key={n.id} className={`p-4 rounded-xl border flex items-start justify-between gap-3 text-xs ${
                    n.read 
                      ? isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                      : isDark ? 'bg-slate-900 border-teal-500/40 text-slate-100' : 'bg-white border-teal-300 text-slate-900 shadow-sm'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold block text-sm">{n.title}</span>
                        <p className="mt-0.5">{n.message}</p>
                        <span className="text-[10px] text-slate-500 block mt-1">{n.time}</span>
                      </div>
                    </div>

                    {!n.read && (
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0 mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 8: PROFIL KLIEN */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Profil Penanggung Jawab & Data Perusahaan</h1>
              </div>

              <div className={`p-6 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold mb-1">Nama Penanggung Jawab (PIC)</label>
                    <input type="text" value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Email Perusahaan</label>
                    <input type="email" value={profileData.email} onChange={(e) => setProfileData({...profileData, email: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Nomor WhatsApp</label>
                    <input type="text" value={profileData.whatsapp} onChange={(e) => setProfileData({...profileData, whatsapp: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Nama PT / CV / Perusahaan</label>
                    <input type="text" value={profileData.company} onChange={(e) => setProfileData({...profileData, company: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Nomor NIB OSS RBA</label>
                    <input type="text" value={profileData.nib} onChange={(e) => setProfileData({...profileData, nib: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">KBLI Utama Usaha</label>
                    <input type="text" value={profileData.kbli} onChange={(e) => setProfileData({...profileData, kbli: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1">Alamat Gudang / Kantor Operasional</label>
                  <textarea rows={2} value={profileData.address} onChange={(e) => setProfileData({...profileData, address: e.target.value})} className={`w-full p-3 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                </div>

                <button onClick={() => alert('Profil berhasil diperbarui!')} className="py-3 px-5 font-bold text-xs text-slate-950 bg-teal-400 rounded-xl hover:bg-teal-300">
                  Simpan Perubahan Profil
                </button>
              </div>
            </div>
          )}

          {/* MODULE 9: BANTUAN & FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-6 animate-fadeIn">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h1 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Pusat Bantuan & Panduan Pengajuan</h1>
              </div>

              <div className="space-y-3">
                {[
                  { q: 'Bagaimana cara mengajukan Izin IDAK Kemenkes?', a: 'Pilih menu "Pengajuan Konsultasi", isi data PT/CV Anda, lalu unggah berkas Penanggung Jawab Teknis (PJT) Apoteker dan layout gudang di menu "Upload Dokumen".' },
                  { q: 'Berapa lama verifikasi dokumen oleh tim konsultan?', a: 'Tim konsultan akan memeriksa kelengkapan berkas dalam waktu 1x24 jam kerja sebelum diajukan ke portal e-Report Kemenkes RI.' },
                  { q: 'Bagaimana jika dokumen saya dinyatakan kurang atau perlu revisi?', a: 'Anda akan menerima notifikasi di portal ini. Silakan buka menu "Upload Dokumen" dan unggah ulang berkas sesuai catatan konsultan.' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border space-y-1.5 text-xs ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <h4 className="font-bold text-teal-600 dark:text-teal-400">Q: {item.q}</h4>
                    <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* SERVICE DETAIL MODAL */}
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className={`w-full max-w-xl rounded-2xl p-6 space-y-4 border shadow-2xl overflow-y-auto max-h-[90vh] ${
              isDark ? 'bg-[#0B192C] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="flex justify-between items-start border-b pb-3">
                <div>
                  <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase">{selectedServiceModal.category}</span>
                  <h3 className="font-black text-lg">{selectedServiceModal.title}</h3>
                </div>
                <button onClick={() => setSelectedServiceModal(null)} className="font-bold text-slate-400 p-1 hover:text-white">✕</button>
              </div>

              <p className="text-xs leading-relaxed">{selectedServiceModal.description}</p>

              <div className="grid grid-cols-2 gap-3 text-xs p-3 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <div><strong>Estimasi Waktu:</strong> {selectedServiceModal.est_time}</div>
                <div><strong>Estimasi Biaya:</strong> {selectedServiceModal.est_cost}</div>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-teal-600 dark:text-teal-400">Persyaratan Dokumen Utama:</h4>
                <ul className="space-y-1 pl-4 list-disc">
                  {selectedServiceModal.requirements.map((req: string, i: number) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-teal-600 dark:text-teal-400">4 Tahapan Process Audit:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedServiceModal.steps.map((st: string, i: number) => (
                    <div key={i} className="p-2 rounded-lg border bg-slate-500/5 font-semibold text-[11px]">
                      {i + 1}. {st}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button onClick={() => setSelectedServiceModal(null)} className="px-3 py-2 text-xs font-bold text-slate-400">Tutup</button>
                <button
                  onClick={() => {
                    const svcId = selectedServiceModal.id.toString();
                    setSelectedServiceModal(null);
                    setNewAppForm({ ...newAppForm, service_id: svcId });
                    setActiveTab('new_application');
                  }}
                  className="px-4 py-2 text-xs font-black text-slate-950 bg-teal-400 rounded-xl hover:bg-teal-300"
                >
                  Ajukan Permohonan Ini →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD FOOTER & COPYRIGHT */}
        <footer className={`mt-10 pt-5 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-xs ${
          isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-teal-600 dark:text-teal-400">PT Sentra Medizin Konsultindo</span>
            <span>• Portal Layanan Perizinan Klien</span>
          </div>
          <div className="text-[11px] font-medium">
            © {new Date().getFullYear()} PT Sentra Medizin. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </footer>

      </main>

    </div>
  );
}
