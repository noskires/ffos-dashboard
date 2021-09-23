<?php
     
namespace App\Http\Controllers;
    
use Illuminate\Http\Request;
use App\Exports\ProjectsExport;
use App\Imports\ProjectsImport;
use Maatwebsite\Excel\Facades\Excel;
    
class MyController extends Controller
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function importExportView()
    {
       return view('import');
    }
     
    /**
    * @return \Illuminate\Support\Collection
    */
    public function export() 
    {
        return Excel::download(new ProjectsExport, 'Primary and Secondary Projects.xlsx');
    }
     
    /**
    * @return \Illuminate\Support\Collection
    */
    public function import()
    {
        Excel::import(new ProjectsImport,request()->file('file'));
             
        return back();
    }

}