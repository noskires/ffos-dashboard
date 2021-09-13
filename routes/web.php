<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FocController;
use App\Http\Controllers\PoiController;
use App\Http\Controllers\AccessTransportController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('index', [PatientController::class, 'index']);
Route::get('patients', [PatientController::class, 'index']);
Route::get('dashboard', [FocController::class, 'index']);
Route::get('dashboard/kpi/{year}', [FocController::class, 'index']);
Route::get('dashboard/kpi/{year}/{division}', [FocController::class, 'index']);
Route::get('dashboard/kpi/{year}/{division}/{section}', [FocController::class, 'index']);

// POI
Route::get('dashboard/poi/{year}', [PoiController::class, 'index']);

// Access Transport
Route::get('dashboard/transport/{year}', [AccessTransportController::class, 'index']);
Route::get('dashboard/access/{year}', [AccessTransportController::class, 'index']);

// FOC Inventory
Route::get('dashboard/foc-inventory/{year}', [AccessTransportController::class, 'index']);


Route::get('project_update', [FocController::class, 'index']);

// Route::get('patients', [PatientController::class, 'index']);
// Route::get('registration', [PatientController::class, 'index']);
