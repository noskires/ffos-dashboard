<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FocController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\DivisionsController;
use App\Http\Controllers\SectionsController;
use App\Http\Controllers\ExportPatientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('patients', [PatientController::class, 'show']);
Route::get('dashboard', [FocController::class, 'show']);

Route::get('v1/patients', [PatientController::class, 'show']);
Route::post('v1/patient/store', [PatientController::class, 'store']);
Route::post('v1/patient/update', [PatientController::class, 'update']);
Route::post('v1/patient/remove', [PatientController::class, 'remove']);
Route::get('v1/patient/export', [ExportPatientController::class, 'exportPatients']);

Route::get('v1/foc', [FocController::class, 'show']);
Route::get('v1/list_per_week', [FocController::class, 'show']);
Route::get('v1/division_kpi', [DivisionsController::class, 'show']);
Route::get('v1/section_kpi', [SectionsController::class, 'show']);
// Route::get('v1/list', [DivisionsController::class, 'list']);

// Projects
Route::get('v1/projects', [ProjectsController::class, 'show']);
Route::get('v1/projects1', [ProjectsController::class, 'get_count_of_project']);

// Route::get('/export-transactions','ExportExcelController@exportTransactions');