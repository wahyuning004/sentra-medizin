<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'Apakah PT Sentra Medizin mendampingi proses hingga Izin / Sertifikat resmi terbit?',
                'answer' => 'Ya, kami memberikan pendampingan secara end-to-end. Mulai dari audit kesiapan awal (gap analysis), penyusunan dokumen teknis & SOP, pengajuan portal resmi pemerintah (OSS RBA, E-Akustik, E-BPOM, SIMPONI), hingga pendampingan saat audit lapangan oleh tim verifikator Kemenkes / BPOM.',
                'category' => 'Layanan',
                'order' => 1,
            ],
            [
                'question' => 'Berapa lama proses sertifikasi CDAKB / CPB / IDAK biasanya berlangsung?',
                'answer' => 'Durasi bergantung pada jenis izin dan kesiapan dokumen awal perusahaan. Untuk IDAK umumnya 1-2 bulan, sedangkan sertifikasi CDAKB & CPB Manufaktur membutuhkan waktu 6-12 bulan karena mencakup verifikasi denah bangunan, SOP 13 bab, & verifikasi lapangan.',
                'category' => 'Waktu & Durasi',
                'order' => 2,
            ],
            [
                'question' => 'Bagaimana jika saat audit lapangan terdapat temuan (CAPA)?',
                'answer' => 'Tim ahli PT Sentra Medizin akan membantu menyusun dokumen Corrective Action Preventive Action (CAPA) dan mendampingi jawaban perbaikan hingga temuan dinyatakan selasai (closed) oleh Kemenkes / BPOM.',
                'category' => 'Audit & Perbaikan',
                'order' => 3,
            ],
            [
                'question' => 'Apakah biaya konsultasi & pengurusan sudah termasuk penerbitan izin resmi?',
                'answer' => 'Estimasi biaya paket profesional kami mencakup jasa konsul penuh, penyusunan SOP, pengawalan portal, & garansi pendampingan revisi. Biaya PNBP (Penerimaan Negara Bukan Pajak) resmi dari pemerintah ditransparansikan secara terpisah sesuai tagihan billing resmi.',
                'category' => 'Biaya',
                'order' => 4,
            ],
            [
                'question' => 'Bagaimana cara memulai konsultasi perizinan untuk perusahaan saya?',
                'answer' => 'Anda dapat mengisi Form Konsultasi Interaktif di website ini atau langsung mengklik tombol WhatsApp Direct untuk langsung terhubung dengan Konsultan Regulasi Senior PT Sentra Medizin.',
                'category' => 'Umum',
                'order' => 5,
            ]
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
