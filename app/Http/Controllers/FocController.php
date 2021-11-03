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

class FocController extends Controller
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

    // public function get_per_section_weekly($section){
        
    //     $foc_per_week = Foc::select('new_node_owner',"week_number", 
    //                 DB::raw("COUNT(*) as total_ticket"),
    //                 DB::raw('ROUND(AVG(duration),2) as avg_duration')
    //             )
    //             ->where('is_service_affecting', 'Y')
    //             ->where('region', "NL")
    //             ->where('new_node_owner', $section)
    //             ->where('week_number', '<=',22)
    //             ->groupby('new_node_owner','week_number')->get();

    //     $foc_ytd = Foc::select(DB::raw("COUNT(id) as total_ticket"),  DB::raw('ROUND(AVG(duration),4) as avg_duration'))
    //             ->where('is_service_affecting', 'Y')
    //             ->where('region', "NL")
    //             ->where('week_number', '<=',22)
    //             ->where('new_node_owner', $section)->get();
    
 
    //     $data['foc'] = array('per_week'=>$foc_per_week,'total_ticket'=>$foc_ytd);
    //     // $data['per_week'] = $foc;
    //     // $data['total_ticket'] = $total_ticket;
    //     // $data['avg_duration'] = $avg_duration;
    //     return $data;
    // }

    // public function get_per_section_monthly($section){
        
    //     $foc_per_week = Foc::select('new_node_owner',"month", 
    //                 DB::raw("COUNT(*) as total_ticket"),
    //                 DB::raw('ROUND(AVG(duration),2) as avg_duration')
    //             )
    //             ->where('is_service_affecting', 'Y')
    //             ->where('region', "NL")
    //             ->where('new_node_owner', $section)
    //             ->where('month', '<=',6)
    //             ->groupby('new_node_owner','month')->get();

    //     $foc_ytd = Foc::select(DB::raw("COUNT(id) as total_ticket"), 
    //             DB::raw('ROUND(AVG(duration),4) as avg_duration'))
    //             ->where('is_service_affecting', 'Y')
    //             ->where('region', "NL")
    //             ->where('month', '<=',5)
    //             ->where('new_node_owner', $section)->get();

        

    //     $data['foc'] = array('per_month'=>$foc_per_week,'ytd'=>$foc_ytd);
    //     // $data['per_week'] = $foc;
    //     // $data['total_ticket'] = $total_ticket;
    //     // $data['avg_duration'] = $avg_duration;


        
            
    //     return $data;
    // }

    public function get_top_contributor($year, $division, $section, $type){
        $highest_month = Foc::where('year','=', $year)->max('month');

        $total_root_cause = Foc::select(
            DB::raw("COUNT(*) as total_ticket"),
            DB::raw("SUM(duration) as total_duration"),
        )
        ->where('is_service_affecting', 'Y')
        ->where('month', '<=',$highest_month)
        ->where('ticket_type','LIKE', '%'.$type.'%')
        ->where('year', '=', $year);

        if($division!=""){
            $total_root_cause = $total_root_cause->where('division', 'like', '%'.$division.'%');
        }

        if($type=="NODE"){
            $total_root_cause = $total_root_cause->where('d', 'like', '%NODE%');
        }

        $total_root_cause = $total_root_cause->first();

        $get_total_contributor = Foc::select(
                'root_cause',
                DB::raw("COUNT(*) as total_ticket"),
                DB::raw("SUM(duration) as total_duration"),
            )
            ->where('is_service_affecting', 'Y')
            ->where('month', '<=',$highest_month)
            ->where('ticket_type','LIKE', '%'.$type.'%')
            ->where('year', '=', $year);

            if($division!=""){
                $get_total_contributor = $get_total_contributor->where('division', 'like', '%'.$division.'%');
            }

            if($type=="NODE"){
                $get_total_contributor = $get_total_contributor->where('d', 'like', '%NODE%');
            }

            $get_total_contributor = $get_total_contributor->orderBy('total_ticket', 'desc')
            ->groupBy('root_cause')
            ->get();
 
        
        $top_contributor = Foc::select(
                'root_cause',
                DB::raw("COUNT(*) as total_ticket"),
                DB::raw("SUM(duration) as total_duration"),
            )
            ->where('is_service_affecting', 'Y')
            ->where('month', '<=',$highest_month)
            ->where('ticket_type','LIKE', '%'.$type.'%')
            ->where('year', '=', $year);

            if($division!=""){
                $top_contributor = $top_contributor->where('division', 'like', '%'.$division.'%');
            }

            if($type=="NODE"){
                $top_contributor = $top_contributor->where('d', 'like', '%NODE%');
            }

            $top_contributor = $top_contributor->orderBy('total_ticket', 'desc')
            ->groupBy('root_cause')
            ->take(5)
            ->get();

        $total_top_root_cause_ticket = array_sum(array_column($top_contributor->all(), 'total_ticket'));
        $total_top_root_cause_duration = array_sum(array_column($top_contributor->all(), 'total_duration'));
        
        if(count($get_total_contributor)>5){
            $others = array('root_cause'=>"Others", 
                        'total_ticket'=>($total_root_cause['total_ticket']-$total_top_root_cause_ticket), 
                        "total_duration"=>($total_root_cause['total_duration']-$total_top_root_cause_duration));
            $top_contributor->push($others);
        }

        return $top_contributor;
    }


    function get_mttr($year, $month, $division, $section, $ticket_type, $is_service_affecting){
        $highest_month = Foc::where('year','=', $year)->max('month');

        $data['per_month'] = Foc::select("month", 
                DB::raw("COUNT(*) as total_ticket"),
                DB::raw('AVG(duration) as avg_duration')
            )
            ->where('is_service_affecting', 'Y')
            ->where('ticket_type','LIKE', '%'.$ticket_type.'%')
            ->where('year', '=', $year);
            // ->where('new_node_owner', $section)

            if($division!=""){
                $data['per_month'] = $data['per_month']->where('division', 'like', '%'.$division.'%');
            }

            if($ticket_type=="NODE"){
                $data['per_month'] = $data['per_month']->where('d', 'like', '%NODE%');
            }

        $data['per_month'] = $data['per_month']->where('month', '<=',$highest_month)
            ->orderBy('month', 'asc')
            ->groupby('month')
            ->get();
 

        $data['ytd'] = Foc::select( 
                DB::raw("COUNT(*) as total_ticket"),
                DB::raw('AVG(duration) as avg_duration')
            )
            ->where('is_service_affecting', 'Y')
            ->where('ticket_type','LIKE', '%'.$ticket_type.'%')
            ->where('year', '=', $year);

            if($division!=""){
                $data['ytd'] = $data['ytd']->where('division', 'like', '%'.$division.'%');
            }

            if($ticket_type=="NODE"){
                $data['ytd'] = $data['ytd']->where('d', 'like', '%NODE%');
            }

        $data['ytd'] = $data['ytd']->where('month', '<=',$highest_month)->first();
        $data['DIVHERE'] = $division;
        
        return $data;    
    }


    function get_net_ava_node($get_mttr_node, $get_mttr_foc, $year, $division, $field_force){

        $highest_month = Foc::where('year','=', $year)->max('month');
        // $highest_month = Foc::where('year','=', $year)->max('month');

        $months         = array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        $days_per_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

        if($year==2020){
            $ne_per_month   = array(3090, 3219, 3197, 3586, 3695, 3695, 3714, 3688, 3679, 3679, 3675, 3664);
        }else{
            $ne_per_month   = array(3653, 3653, 3664, 3685, 3685, 3658, 3658, 3658, 3580, 3599, 3599, 3599);
        }
        
        

        $ne_per_month_division = array(
            "NFS_WESTNL"=>array(1216,1216,1223,1230,1230,1216,1216,1216,1185,1180,1180,1180),
            "NFS_EASTNL"=>array(864,864,865,867,867,877,877,877,857,864,864,864),
            "NFS_CENTRALNL"=>array(1573,1573,1576,1588,1588,1565,1565,1565,1538,1555,1555,1555),
        );

        $number_of_elements = count($get_mttr_node['per_month']);

        $net_ava    = array();
        $mttr_node_display  = array();
        $mttr_node  = array();
        $ticket_count_node  = array();
        $mttr_foc_display  = array();
        $mttr_foc  = array();
        $ticket_count_foc  = array(); 
        $days_per_month_display = array();
        $months_display = array();

        for($i=0;$i<$highest_month;$i++){

            foreach ($get_mttr_node['per_month'] as $key=>$mttr) {
                if($key==$i){
                    array_push($ticket_count_node, $mttr['total_ticket']);
                    array_push($mttr_node, $mttr['avg_duration']);
                    array_push($mttr_node_display, round($mttr['avg_duration'],2));
                }
            }

            foreach ($get_mttr_foc['per_month'] as $key=>$mttr) {
                if($key==$i){
                    array_push($ticket_count_foc, $mttr['total_ticket']);
                    array_push($mttr_foc, $mttr['avg_duration']);
                    array_push($mttr_foc_display, round($mttr['avg_duration'],2));
                }
            }

            array_push($days_per_month_display, $days_per_month[$i]);
            array_push($months_display, $months[$i]);

            if($field_force!=""){
                
            }elseif($division!=""){
                // $ne = $ne_per_month['NFS_EASTNL'][$i];
                $ne = $ne_per_month_division[$division][$i];
            }else{
                $ne = $ne_per_month[$i];
            }
            
            $kpi = round((((($ne)*($days_per_month_display[$i])*(24))
                -(($ticket_count_node[$i]
                *$mttr_node[$i])
                +($ticket_count_foc[$i]
                *$mttr_foc[$i])))/
                (($ne)*($days_per_month_display[$i])*(24)))*100,3);
            array_push($net_ava, $kpi);
            
        }

        array_push($ticket_count_node, $get_mttr_node['ytd']['total_ticket']);
        array_push($mttr_node, $get_mttr_node['ytd']['avg_duration']);
        array_push($ticket_count_foc, $get_mttr_foc['ytd']['total_ticket']);
        array_push($mttr_foc, $get_mttr_foc['ytd']['avg_duration']);
 
        array_push($mttr_node_display, round($get_mttr_node['ytd']['avg_duration'],2)); 
        array_push($mttr_foc_display, round($get_mttr_foc['ytd']['avg_duration'],2));

        array_push($months_display, "YTD");
 
        $data['mttr_node']=$mttr_node;
        $data['mttr_node_display']=$mttr_node_display;
        $data['ticket_count_node']=$ticket_count_node;
        $data['mttr_foc']=$mttr_foc;
        $data['mttr_foc_display']=$mttr_foc_display;
        $data['ticket_count_foc']=$ticket_count_foc;
        $data['net_ava']=$net_ava;
        $data['ne_per_month']=$ne_per_month;
        $data['days_per_month']=$days_per_month;
        $data['days_per_month_display']=$days_per_month_display;
        $data['months_display']=$months_display;
        $data['last_month']=$months[$number_of_elements-1];

        $data['ytd_total_ticket_node']=$get_mttr_node['ytd']['total_ticket'];
        $data['ytd_total_ticket_foc']=$get_mttr_foc['ytd']['total_ticket'];
        $data['ytd_avg_duration_node']=round($get_mttr_node['ytd']['avg_duration'],2);
        $data['ytd_avg_duration_foc']=round($get_mttr_foc['ytd']['avg_duration'],2);

        // if($field_force!=""){
                
        // }elseif($division!=""){
        //     $ne = $ne_per_month_division[$division][$i];
        // }else{
            $ne = $ne_per_month[$highest_month-1];
        // }
        
        $kpi = round((((($ne)*(array_sum($days_per_month_display))*(24))-(($ticket_count_node[$number_of_elements]*$mttr_node[$number_of_elements])+($ticket_count_foc[$number_of_elements]*$mttr_foc[$number_of_elements])))/(($ne)*(array_sum($days_per_month_display))*(24)))*100,3);
        array_push($data['net_ava'], $kpi);

        $data['ytd_net_ava']=round($kpi,3);
        $data['division']=$division;
        $data['highest_month']=$highest_month;
        
 
        return $data;
    }


}
