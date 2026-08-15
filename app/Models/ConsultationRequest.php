<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultationRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'company_name',
        'email',
        'phone_number',
        'service_id',
        'service_name',
        'message',
        'status',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
