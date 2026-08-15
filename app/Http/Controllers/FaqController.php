<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Get all FAQs ordered by order field.
     */
    public function index()
    {
        $faqs = Faq::orderBy('order', 'asc')->get();

        return response()->json([
            'status' => 'success',
            'data' => $faqs,
        ]);
    }
}
