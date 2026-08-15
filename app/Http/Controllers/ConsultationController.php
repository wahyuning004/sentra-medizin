<?php

namespace App\Http\Controllers;

use App\Models\ConsultationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ConsultationController extends Controller
{
    /**
     * Store new consultation request.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:50',
            'service_id' => 'nullable|integer',
            'service_name' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $consultation = ConsultationRequest::create([
            'full_name' => $request->full_name,
            'company_name' => $request->company_name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'service_id' => $request->service_id ?? null,
            'service_name' => $request->service_name ?? 'Umum',
            'message' => $request->message,
            'status' => 'pending',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Permohonan perizinan berhasil dibuat.',
            'data' => $consultation,
        ], 201);
    }

    /**
     * Display all consultation requests.
     */
    public function index()
    {
        $consultations = ConsultationRequest::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $consultations
        ]);
    }

    /**
     * Update consultation status.
     */
    public function updateStatus(Request $request, $id)
    {
        $consultation = ConsultationRequest::find($id);
        if (!$consultation) {
            return response()->json(['status' => 'error', 'message' => 'Data tidak ditemukan'], 404);
        }

        $consultation->status = $request->status ?? $consultation->status;
        if ($request->has('service_name')) {
            $consultation->service_name = $request->service_name;
        }
        if ($request->has('company_name')) {
            $consultation->company_name = $request->company_name;
        }
        if ($request->has('full_name')) {
            $consultation->full_name = $request->full_name;
        }
        if ($request->has('phone_number')) {
            $consultation->phone_number = $request->phone_number;
        }
        if ($request->has('message')) {
            $consultation->message = $request->message;
        }

        $consultation->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Data permohonan berhasil diperbarui.',
            'data' => $consultation
        ]);
    }

    /**
     * Delete consultation request.
     */
    public function destroy($id)
    {
        $consultation = ConsultationRequest::find($id);
        if (!$consultation) {
            return response()->json(['status' => 'error', 'message' => 'Data tidak ditemukan'], 404);
        }

        $consultation->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Permohonan berhasil dihapus.'
        ]);
    }

    /**
     * Handle document upload for licensing application.
     */
    public function uploadDocument(Request $request, $id)
    {
        $consultation = ConsultationRequest::find($id);
        if (!$consultation) {
            return response()->json(['status' => 'error', 'message' => 'Data permohonan tidak ditemukan'], 404);
        }

        $validator = Validator::make($request->all(), [
            'document_file' => 'required|file|mimes:pdf,jpg,jpeg,png,docx|max:10240', // 10MB limit
            'document_type' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        if ($request->hasFile('document_file')) {
            $file = $request->file('document_file');
            $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '', $file->getClientOriginalName());
            $path = $file->storeAs('public/licensing_documents', $filename);

            return response()->json([
                'status' => 'success',
                'message' => 'Berkas dokumen perizinan berhasil diunggah.',
                'data' => [
                    'file_name' => $file->getClientOriginalName(),
                    'file_path' => Storage::url($path),
                    'document_type' => $request->document_type,
                    'uploaded_at' => now()->toDateTimeString(),
                    'verification_status' => 'Terverifikasi'
                ]
            ]);
        }

        return response()->json(['status' => 'error', 'message' => 'Gagal mengunggah berkas'], 400);
    }
}
