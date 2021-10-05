<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FocController;
use App\Http\Controllers\PoiController;
use App\Http\Controllers\AccessTransportController;
use App\Http\Controllers\AsOfDateController;
use App\Http\Controllers\FileUpload;
use App\Http\Controllers\MyController;
use App\Http\Controllers\OrganizationSectionController;
use App\Http\Controllers\OrganizationDivisionController;
use App\Http\Controllers\OrganizationCenterController;
use App\Http\Controllers\NetworkElementsController;

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
Route::get('dashboard/project-import-export', [FocController::class, 'index']);
Route::get('dashboard/project-export', [MyController::class, 'export'])->name('export');
Route::post('dashboard/project-import', [MyController::class, 'import'])->name('import');

Route::get('/upload-file', [FileUpload::class, 'createForm']);
Route::post('/upload-file', [FileUpload::class, 'fileUpload'])->name('fileUpload');

Route::get('dashboard/as-of-date', [AsOfDateController::class, 'index']);
Route::get('dashboard/as-of-date-admin', [AsOfDateController::class, 'index']);

// ORGANIZATION
Route::get('organizational-chart', [OrganizationSectionController::class, 'index']);

Route::get('organization/sections', [OrganizationSectionController::class, 'index']);
Route::get('organization/divisions', [OrganizationDivisionController::class, 'index']);
Route::get('organization/centers', [OrganizationCenterController::class, 'index']);


// NE
Route::get('network-elements', [NetworkElementsController::class, 'index']);

// AS OF DATE

// Route::get('as', [MyController::class, 'importExportView']);


// Route::get('export', [MyController::class, 'export'])->name('export');
// Route::post('import', [MyController::class, 'import'])->name('import');

// Route::get('patients', [PatientController::class, 'index']);
// Route::get('registration', [PatientController::class, 'index']);
