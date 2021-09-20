<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FocController;
use App\Http\Controllers\PoiController;
use App\Http\Controllers\AccessTransportController;
use App\Http\Controllers\FileUpload;
use App\Http\Controllers\MyController;

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
// Route::get('patients', [PatientController::class, 'index']);
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

// Billing
Route::get('dashboard/billing-fc/{year}', [AccessTransportController::class, 'index']);
Route::get('dashboard/billing-fh/{year}', [AccessTransportController::class, 'index']);

// SCORECARD
Route::get('dashboard/scorecard-fc/{year}', [AccessTransportController::class, 'index']);
Route::get('dashboard/scorecard-fh/{year}', [AccessTransportController::class, 'index']);

// SECONDARY MTTR
Route::get('dashboard/secondary-mttr/{year}', [AccessTransportController::class, 'index']);

Route::get('dashboard/projects/{year}', [FocController::class, 'index']);
Route::get('dashboard/project-import-view', [FocController::class, 'index']);
Route::get('dashboard/project-export', [MyController::class, 'export'])->name('export');
Route::post('dashboard/project-import', [MyController::class, 'import'])->name('import');

Route::get('/upload-file', [FileUpload::class, 'createForm']);
Route::post('/upload-file', [FileUpload::class, 'fileUpload'])->name('fileUpload');


Route::get('importExportView', [MyController::class, 'importExportView']);
// Route::get('export', [MyController::class, 'export'])->name('export');
// Route::post('import', [MyController::class, 'import'])->name('import');

// Route::get('patients', [PatientController::class, 'index']);
// Route::get('registration', [PatientController::class, 'index']);
