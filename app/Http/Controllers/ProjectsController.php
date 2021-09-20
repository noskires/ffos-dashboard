<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Input;

use App\Models\Patient;
use App\Models\Foc;
use App\Models\Project;
use DB;
use Requests;
use DataTables;

class ProjectsController extends Controller
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


        
        $data['primary_rebuild'] = $this->projects('Primary Rebuild');
        $data['primary_rehab'] = $this->projects('Primary Rehab');
        $data['secondary_rehab'] = $this->projects('Secondary Rehab');
        
        $data['division'] = $req['division'];
        return response()->json([
            'status'=>200,
            'data'=>$data,
            // 'count'=>$foc->count(),
            'message'=>''
        ],200,[], JSON_NUMERIC_CHECK);
        
    }


    function projects($project_type){

        $project_status = Project::select('project_status')->where('project_type', $project_type)->groupby('project_status')->get();
       
        $projects = Project::select(
            'section',
            'project_status',
            DB::raw("COUNT(*) as total_project")
        )->where('project_type', $project_type)->groupby('section', 'project_status')->get();

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

        foreach ($project_status as $key=>$status) {
            $data[$status->project_status] = array();
        }

        $data['summary']['overall'] = 0;
        $data['summary']['completed'] = 0;
        
        $project_types = array(
            array("code"=>"primary_rebuild", "name"=>"Primary Rebuild"), 
            array("code"=>"primary_rehab", "name"=>"Primary Rehab"), 
            array("code"=>"secondary_rehab", "name"=>"Secondary Rehab"));

        foreach ($project_status as $key2=>$status) {
            $adder = 0;
            
            foreach ($sections as $key=>$section) {
                $data['summary']['overall'] = $data['summary']['overall']+$this->get_count_of_project($section['section'], $project_type, $status->project_status);
                if($status->project_status=="Accepted" || $status->project_status=="ACCEPTED AND DONE CUT-OVER"){
                    $data['summary']['completed'] = $data['summary']['completed']+$this->get_count_of_project($section['section'], $project_type, $status->project_status);
                }

                $adder = $adder+ $this->get_count_of_project($section['section'], $project_type, $status->project_status);
                array_push($data[$status->project_status], $this->get_count_of_project($section['section'], $project_type, $status->project_status));
            }

            array_push($data[$status->project_status], $adder);
        }



        $data['serries'] = array();

        foreach ($project_status as $key2=>$status) {
            array_push($data['serries'], array("name"=>$status->project_status, "data"=>$data[$status->project_status]));
        }


        return $data;
    }

    function get_count_of_project($section, $type, $status)
    {

        $projects = Project::select('*')
        ->where('project_type', $type)
        ->where('project_status', $status)
        ->where('section', $section)
        ->count();

        return $projects;
    }
    
    
}
