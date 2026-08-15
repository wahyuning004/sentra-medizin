<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceRequirement;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'SNI (Standar Nasional Indonesia)',
                'slug' => 'sni',
                'category' => 'Standardisasi & HKI',
                'category_slug' => 'hki',
                'estimated_time' => '6-12 Bulan',
                'estimated_cost' => 'Depend on category',
                'description' => 'Sertifikasi Standar Nasional Indonesia untuk memastikan produk alat kesehatan/industri memenuhi spesifikasi keselamatan, kesehatan, dan mutu teknis KAN.',
                'icon_name' => 'ShieldCheck',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB (Nomor Induk Berusaha)', 'description' => 'NIB Berbasis Risiko (OSS RBA) sesuai KBLI Industri/Manufaktur', 'is_mandatory' => true],
                    ['document_name' => 'Akta Pendirian Perusahaan & AHU', 'description' => 'Akta PT/CV beserta SK Pengesahan Kemenkumham', 'is_mandatory' => true],
                    ['document_name' => 'Manual Sistem Manajemen Mutu (ISO 9001)', 'description' => 'Dokumentasi Sistem Manajemen Mutu pabrik/manufaktur', 'is_mandatory' => true],
                    ['document_name' => 'Flowchart Diagram Alir Proses Produksi', 'description' => 'Bagan alur proses produksi dari bahan baku hingga barang jadi', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat Merek (Daftar HKI)', 'description' => 'Bukti pendaftaran atau sertifikat merek dari Ditjen HKI', 'is_mandatory' => true],
                    ['document_name' => 'Hasil Uji Laboratorium Terakreditasi KAN', 'description' => 'Laporan hasil uji produk dari laboratorium independen KAN', 'is_mandatory' => true],
                    ['document_name' => 'Spesifikasi Teknis & Catalog Sheet Produk', 'description' => 'Lembar spesifikasi fisik, kimia, dan fungsional produk', 'is_mandatory' => false]
                ]
            ],
            [
                'title' => 'SMKPO (Sistem Manajemen Keselamatan Penyelenggaraan Obat)',
                'slug' => 'smkpo',
                'category' => 'Farmasi & CDOB',
                'category_slug' => 'farmasi',
                'estimated_time' => '20 Hari Kerja',
                'estimated_cost' => 'Rp 13.000.000',
                'description' => 'Sertifikasi implementasi manajemen keselamatan pengelolaan obat untuk fasilitas pelayanan kefarmasian dan Pedagang Besar Farmasi (PBF).',
                'icon_name' => 'Activity',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'NIB & Izin Usaha Farmasi / PBF', 'description' => 'Izin Operasional PBF / Fasilitas Pelayanan Farmasi aktif', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen APJ (Apoteker Penanggung Jawab)', 'description' => 'STRA, SIPA, dan Surat Pengangkatan APJ', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen Penilaian Mandiri (Self-Assessment) SMKPO', 'description' => 'Formulir evaluasi mandiri SMKPO sesuai pedoman BPOM', 'is_mandatory' => true],
                    ['document_name' => 'SOP Pemantauan Suhu & Penyimpanan Obat', 'description' => 'SOP lengkap pengelolaan obat, penyimpanan, dan rantai dingin', 'is_mandatory' => true],
                    ['document_name' => 'Denah Bangunan & Monitoring Suhu Area Penyimpanan', 'description' => 'Layout fisik gudang/farmasi dan lokasi sensor thermo-hygrometer', 'is_mandatory' => true],
                    ['document_name' => 'Bukti Pelatihan Karyawan mengenai CPOB/CDOB', 'description' => 'Sertifikat pelatihan internal/eksternal staf kefarmasian', 'is_mandatory' => false]
                ]
            ],
            [
                'title' => 'Sertifikasi Halal (BPJPH & LPPOM)',
                'slug' => 'sertifikasi-halal',
                'category' => 'Standardisasi & HKI',
                'category_slug' => 'hki',
                'estimated_time' => '2-4 Bulan',
                'estimated_cost' => 'Depend on category',
                'description' => 'Pendampingan lengkap penetapan Sistem Jaminan Produk Halal (SJPH) hingga terbit Sertifikat Halal resmi dari BPJPH Kemenag.',
                'icon_name' => 'Award',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB & Data Pelaku Usaha', 'description' => 'Dokumen legaliat usaha dari OSS RBA', 'is_mandatory' => true],
                    ['document_name' => 'Manual SJPH (Sistem Jaminan Produk Halal)', 'description' => 'Dokumen kriteria Sistem Jaminan Produk Halal perusahaan', 'is_mandatory' => true],
                    ['document_name' => 'Matriks Nama Bahan & Sertifikat Halal Bahan', 'description' => 'Daftar seluruh bahan baku, bahan penolong, dan sertifikat halalnya', 'is_mandatory' => true],
                    ['document_name' => 'Matriks Produk & Flowchart Proses Produksi Halal', 'description' => 'Alur proses pembuatan produk yang terjamin bebas dari najis', 'is_mandatory' => true],
                    ['document_name' => 'Surat Penetapan Tim Manajemen Halal & Penyelia Halal', 'description' => 'SK Penyelia Halal beragama Islam dilengkapi sertifikat pelatihan/SK', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'CPPKRTB Manufaktur (Cara Pembuatan PKRT yang Baik)',
                'slug' => 'cppkrtb-manufaktur',
                'category' => 'PKRT',
                'category_slug' => 'pkrt',
                'estimated_time' => '6-12 Bulan',
                'estimated_cost' => 'Rp 35.000.000',
                'description' => 'Sertifikat pemenuhan standar produksi Perbekalan Kesehatan Rumah Tangga (PKRT) untuk pabrik manufaktur pembuat alat kebersihan, disinfektan, & PKRT.',
                'icon_name' => 'Factory',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'NIB RBA KBLI Manufaktur PKRT (Risiko Tinggi)', 'description' => 'NIB dengan KBLI industri PKRT sesuai ruang lingkup', 'is_mandatory' => true],
                    ['document_name' => 'Denah Ruang Produksi Disetujui Kemenkes', 'description' => 'Layout fisik pabrik yang telah dikaji / persetujuan denah Kemenkes', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen PJT (Penanggung Jawab Teknis)', 'description' => 'IJAZAH S-1 Kimia/Apoteker/Biologi/Teknik Kimia + STR/Surat Ikatan Kerja', 'is_mandatory' => true],
                    ['document_name' => 'Master Validation Plan & SOP Pembuatan', 'description' => 'Dokumen SOP validasi proses, pembersihan, dan produksi', 'is_mandatory' => true],
                    ['document_name' => 'Hasil Uji Evaluasi Penanganan Limbah Industri', 'description' => 'Izin Lingkungan (SPPL/UKL-UPL) dan hasil uji limbah', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'CPB Alkes Manufaktur (Cara Pembuatan Alkes yang Baik)',
                'slug' => 'cpb-alkes-manufaktur',
                'category' => 'Alat Kesehatan',
                'category_slug' => 'alkes',
                'estimated_time' => '6-12 Bulan',
                'estimated_cost' => 'Rp 35.000.000',
                'description' => 'Sertifikat sertifikasi standar CPBAKB untuk pabrik produsen/manufaktur alat kesehatan lokal di Indonesia.',
                'icon_name' => 'Cpu',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB KBLI Industri Alat Kesehatan', 'description' => 'NIB industri manufaktur alkes dari OSS RBA', 'is_mandatory' => true],
                    ['document_name' => 'Denah Bangunan Pabrik & Cleanroom (AHU / HVAC)', 'description' => 'Layout ruang produksi steril / non-steril dengan spesifikasi air-flow', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat ISO 13485 (Sistem Mutu Alkes)', 'description' => 'Implementasi / Sertifikat Sistem Manajemen Mutu Alkes ISO 13485', 'is_mandatory' => true],
                    ['document_name' => 'PJT Alkes (Apoteker / Sarjana Tek. Medis / Elektromedis)', 'description' => 'Kualifikasi PJT beserta SIP / SIK aktif', 'is_mandatory' => true],
                    ['document_name' => 'Laporan Validasi Proses & Sterilisasi Produk', 'description' => 'Laporan validasi mesin, sterilisasi ETO/Gamma/Autoclave jika ada', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'IDAK (Izin Distribusi Alat Kesehatan)',
                'slug' => 'idak',
                'category' => 'Alat Kesehatan',
                'category_slug' => 'alkes',
                'estimated_time' => '1-2 Bulan',
                'estimated_cost' => 'Rp 15.000.000',
                'description' => 'Izin dasar operasional perusahaan Distributor/Penyalur Alat Kesehatan (PAB) untuk dapat menyalurkan alkes resmi di Indonesia.',
                'icon_name' => 'Truck',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB KBLI Perdagangan Alkes (46691 / 46692)', 'description' => 'NIB Distributor Besar Alat Kesehatan', 'is_mandatory' => true],
                    ['document_name' => 'Akta Pendirian & Pengesahan Kemenkumham', 'description' => 'Legaliat badan usaha PT / CV', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen PJT (Penanggung Jawab Teknis)', 'description' => 'Ijazah PJT (Apoteker/S1 Farmasi/Teknik Elektromedis/K3/Biologi) & Surat Perjanjian Kerja', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat Kepemilikan / Sewa Gudang (Min. 2 Tahun)', 'description' => 'Bukti fisik gudang aman, bebas banjir, & bebas hama', 'is_mandatory' => true],
                    ['document_name' => 'Denah & Photo Gudang Distribusi', 'description' => 'Layout area penerimaan, penyimpanan, karantina, & pengiriman', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'CDAKB Distributor (Cara Distribusi Alkes yang Baik)',
                'slug' => 'cdakb-distributor',
                'category' => 'Alat Kesehatan',
                'category_slug' => 'alkes',
                'estimated_time' => '6-12 Bulan',
                'estimated_cost' => 'Rp 35.000.000',
                'description' => 'Sertifikat wajib kelayakan sistem mutu distribusi alat kesehatan untuk pemegang IDAK sesuai Permenkes.',
                'icon_name' => 'CheckCircle2',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'Izin IDAK / Penyalur Alkes Aktif', 'description' => 'Surat Izin Distribusi Alat Kesehatan terdaftar', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen Self-Assessment Evaluasi CDAKB 13 Bab', 'description' => 'Evaluasi kesiapan 13 aspek Sistem Mutu Distribusi Alkes', 'is_mandatory' => true],
                    ['document_name' => 'Dokumentasi Monitoring Suhu & Kelembaban Gudang', 'description' => 'Log book harian thermo-hygrometer di area penyimpanan', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat Kalibrasi Alat Ukur Gudang', 'description' => 'Kalibrasi terakreditasi KAN untuk termometer / hygro', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Izin Edar Alkes Kemenkes (Lokal & Impor)',
                'slug' => 'izin-edar-alkes',
                'category' => 'Alat Kesehatan',
                'category_slug' => 'alkes',
                'estimated_time' => '1-3 Bulan',
                'estimated_cost' => 'Rp 10.000.000',
                'description' => 'Penerbitan Nomor Izin Edar (NIE) Kemenkes RI untuk Produk Alat Kesehatan lokal maupun impor agar legal diperjualbelikan.',
                'icon_name' => 'FileCheck',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'Sertifikat IDAK / CDAKB Perusahaan', 'description' => 'Izin distributor alkes aktif milik pendaftar', 'is_mandatory' => true],
                    ['document_name' => 'Letter of Authorization (LoA) dari Manufacturer', 'description' => 'Surat kuasa penunjukan distributor resmi yang disahkan Notaris/Kedutaan (untuk Impor)', 'is_mandatory' => true],
                    ['document_name' => 'Certificate of Free Sale (CFS)', 'description' => 'Sertifikat Bebas Jual dari instansi berwenang negara asal', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat ISO 13485 Pabrik Pembuat', 'description' => 'Sertifikat Sistem Mutu Produsen Alkes', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Izin Edar Produk PKRT Kemenkes',
                'slug' => 'izin-edar-pkrt',
                'category' => 'PKRT',
                'category_slug' => 'pkrt',
                'estimated_time' => '1-3 Bulan',
                'estimated_cost' => 'Rp 7.000.000',
                'description' => 'Pendaftaran Nomor Izin Edar Kemenkes RI untuk produk Perbekalan Kesehatan Rumah Tangga.',
                'icon_name' => 'Sparkles',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'NIB & Sertifikat Standar / CPPKRTB', 'description' => 'Izin operasional / sertifikat sarana produksi PKRT', 'is_mandatory' => true],
                    ['document_name' => 'Formula & Komposisi Kimia (MSDS / SDS)', 'description' => 'Lembar data keselamatan bahan & persentase zat aktif', 'is_mandatory' => true],
                    ['document_name' => 'Hasil Uji Efektivitas & Uji Iritasi Lab Terakreditasi', 'description' => 'Laporan hasil pengujian daya bunuh kuman / keamanan kulit', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Izin PBF (Pedagang Besar Farmasi - Pusat / Cabang)',
                'slug' => 'izin-pbf',
                'category' => 'Farmasi & CDOB',
                'category_slug' => 'farmasi',
                'estimated_time' => '1-2 Bulan',
                'estimated_cost' => 'Rp 15.000.000',
                'description' => 'Pengurusan Izin Operasional Perusahaan Pedagang Besar Farmasi (PBF) Pusat atau Cabang dari Kemenkes & Dinas Kesehatan.',
                'icon_name' => 'Building2',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB KBLI 46441 (Perdagangan Besar Farmasi)', 'description' => 'NIB dari OSS RBA dengan status KBLI PBF', 'is_mandatory' => true],
                    ['document_name' => 'Akta Pendirian PT & Pengesahan AHU', 'description' => 'Akta pendirian badan usaha khusus PT', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen Apoteker Penanggung Jawab (APJ)', 'description' => 'Ijazah Apoteker, STRA aktif, Rekomendasi IAI, & SIPA', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Izin Edar Kosmetik BPOM (Notifikasi Kosmetik)',
                'slug' => 'izin-edar-kosmetik-bpom',
                'category' => 'Kosmetik',
                'category_slug' => 'kosmetik',
                'estimated_time' => '1 Bulan',
                'estimated_cost' => 'Rp 10.000.000',
                'description' => 'Pengurusan Notifikasi Izin Edar BPOM RI untuk produk perawatan kulit, makeup, dan kosmetika.',
                'icon_name' => 'HeartHandshake',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'NIB & KBLI Industri / Impor Kosmetik', 'description' => 'NIB aktif dari sistem OSS RBA', 'is_mandatory' => true],
                    ['document_name' => 'Sertifikat CPKB / Rekomendasi Fasilitas BPOM', 'description' => 'Sertifikat Cara Pembuatan Kosmetika yang Baik', 'is_mandatory' => true],
                    ['document_name' => 'Dokumen Informasi Produk (DIP / PIF)', 'description' => 'Product Information File berisi data teknis & keamanan', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Rekomendasi Importir Obat Bahan Alam (Obat Tradisional)',
                'slug' => 'rekomendasi-importir-oba',
                'category' => 'Herbal & Suplemen',
                'category_slug' => 'herbal',
                'estimated_time' => '2-3 Bulan',
                'estimated_cost' => 'Rp 35.000.000',
                'description' => 'Rekomendasi resmi BPOM untuk perusahaan impor yang akan memasukkan produk obat bahan alam / herbal.',
                'icon_name' => 'Globe2',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'NIB Importir KBLI Perdagangan Obat Tradisional', 'description' => 'NIB OSS RBA dengan hak akses kepabeanan', 'is_mandatory' => true],
                    ['document_name' => 'GMP Certificate / Sertifikat CPOTB Pabrik Luar Negeri', 'description' => 'Sertifikat standar produksi manufaktur dari otoritas setempat', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Izin Edar Obat Bahan Alam & Suplemen BPOM',
                'slug' => 'izin-edar-oba-suplemen',
                'category' => 'Herbal & Suplemen',
                'category_slug' => 'herbal',
                'estimated_time' => '3-6 Bulan',
                'estimated_cost' => 'Rp 50.000.000',
                'description' => 'Pendaftaran Nomor Izin Edar (NIE) BPOM RI (POM TR / POM SI) untuk produk herbal & suplemen.',
                'icon_name' => 'Pill',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'Rekomendasi Importir / Sertifikat CPOTB Lokal', 'description' => 'Izin sarana produksi atau rekomendasi importir BPOM', 'is_mandatory' => true],
                    ['document_name' => 'Laporan Uji Stabilitas Produk', 'description' => 'Hasil uji masa simpan (shelf-life) produk', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'CDOB Obat Kimia (Cara Distribusi Obat yang Baik)',
                'slug' => 'cdob-obat-kimia',
                'category' => 'Farmasi & CDOB',
                'category_slug' => 'farmasi',
                'estimated_time' => 'To Be Confirmed',
                'estimated_cost' => 'Rp 35.000.000',
                'description' => 'Sertifikasi Sistem Manajamen Mutu Distribusi CDOB BPOM untuk Pedagang Besar Farmasi (PBF).',
                'icon_name' => 'ShieldAlert',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'Izin PBF Pusat / Cabang Aktif', 'description' => 'Izin usaha PBF resmi dari Kementerian Kesehatan RI', 'is_mandatory' => true],
                    ['document_name' => 'Manual Mutu CDOB & Dokumen SOP 9 Bab', 'description' => 'SOP Manajemen Mutu, Personalia, Bangunan, & Cold Chain', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Rekomendasi Importir Kosmetik BPOM',
                'slug' => 'rekomendasi-importir-kosmetik',
                'category' => 'Kosmetik',
                'category_slug' => 'kosmetik',
                'estimated_time' => 'To Be Confirmed',
                'estimated_cost' => 'Rp 15.000.000',
                'description' => 'Persetujuan rekomendasi sarana impor kosmetik dari Balai Besar BPOM setempat.',
                'icon_name' => 'FileBadge',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'NIB & Angka Pengenal Importir (API)', 'description' => 'NIB OSS RBA dengan KBLI Impor Kosmetika', 'is_mandatory' => true],
                    ['document_name' => 'Hasil Pemeriksaan Sarana (Rekomendasi BPOM)', 'description' => 'Berita Acara Pemeriksaan (BAP) sarana dari BPOM setempat', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'SKI BPOM (Surat Keterangan Impor BPOM)',
                'slug' => 'ski-bpom',
                'category' => 'Farmasi & CDOB',
                'category_slug' => 'farmasi',
                'estimated_time' => '10 Hari Kerja',
                'estimated_cost' => 'Rp 1.000.000',
                'description' => 'Pengurusan SKI BPOM Border / Non-Border sebagai dokumen pengeluaran barang impor di Bea Cukai.',
                'icon_name' => 'FileText',
                'is_popular' => false,
                'requirements' => [
                    ['document_name' => 'Nomor Izin Edar (NIE) BPOM / Kemenkes Aktif', 'description' => 'Bukti persetujuan izin edar barang yang diimpor', 'is_mandatory' => true],
                    ['document_name' => 'Commercial Invoice & Packing List', 'description' => 'Dokumen rincian pengiriman barang impor', 'is_mandatory' => true]
                ]
            ],
            [
                'title' => 'Pendaftaran Merek Ditjen HKI (Kemenkumham)',
                'slug' => 'pendaftaran-merek-hki',
                'category' => 'Standardisasi & HKI',
                'category_slug' => 'hki',
                'estimated_time' => '1 Hari Pendaftaran / 1-2 Tahun Sertifikat',
                'estimated_cost' => 'Rp 5.000.000',
                'description' => 'Perlindungan Hak Kekayaan Intelektual (HKI) pendaftaran merek dagang, logo, & nama produk ke DJKI Kemenkumham RI.',
                'icon_name' => 'Shield',
                'is_popular' => true,
                'requirements' => [
                    ['document_name' => 'E-KTP Pemohon / Direktur Perusahaan', 'description' => 'Identitas resmi penanggung jawab pemohon merek', 'is_mandatory' => true],
                    ['document_name' => 'Etiket / Logo Merek High-Resolution', 'description' => 'File gambar logo merek dan nama brand secara jelas', 'is_mandatory' => true],
                    ['document_name' => 'Surat Pernyataan Kepemilikan Merek', 'description' => 'Pernyataan merek adalah karya asli bukan jiplakan', 'is_mandatory' => true]
                ]
            ]
        ];

        foreach ($services as $srvData) {
            $reqs = $srvData['requirements'];
            unset($srvData['requirements']);

            $service = Service::create($srvData);

            foreach ($reqs as $req) {
                ServiceRequirement::create([
                    'service_id' => $service->id,
                    'document_name' => $req['document_name'],
                    'description' => $req['description'],
                    'is_mandatory' => $req['is_mandatory'],
                ]);
            }
        }
    }
}
