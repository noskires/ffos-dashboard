<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
// use Config;

use DB;
use Auth;
use Excel;
use App\Models\Audit;
// use App\User;
use App\Http\Requests;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;

use App\Http\Exports\Export;

class ExportPatientController extends Controller {

	public function index(){
        return view('layout.index');
    }
 
    public function exportPatients(){
 
        return (new Export)->download('Patients.xlsx');

    }
 
  	
}