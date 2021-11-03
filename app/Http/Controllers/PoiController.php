<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Input;
Use \Carbon\Carbon;

use App\Models\Patient;
use App\Models\Foc; 
use DB;
use Requests;
use DataTables;

use App\Exports\ProjectsExport;
use App\Imports\ProjectsImport;
use Maatwebsite\Excel\Facades\Excel;

class PoiController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function show(Request $request) {

        $req = array(
            'division'=>$request->input('division'),
            'year'=>$request->input('year')
        );

        if($req['division']==""){
            $req['division'] = "";
        }

        if($req['year']==""){
            $req['year'] = 2021;
        }

        $foc = Foc::select('*')->where('is_service_affecting', 'Y')->get();


        // $data['divisions'] = array(
        //     array('id'=>1,"name"=>"West NL", "sections"=>array(
        //         array('id'=>1, "section"=>"NFS_WESTNL_FFS1"),
        //         array('id'=>2, "section"=>"NFS_WESTNL_FFS2"),
        //         array('id'=>3, "section"=>"NFS_WESTNL_FFS3")
        //     )),
        //     array('id'=>2,"name"=>"East NL", "sections"=>array(
        //         array('id'=>4, "section"=>"NFS_EASTNL_FFS4"),
        //         array('id'=>5, "section"=>"NFS_EASTNL_FFS5")
        //     )),
        //     array('id'=>3,"name"=>"Central NL", "sections"=>array(
        //         array('id'=>6, "section"=>"NFS_CENTRALNL_FFS6"),
        //         array('id'=>7, "section"=>"NFS_CENTRALNL_FFS7"),
        //         array('id'=>8, "section"=>"NFS_CENTRALNL_FFS8")
        //     ))
        // );

        $sections = array(
            array('id'=>1, "section"=>"NFS_WESTNL_FFS1"),
            array('id'=>2, "section"=>"NFS_WESTNL_FFS2"),
            array('id'=>3, "section"=>"NFS_WESTNL_FFS3"),
            array('id'=>4, "section"=>"NFS_EASTNL_FFS4"),
            array('id'=>5, "section"=>"NFS_EASTNL_FFS5"),
            array('id'=>6, "section"=>"NFS_CENTRALNL_FFS6"),
            array('id'=>7, "section"=>"NFS_CENTRALNL_FFS7"),
            array('id'=>8, "section"=>"NFS_CENTRALNL_FFS8")
        );
  
        // foreach ($sections as $key=>$section) {
        //     $data[$section['section']] = $this->get_per_section_monthly($section['section']);
        // }


        $data['top_contributor_node'] = $this->get_top_contributor($req['year'], $req['division'], '', 'NODE'); 
        $data['top_contributor_foc'] = $this->get_top_contributor($req['year'], $req['division'], '', 'FOC'); 

        $mttr_node_sa = $this->get_mttr($req['year'], 6, $req['division'], '', 'NODE', 'Y');
        $mttr_foc_sa = $this->get_mttr($req['year'], 6, $req['division'], '', 'FOC', 'Y');

        $data['kpi'] = $this->get_net_ava_node($mttr_node_sa, $mttr_foc_sa, $req['year'], $req['division'], '');

        $data['mttr_node'] = $this->get_mttr($req['year'], 6, $req['division'], '', 'NODE', 'Y');
        $data['mttr_foc'] = $this->get_mttr($req['year'], 6, $req['division'], '', 'FOC', 'Y');
        
        $data['division'] = $req['division'];
        return response()->json([
            'status'=>200,
            'data'=>$data,
            'count'=>$foc->count(),
            'message'=>''
        ],200,[], JSON_NUMERIC_CHECK);
        
    }

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
    public function exportP() 
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
