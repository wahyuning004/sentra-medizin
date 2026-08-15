<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes for PT Sentra Medizin
|--------------------------------------------------------------------------
*/

// Public API Routes
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{slug}', [ServiceController::class, 'show']);
Route::get('/faqs', [FaqController::class, 'index']);

// Consultation & Licensing Application CRUD Routes
Route::get('/consultations', [ConsultationController::class, 'index']);
Route::post('/consultations', [ConsultationController::class, 'store']);
Route::put('/consultations/{id}', [ConsultationController::class, 'updateStatus']);
Route::delete('/consultations/{id}', [ConsultationController::class, 'destroy']);
Route::post('/consultations/{id}/documents', [ConsultationController::class, 'uploadDocument']);

// Authentication API Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'me']);
Route::post('/logout', [AuthController::class, 'logout']);
