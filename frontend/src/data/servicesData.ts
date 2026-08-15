export interface ServiceRequirement {
  id: number;
  document_name: string;
  description?: string;
  is_mandatory: boolean;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  category: string;
  category_slug: string;
  estimated_time: string;
  estimated_cost: string;
  description: string;
  icon: string;
  is_popular?: boolean;
  requirements: ServiceRequirement[];
}

export const CATEGORIES = [
  { name: 'Semua Layanan', slug: 'all' },
  { name: 'Alkes & PKRT', slug: 'alkes_pkrt' },
  { name: 'Farmasi & Obat', slug: 'farmasi_obat' },
  { name: 'Kosmetik', slug: 'kosmetik' },
  { name: 'Pangan & Sarana', slug: 'pangan_sarana' },
  { name: 'Legalitas & Merek', slug: 'legalitas_merek' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: 'SNI (Standar Nasional Indonesia)',
    slug: 'sni',
    category: 'Legalitas & Merek',
    category_slug: 'legalitas_merek',
    estimated_time: '6 - 12 Bulan',
    estimated_cost: 'Depend on product category',
    description: 'Sertifikasi mutu produk sesuai Standar Nasional Indonesia dari BSN & Lembaga Sertifikasi Produk (LSPro) terakreditasi KAN.',
    icon: 'ShieldCheck',
    is_popular: true,
    requirements: [
      { id: 101, document_name: 'Nama dan Logo Merek Produk', is_mandatory: true },
      { id: 102, document_name: 'Spesifikasi, desain dan manual book produk', is_mandatory: true },
      { id: 103, document_name: 'Foto produk lengkap', is_mandatory: true },
      { id: 104, document_name: 'Bukti pendaftaran Merek atau Sertifikat Merek dari Ditjen HKI', is_mandatory: true },
      { id: 105, document_name: 'Surat permohonan Sertifikasi SNI', is_mandatory: true },
      { id: 106, document_name: 'Akta Pendirian Perusahaan, NIB, NPWP, Perizinan Berusaha (SIUP, IUI, dll)', is_mandatory: true },
      { id: 107, document_name: 'Sertifikat Sistem Manajemen Mutu (ISO 9001) dari Produsen', is_mandatory: true },
      { id: 108, document_name: 'Informasi/Daftar Informasi Terdokumentasi, Fasilitas Produksi, & Peralatan Uji Produsen', is_mandatory: true },
      { id: 109, document_name: 'Daftar Pengendalian Mutu Produk (Rencana Mutu Bahan Baku s.d. Akhir)', is_mandatory: true },
      { id: 110, document_name: 'Ilustrasi pembubuhan tanda SNI', is_mandatory: true },
      { id: 111, document_name: 'Surat Pernyataan Bermaterai jaminan tidak mengedarkan produk sebelum terbit SNI', is_mandatory: true },
      { id: 112, document_name: 'Struktur Organisasi & Proses Bisnis (Interaksi antar Proses)', is_mandatory: true },
      { id: 113, document_name: 'Pengujian Lab Terakreditasi: Uji Fisik & Mekanik, Uji Kimia, Uji Bakar, Uji Kelistrikan', is_mandatory: true }
    ]
  },
  {
    id: 2,
    title: 'SMKPO (Sistem Manajemen Keamanan Pangan Olahan)',
    slug: 'smkpo',
    category: 'Pangan & Sarana',
    category_slug: 'pangan_sarana',
    estimated_time: '20 Hari Kerja',
    estimated_cost: 'Rp 13.000.000',
    description: 'Sertifikasi pemenuhan standar manajemen keamanan pangan olahan pada sarana peredaran, gudang, & fasilitas distribusi BPOM.',
    icon: 'Activity',
    is_popular: false,
    requirements: [
      { id: 201, document_name: 'Surat Pernyataan Pemenuhan Standar SMKPO', is_mandatory: true },
      { id: 202, document_name: 'NIB, NPWP, Akta Pendirian Perusahaan', is_mandatory: true },
      { id: 203, document_name: 'Data Aset Perusahaan (aset tanah, non-tanah/bangunan, total investasi)', is_mandatory: true },
      { id: 204, document_name: 'Dokumen Komitmen & Kebijakan Keamanan Pangan, Dokumen Rencana Keamanan Pangan', is_mandatory: true },
      { id: 205, document_name: 'Struktur Organisasi & Uraian Jabatan Personel', is_mandatory: true },
      { id: 206, document_name: 'Denah Lokasi & Layout Bangunan Sarana Peredaran', is_mandatory: true },
      { id: 207, document_name: 'SOP Lengkap: Audit Internal, Pembersihan & Perawatan Bangunan, Perawatan Peralatan', is_mandatory: true },
      { id: 208, document_name: 'SOP Personel: Pelatihan Personel & Pemeriksaan Kesehatan Personel', is_mandatory: true },
      { id: 209, document_name: 'SOP Logistik: Penerimaan, Penyimpanan & Pengeluaran Barang, Transportasi & Pengangkutan', is_mandatory: true },
      { id: 210, document_name: 'SOP Mutu: Pengendalian Hama, Penanganan Keluhan, Ketertelusuran & Penarikan Produk', is_mandatory: true },
      { id: 211, document_name: 'Spesifikasi Produk Pangan Olahan', is_mandatory: true }
    ]
  },
  {
    id: 3,
    title: 'HALAL (BPJPH / LPPOM MUI)',
    slug: 'halal',
    category: 'Legalitas & Merek',
    category_slug: 'legalitas_merek',
    estimated_time: '2 - 4 Bulan',
    estimated_cost: 'Depend on product category',
    description: 'Pendampingan penetapan Sistem Jaminan Produk Halal (SJPH) & audit LPPOM MUI hingga terbit Sertifikat Halal resmi BPJPH Kemenag.',
    icon: 'Award',
    is_popular: true,
    requirements: [
      { id: 301, document_name: 'Dokumen Legalitas Perusahaan (SK Kemenkumham / NPWP / Akta)', is_mandatory: true },
      { id: 302, document_name: 'Identitas Pemohon / Penanggung Jawab (Email, No HP, e-KTP)', is_mandatory: true },
      { id: 303, document_name: 'Status Sertifikasi (Baru / Pengembangan / Perpanjangan)', is_mandatory: true },
      { id: 304, document_name: 'Data Sertifikat Halal & Status SJH sebelumnya (jika ada)', is_mandatory: false },
      { id: 305, document_name: 'Tipe Produk (Retail / Non-Retail / Keduanya)', is_mandatory: true },
      { id: 306, document_name: 'Data Kapasitas Produksi & Jumlah Karyawan', is_mandatory: true },
      { id: 307, document_name: 'Data Penyelia Halal (SK Penyelia Halal & E-KTP)', is_mandatory: true },
      { id: 308, document_name: 'Manual SJH, Dokumen Proses Produksi, Dokumen Informasi Bahan Baku', is_mandatory: true },
      { id: 309, document_name: 'Statement of Pork-Free Facility (Surat Bebas Babi)', is_mandatory: true },
      { id: 310, document_name: 'Daftar Alamat Fasilitas Produksi, Bukti Sosialisasi, Pelatihan & Audit Internal SJH', is_mandatory: true },
      { id: 311, document_name: 'Izin Usaha Pabrik & Data Kontak Penanggung Jawab Pabrik', is_mandatory: true }
    ]
  },
  {
    id: 4,
    title: 'CPPKRTB (Cara Pembuatan yang Baik PKRT - Manufaktur)',
    slug: 'cppkrtb-manufaktur',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '6 - 12 Bulan',
    estimated_cost: 'Rp 35.000.000',
    description: 'Sertifikasi Cara Pembuatan Perbekalan Kesehatan Rumah Tangga yang Baik untuk industri pabrik disinfektan, pembersih, & PKRT.',
    icon: 'Factory',
    is_popular: false,
    requirements: [
      { id: 401, document_name: 'Legalitas Badan Usaha dan Identitas Perusahaan (NIB KBLI PKRT, Akta, NPWP)', is_mandatory: true },
      { id: 402, document_name: 'Instruksi Kerja & SOP Proses Produksi yang Terdokumentasi', is_mandatory: true },
      { id: 403, document_name: 'Denah Lokasi & Tata Letak Fasilitas Produksi PKRT', is_mandatory: true },
      { id: 404, document_name: 'Dokumen Pengendalian Mutu & Sanitasi Kebersihan', is_mandatory: true },
      { id: 405, document_name: 'Catatan Penerapan Standar Operasional (Logsheet Pembuatan)', is_mandatory: true },
      { id: 406, document_name: 'Sertifikat Pelatihan Penanggung Jawab Teknis (PJT)', is_mandatory: true }
    ]
  },
  {
    id: 5,
    title: 'CPB ALKES (Cara Pembuatan yang Baik Alat Kesehatan)',
    slug: 'cpb-alkes-manufaktur',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '6 - 12 Bulan',
    estimated_cost: 'Rp 35.000.000',
    description: 'Sertifikasi standar CPBAKB untuk industri manufaktur pembuat alat kesehatan dalam negeri sesuai regulasi Kemenkes RI.',
    icon: 'Cpu',
    is_popular: true,
    requirements: [
      { id: 501, document_name: 'Legalitas Badan Usaha dan Identitas Perusahaan (NIB Manufaktur Alkes, Akta, AHU)', is_mandatory: true },
      { id: 502, document_name: 'Instruksi Kerja & SOP Proses Produksi yang Terdokumentasi', is_mandatory: true },
      { id: 503, document_name: 'Denah Lokasi & Tata Letak Fasilitas Produksi (Cleanroom/HVAC)', is_mandatory: true },
      { id: 504, document_name: 'Dokumen Pengendalian Mutu & Kebersihan Bangunan', is_mandatory: true },
      { id: 505, document_name: 'Catatan Penerapan Standar Operasional & Validasi Sterilisasi', is_mandatory: true },
      { id: 506, document_name: 'Sertifikat Pelatihan Penanggung Jawab Teknis (PJT Alkes)', is_mandatory: true }
    ]
  },
  {
    id: 6,
    title: 'IDAK (Izin Distributor Alat Kesehatan)',
    slug: 'idak',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '1 - 2 Bulan',
    estimated_cost: 'Rp 15.000.000',
    description: 'Penerbitan Izin Distributor Alat Kesehatan (IDAK) dari Kementerian Kesehatan untuk perusahaan penyalur alkes resmi.',
    icon: 'Truck',
    is_popular: true,
    requirements: [
      { id: 601, document_name: 'Surat Permohonan & Surat Keaslian Dokumen', is_mandatory: true },
      { id: 602, document_name: 'Surat Pernyataan Komitmen CDAKB', is_mandatory: true },
      { id: 603, document_name: 'Surat Kepemilikan / Sewa Kantor & Gudang, Denah/Layout, Foto Area Gudang & Daftar Perlengkapan Gudang', is_mandatory: true },
      { id: 604, document_name: 'Daftar & Brosur Alat Kesehatan yang Disalurkan', is_mandatory: true },
      { id: 605, document_name: 'Data PJT (Penanggung Jawab Teknis: Ijazah, KTP, STRA/SIP) & Struktur Organisasi', is_mandatory: true },
      { id: 606, document_name: 'Data Teknisi & Surat Jaminan Purna Jual (khusus Alkes Elektromedik)', is_mandatory: false },
      { id: 607, document_name: 'Surat Kerjasama Bengkel & Scan SDAK / Sertifikat Produksi Rekanan (jika bekerjasama)', is_mandatory: false },
      { id: 608, document_name: 'Uraian Tugas Pimpinan & PJT, Rencana Operasional & Surat Pernyataan Kesiapan, SOP Distribusi, NIB', is_mandatory: true }
    ]
  },
  {
    id: 7,
    title: 'CDAKB (Cara Distribusi Alat Kesehatan yang Baik)',
    slug: 'cdakb-distributor',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '6 - 12 Bulan',
    estimated_cost: 'Rp 35.000.000',
    description: 'Sertifikat wajib pemenuhan sistem mutu distribusi alat kesehatan bagi pemegang izin IDAK sesuai audit Kemenkes RI.',
    icon: 'CheckCircle2',
    is_popular: false,
    requirements: [
      { id: 701, document_name: 'Legalitas Badan Usaha dan Identitas Perusahaan (IDAK, NIB, Akta)', is_mandatory: true },
      { id: 702, document_name: 'Instruksi Kerja & SOP Distribusi yang Terdokumentasi (13 Bab Mutu)', is_mandatory: true },
      { id: 703, document_name: 'Denah Lokasi & Tata Letak Fasilitas Penyimpanan Gudang', is_mandatory: true },
      { id: 704, document_name: 'Dokumen Pengendalian Mutu & Kebersihan Sarana', is_mandatory: true },
      { id: 705, document_name: 'Catatan Penerapan Standar Operasional & Log Suhu', is_mandatory: true },
      { id: 706, document_name: 'Penanggung Jawab Teknis (Telah Mengikuti Pelatihan CDAKB Resmi)', is_mandatory: true }
    ]
  },
  {
    id: 8,
    title: 'IZIN EDAR ALAT KESEHATAN (ALKES) KEMENKES',
    slug: 'izin-edar-alkes',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '1 - 3 Bulan',
    estimated_cost: 'Rp 10.000.000',
    description: 'Pengurusan Izin Edar resmi Kemenkes RI (AKD/AKL) untuk produk Alat Kesehatan lokal maupun impor agar legal diperjualbelikan.',
    icon: 'FileCheck',
    is_popular: true,
    requirements: [
      { id: 801, document_name: 'NIB, SIUP, Penanggung Jawab Teknis (PJT), Paten Merek', is_mandatory: true },
      { id: 802, document_name: 'Surat Pernyataan Keaslian Dokumen, Pakta Integritas, & Surat Pernyataan Notifikasi', is_mandatory: true },
      { id: 803, document_name: 'Formula Kualitatif/Kuantitatif & Fungsi Tiap Bahan, Prosedur Pembuatan Singkat', is_mandatory: true },
      { id: 804, document_name: 'Spesifikasi Bahan Baku & Sertifikat Uji Lab Bahan Baku', is_mandatory: true },
      { id: 805, document_name: 'Spesifikasi Kemasan & Prosedur Pemeriksaan Produk Jadi, Hasil Uji Produk, Uji Stabilitas / Kadaluwarsa', is_mandatory: true },
      { id: 806, document_name: 'Petunjuk Penggunaan, Peringatan, Contoh Kode Produksi, Rancangan Etiket/Brosur', is_mandatory: true },
      { id: 807, document_name: 'Sertifikat ISO 9001 / ISO 13485 / ISO 14001', is_mandatory: true },
      { id: 808, document_name: 'Khusus Impor: Wajib melampirkan LoA (Letter of Authorization), CFS (Certificate of Free Sale), dan GMP Certificate', is_mandatory: false }
    ]
  },
  {
    id: 9,
    title: 'IZIN EDAR PRODUK PKRT KEMENKES',
    slug: 'izin-edar-pkrt',
    category: 'Alkes & PKRT',
    category_slug: 'alkes_pkrt',
    estimated_time: '1 - 3 Bulan',
    estimated_cost: 'Rp 7.000.000',
    description: 'Pendaftaran Izin Edar Kemenkes RI (PKD/PKL) untuk Perbekalan Kesehatan Rumah Tangga (pembersih, disinfektan, tisu basah, dll).',
    icon: 'Sparkles',
    is_popular: false,
    requirements: [
      { id: 901, document_name: 'NIB, SIUP, Penanggung Jawab Teknis, Paten Merek', is_mandatory: true },
      { id: 902, document_name: 'Surat Pernyataan Keaslian Dokumen, Pakta Integritas, & Surat Pernyataan Notifikasi', is_mandatory: true },
      { id: 903, document_name: 'Formula Kualitatif/Kuantitatif & Fungsi Bahan, Prosedur Pembuatan', is_mandatory: true },
      { id: 904, document_name: 'Spesifikasi Bahan Baku & Sertifikat Uji Lab Bahan Baku (MSDS)', is_mandatory: true },
      { id: 905, document_name: 'Spesifikasi Wadah Kemasan & Tutup, Hasil Uji Produk, Spesifikasi & Prosedur Uji Produk Jadi, Stabilitas', is_mandatory: true },
      { id: 906, document_name: 'Petunjuk Penggunaan, Contoh Kode Produksi, Rancangan Penandaan/Etiket/Brosur', is_mandatory: true },
      { id: 907, document_name: 'Khusus Impor: Wajib melampirkan LoA, CFS, dan GMP Produsen Asal', is_mandatory: false }
    ]
  },
  {
    id: 10,
    title: 'IZIN PEDAGANG BESAR FARMASI (PBF)',
    slug: 'izin-pbf',
    category: 'Farmasi & Obat',
    category_slug: 'farmasi_obat',
    estimated_time: '1 - 2 Bulan',
    estimated_cost: 'Rp 15.000.000',
    description: 'Pengurusan Izin Usaha Pedagang Besar Farmasi (PBF) Pusat atau Cabang dari Kementerian Kesehatan RI & Dinas Kesehatan.',
    icon: 'Building2',
    is_popular: true,
    requirements: [
      { id: 1001, document_name: 'NIB KBLI 46441, NPWP, Akta Pendirian Perusahaan PT', is_mandatory: true },
      { id: 1002, document_name: 'KTP/Paspor & Tanda Tangan Digital Direktur / Pimpinan Perusahaan', is_mandatory: true },
      { id: 1003, document_name: 'KTP/Paspor, Ijazah, STRA, & SIPA (atau Bukti Permohonan SIPA) Apoteker Penanggung Jawab Teknis', is_mandatory: true },
      { id: 1004, document_name: 'Dokumen Kepemilikan / Sewa Kantor & Gudang (Minimal 5 Tahun), Denah Sarana Kantor & Gudang PBF', is_mandatory: true },
      { id: 1005, document_name: 'Struktur Organisasi & Jobdesk Karyawan Terlengkap', is_mandatory: true }
    ]
  },
  {
    id: 11,
    title: 'IZIN EDAR KOSMETIK BPOM (IMPORT & DALAM NEGERI)',
    slug: 'izin-edar-kosmetik-bpom',
    category: 'Kosmetik',
    category_slug: 'kosmetik',
    estimated_time: '1 Bulan',
    estimated_cost: 'Rp 10.000.000',
    description: 'Pengurusan Notifikasi Izin Edar BPOM RI (NA) untuk produk skincare, makeup, & kosmetik impor maupun produksi lokal.',
    icon: 'HeartHandshake',
    is_popular: true,
    requirements: [
      { id: 1101, document_name: 'Identitas Direktur & Penanggung Jawab, Dokumen Perusahaan Lengkap (Akta, SK, NPWP, NIB)', is_mandatory: true },
      { id: 1102, document_name: 'Sertifikat CPKB / Hasil Audit Audit Pemeriksaan Sarana (PSB BPOM)', is_mandatory: true },
      { id: 1103, document_name: 'Dokumen Pabrik, Dokumen Bahan Baku (CAS Number & Inci Name), Dokumen Produk (Klaim Label, Komposisi, Proses Pengolahan, Kemasan)', is_mandatory: true },
      { id: 1104, document_name: 'Produk Dalam Negeri: Hasil Uji Lab (risiko sedang/tinggi), Formula, Masa Simpan, Izin Usaha (IUI/IUMK/SKDU)', is_mandatory: true },
      { id: 1105, document_name: 'Produk Impor: Izin Usaha (API/SIUP/IT), CFS / Health Certificate, LoA, Sertifikat GMP/ISO 22000/HACCP, Foto & Label Terjemahan', is_mandatory: false }
    ]
  },
  {
    id: 12,
    title: 'REKOMENDASI IMPORTIR OBAT BAHAN ALAM, SUPLEMEN KESEHATAN, DAN OBAT KUASI (OBAOKSK)',
    slug: 'rekomendasi-importir-obaoksk',
    category: 'Farmasi & Obat',
    category_slug: 'farmasi_obat',
    estimated_time: '2 - 3 Bulan',
    estimated_cost: 'Rp 35.000.000',
    description: 'Penerbitan Rekomendasi Resmi Balai BPOM untuk Perusahaan Importir Herbal, Suplemen Kesehatan, & Obat Kuasi dari Luar Negeri.',
    icon: 'Globe2',
    is_popular: false,
    requirements: [
      { id: 1201, document_name: 'Daftar Jenis Produk OBAOKSK & Dokumen Alur Rencana Distribusi', is_mandatory: true },
      { id: 1202, document_name: 'Prosedur Pengadaan, Penerimaan, Penyimpanan, Pengeluaran & Pengiriman Barang', is_mandatory: true },
      { id: 1203, document_name: 'Perjanjian Kerjasama Pimpinan dengan PJT & Surat Pernyataan PJT Bekerja Penuh Waktu', is_mandatory: true },
      { id: 1204, document_name: 'Surat Pernyataan Kepatuhan Standar Penyaluran, PAD/PNBP, & Produk Berizin Edar', is_mandatory: true },
      { id: 1205, document_name: 'Surat Permohonan Sertifikat Standar PBOBA', is_mandatory: true },
      { id: 1206, document_name: 'KKKPR & SPPL yang telah ditandatangani Pimpinan', is_mandatory: true },
      { id: 1207, document_name: 'Kontrak / Penunjukan dari Produsen Negara Asal (LoA), Sertifikat GMP Produsen Asal, Spesifikasi Suhu Penyimpanan', is_mandatory: true },
      { id: 1208, document_name: 'Surat Pernyataan Pelaporan ke BPOM jika Pindah/Tambah Alamat', is_mandatory: true },
      { id: 1209, document_name: 'Foto Produk / Kemasan Asli & Set Lengkap Prosedur Pergudangan (Sanitasi, Hama, Recall, Pemusnahan, Sampel Pertinggal)', is_mandatory: true }
    ]
  },
  {
    id: 13,
    title: 'IZIN EDAR OBAT BAHAN ALAM, SUPLEMEN KESEHATAN, DAN OBAT KUASI',
    slug: 'izin-edar-oba-suplemen',
    category: 'Farmasi & Obat',
    category_slug: 'farmasi_obat',
    estimated_time: '3 - 6 Bulan',
    estimated_cost: 'Rp 50.000.000',
    description: 'Pendaftaran Izin Edar BPOM RI (POM TR / POM SI) untuk produk obat herbal tradisional, suplemen vitamin, & obat kuasi.',
    icon: 'Pill',
    is_popular: true,
    requirements: [
      { id: 1301, document_name: 'A. Pra-Registrasi: Formula Master, Surat Kuasa Petugas Registrasi, Surat Tanggung Jawab Keabsahan Dokumen, CFS/CPP Dilegalisir KBRI/Konjen, Surat Penunjukan Keagenan (LoA)', is_mandatory: true },
      { id: 1302, document_name: 'B. Registrasi: Formulir Identitas Produk & Produsen, Dokumen Pembuatan, CoA & Spesifikasi Bahan Baku dan Produk Jadi', is_mandatory: true },
      { id: 1303, document_name: 'Protokol & Uji Stabilitas (Real-time & Accelerated), Uji Fisik/Kimia', is_mandatory: true },
      { id: 1304, document_name: 'Uji Cemaran (Mikrobiologi, Logam Berat, BKO), Uji Kandungan Senyawa, Klaim Khasiat', is_mandatory: true },
      { id: 1305, document_name: 'Sistem Nomor Bets, Sampel Asli & Rancangan Desain Kemasan Berwarna', is_mandatory: true }
    ]
  },
  {
    id: 14,
    title: 'CDOB (Cara Distribusi Obat yang Baik - Obat Kimia)',
    slug: 'cdob-obat-kimia',
    category: 'Farmasi & Obat',
    category_slug: 'farmasi_obat',
    estimated_time: 'Konfirmasi Lanjutan',
    estimated_cost: 'Rp 35.000.000',
    description: 'Sertifikasi Manajemen Mutu Distribusi CDOB BPOM untuk fasilitas Pedagang Besar Farmasi (PBF) penyalur obat kimia.',
    icon: 'ShieldAlert',
    is_popular: false,
    requirements: [
      { id: 1401, document_name: 'Surat Izin PBF / Pengakuan PBF', is_mandatory: true },
      { id: 1402, document_name: 'SIPA Penanggung Jawab Apoteker Aktif', is_mandatory: true },
      { id: 1403, document_name: 'Denah Lokasi & Layout Bangunan sesuai Izin PBF', is_mandatory: true },
      { id: 1404, document_name: 'Data Produk yang Didistribusikan, Struktur Organisasi, Jobdesk Personalia', is_mandatory: true },
      { id: 1405, document_name: 'Daftar Peralatan/Perlengkapan Sarana Penyimpanan (Cold Chain / Chiller)', is_mandatory: true },
      { id: 1406, document_name: 'Quality Management System (Ringkasan Eksekutif Penerapan Aspek CDOB) & Dokumen Self-Assessment', is_mandatory: true }
    ]
  },
  {
    id: 15,
    title: 'REKOMENDASI IMPORTIR KOSMETIK',
    slug: 'rekomendasi-importir-kosmetik',
    category: 'Kosmetik',
    category_slug: 'kosmetik',
    estimated_time: 'Konfirmasi Lanjutan',
    estimated_cost: 'Rp 15.000.000',
    description: 'Pemeriksaan sarana & penerbitan Surat Rekomendasi Importir Kosmetik dari Balai Besar BPOM sebagai syarat notifikasi.',
    icon: 'FileBadge',
    is_popular: false,
    requirements: [
      { id: 1501, document_name: 'NIB, Surat Pernyataan Direksi Tidak Terlibat Tindak Pidana Kosmetik', is_mandatory: true },
      { id: 1502, document_name: 'Perjanjian Kerjasama Pimpinan dengan PJT, KTP & Ijazah PJT (Apoteker/Farmasi)', is_mandatory: true },
      { id: 1503, document_name: 'Denah Lokasi & Layout Bangunan Sarana Impor Kosmetik', is_mandatory: true },
      { id: 1504, document_name: 'Kartu Stok & Set SOP Lengkap (Penerimaan/Penyimpanan/Pengeluaran, Keluhan, Penarikan/Pemusnahan, Sampel Pertinggal, Sanitasi, Pengendalian Hama)', is_mandatory: true }
    ]
  },
  {
    id: 16,
    title: 'SURAT KETERANGAN IMPOR (SKI) BPOM',
    slug: 'ski-bpom',
    category: 'Farmasi & Obat',
    category_slug: 'farmasi_obat',
    estimated_time: '10 Hari Kerja',
    estimated_cost: 'Rp 1.000.000',
    description: 'Pengurusan Dokumen Pengeluaran Barang Impor (SKI BPOM Border / Non-Border) di Customs / Bea Cukai untuk Kosmetik, Obat, & Suplemen.',
    icon: 'FileText',
    is_popular: false,
    requirements: [
      { id: 1601, document_name: 'Persetujuan Izin Edar Produk (NIE BPOM / Kemenkes)', is_mandatory: true },
      { id: 1602, document_name: 'Faktur / Commercial Invoice & Packing List', is_mandatory: true },
      { id: 1603, document_name: 'Sertifikat Analisis (CoA) Produk Jadi Per Batch/Lot', is_mandatory: true }
    ]
  },
  {
    id: 17,
    title: 'PENDAFTARAN MEREK (Ditjen HKI)',
    slug: 'pendaftaran-merek-hki',
    category: 'Legalitas & Merek',
    category_slug: 'legalitas_merek',
    estimated_time: '1 Hari Kerja (Formulir) / 1 - 2 Tahun (Sertifikat)',
    estimated_cost: 'Rp 5.000.000',
    description: 'Pendaftaran Perlindungan Hak Kekayaan Intelektual (HKI) Merek Dagang & Logo ke Direktorat Jenderal HKI Kemenkumham RI.',
    icon: 'Shield',
    is_popular: true,
    requirements: [
      { id: 1701, document_name: 'NPWP Perusahaan & NPWP Direktur', is_mandatory: true },
      { id: 1702, document_name: 'KTP Direktur / Penanggung Jawab', is_mandatory: true },
      { id: 1703, document_name: 'Nama Merek & File Logo dalam format PDF (Resolusi Tinggi)', is_mandatory: true },
      { id: 1704, document_name: 'Nama Pemilik Logo & Klasifikasi Bidang Usaha (Kelas Merek Nice Classification)', is_mandatory: true },
      { id: 1705, document_name: 'Nomor HP & Email Resmi Perusahaan', is_mandatory: true },
      { id: 1706, document_name: 'Tanda Tangan Direktur di atas Kertas Putih', is_mandatory: true }
    ]
  }
];

export const FAQS_DATA = [
  {
    id: 1,
    question: 'Apakah PT Sentra Medizin mendampingi proses hingga Izin / Sertifikat resmi terbit?',
    answer: 'Ya, kami memberikan pendampingan secara end-to-end. Mulai dari audit kesiapan awal (gap analysis), penyusunan dokumen teknis & SOP, pengajuan portal resmi pemerintah (OSS RBA, E-Akustik, E-BPOM, SIMPONI), hingga pendampingan saat audit lapangan oleh tim verifikator Kemenkes / BPOM.'
  },
  {
    id: 2,
    question: 'Berapa lama proses sertifikasi CDAKB / CPB / IDAK biasanya berlangsung?',
    answer: 'Durasi bergantung pada jenis izin dan kesiapan dokumen awal perusahaan. Untuk IDAK umumnya 1-2 bulan, sedangkan sertifikasi CDAKB & CPB Manufaktur membutuhkan waktu 6-12 bulan karena mencakup verifikasi denah bangunan, SOP 13 bab, & verifikasi lapangan.'
  },
  {
    id: 3,
    question: 'Bagaimana jika saat audit lapangan terdapat temuan (CAPA)?',
    answer: 'Tim ahli PT Sentra Medizin akan membantu menyusun dokumen Corrective Action Preventive Action (CAPA) dan mendampingi jawaban perbaikan hingga temuan dinyatakan selesai (closed) oleh Kemenkes / BPOM.'
  },
  {
    id: 4,
    question: 'Apakah biaya konsultasi & pengurusan sudah termasuk penerbitan izin resmi?',
    answer: 'Estimasi biaya paket profesional kami mencakup jasa konsul penuh, penyusunan SOP, pengawalan portal, & garansi pendampingan revisi. Biaya PNBP (Penerimaan Negara Bukan Pajak) resmi dari pemerintah ditransparansikan secara terpisah sesuai tagihan billing resmi.'
  },
  {
    id: 5,
    question: 'Bagaimana cara memulai konsultasi perizinan untuk perusahaan saya?',
    answer: 'Anda dapat mengisi Form Konsultasi Interaktif di website ini atau langsung mengklik tombol WhatsApp Direct untuk langsung terhubung dengan Konsultan Regulasi Senior PT Sentra Medizin.'
  }
];
