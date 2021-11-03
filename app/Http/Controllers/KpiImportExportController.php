<?php
     
namespace App\Http\Controllers;
    
use Illuminate\Http\Request;
use App\Models\Foc;
// use App\Exports\ProjectsExport;
use App\Imports\KpiImport;
use Maatwebsite\Excel\Facades\Excel;
    
class KpiImportExportController extends Controller
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function kpiImportExportView()
    {
       return view('import');
    }
     
    /**
    * @return \Illuminate\Support\Collection
    */
    // public function export() 
    // {
    //     return Excel::download(new ProjectsExport, 'Primary and Secondary Projects.xlsx');
    // }
     
    /**
    * @return \Illuminate\Support\Collection
    */
    public function import()
    {
        Excel::import(new KpiImport,request()->file('file'));
             
        return back();
    }

    public function truncateKpiTable()
    {
        Foc::truncate();
    }


}