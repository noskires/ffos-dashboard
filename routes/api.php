<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FocController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\DivisionsController;
use App\Http\Controllers\SectionsController;
use App\Http\Controllers\ExportPatientController;
use App\Http\Controllers\AsOfDateController;
use App\Http\Controllers\OrganizationSectionController;
use App\Http\Controllers\OrganizationDivisionController;
use App\Http\Controllers\OrganizationCenterController;
use App\Http\Controllers\NetworkElementsController;
use App\Http\Controllers\FocInventoryController;

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

// As of date
Route::get('v1/as-of-dates', [AsOfDateController::class, 'show']);
Route::get('v2/as-of-dates', [AsOfDateController::class, 'show2']);
Route::post('v1/as-of-date/store', [AsOfDateController::class, 'store']);
Route::post('v1/as-of-date/update', [AsOfDateController::class, 'update']);

// FOC inventory
Route::get('v1/inventory/foc', [FocInventoryController::class, 'show']);
Route::get('v2/inventory/foc', [FocInventoryController::class, 'show2']);
Route::post('v1/inventory/foc/store', [FocInventoryController::class, 'store']);
Route::post('v1/inventory/foc/update', [FocInventoryController::class, 'update']);


// Organizations
Route::get('v1/organization-sections', [OrganizationSectionController::class, 'show']);
Route::get('v2/organization-sections', [OrganizationSectionController::class, 'show2']);
Route::post('v1/organization-section/store', [OrganizationSectionController::class, 'store']);
Route::post('v1/organization-section/update', [OrganizationSectionController::class, 'update']);

Route::get('v1/organization-divisions', [OrganizationDivisionController::class, 'show']);
Route::get('v2/organization-divisions', [OrganizationDivisionController::class, 'show2']);
Route::post('v1/organization-division/store', [OrganizationDivisionController::class, 'store']);
Route::post('v1/organization-division/update', [OrganizationDivisionController::class, 'update']);

Route::get('v1/organization-centers', [OrganizationCenterController::class, 'show']);
Route::get('v2/organization-centers', [OrganizationCenterController::class, 'show2']);
Route::post('v1/organization-center/store', [OrganizationCenterController::class, 'store']);
Route::post('v1/organization-center/update', [OrganizationCenterController::class, 'update']);

// NE

Route::get('v1/network-elements', [NetworkElementsController::class, 'show']);
Route::get('v2/network-elements', [NetworkElementsController::class, 'show2']);
Route::post('v1/network-element/store', [NetworkElementsController::class, 'store']);
Route::post('v1/network-element/update', [NetworkElementsController::class, 'update']);

// Route::get('/export-transactions','ExportExcelController@exportTransactions');