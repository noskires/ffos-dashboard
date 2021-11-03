<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Input;

use App\Models\Patient;
use App\Models\Foc;
use DB;
use Requests;
use DataTables;

class SectionsController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function list(Request $request) {
        return $foc = Foc::select('*')->where('is_service_affecting', 'Y')->get();
    }
    
    public function show(Request $request) {

        $req = array(
            'division'=>$request->input('division'),
            'section'=>$request->input('section'),
            'year'=>$request->input('year')
        );

        if($req['division']==""){
            $req['division'] = "";
        }

        if($req['section']==""){
            $req['section'] = "";
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


        $data['top_contributor_node'] = $this->get_top_contributor($req['year'], $req['division'], $req['section'], 'NODE'); 
        $data['top_contributor_foc'] = $this->get_top_contributor($req['year'], $req['division'], $req['section'], 'FOC'); 

        $mttr_node_sa = $this->get_mttr($req['year'], 6, $req['division'], $req['section'], 'NODE', 'Y');
        $mttr_foc_sa = $this->get_mttr($req['year'], 6, $req['division'], $req['section'], 'FOC', 'Y');

        $data['kpi'] = $this->get_net_ava_node($mttr_node_sa, $mttr_foc_sa, $req['year'], $req['division'], $req['section']);

        $data['mttr_node'] = $this->get_mttr($req['year'], 6, $req['division'], $req['section'], 'NODE', 'Y');
        $data['mttr_foc'] = $this->get_mttr($req['year'], 6, $req['division'], $req['section'], 'FOC', 'Y');
        
        $data['division'] = $req['division'];
        $data['year'] = $req['year'];
        return response()->json([
            'status'=>200,
            'data'=>$data,
            'count'=>$foc->count(),
            'message'=>''
        ],200,[], JSON_NUMERIC_CHECK);
        
    }

    public function get_per_section_weekly($section){
        
        $foc_per_week = Foc::select('new_node_owner',"week_number", 
                    DB::raw("COUNT(*) as total_ticket"),
                    DB::raw('ROUND(AVG(duration),2) as avg_duration')
                )
                ->where('is_service_affecting', 'Y')
                ->where('region', "NL")
                ->where('new_node_owner', $section)
                ->where('week_number', '<=',22)
                ->groupby('new_node_owner','week_number')->get();

        $foc_ytd = Foc::select(DB::raw("COUNT(id) as total_ticket"),  DB::raw('ROUND(AVG(duration),4) as avg_duration'))
                ->where('is_service_affecting', 'Y')
                ->where('region', "NL")
                ->where('week_number', '<=',22)
                ->where('new_node_owner', $section)->get();
    
 
        $data['foc'] = array('per_week'=>$foc_per_week,'total_ticket'=>$foc_ytd);
        // $data['per_week'] = $foc;
        // $data['total_ticket'] = $total_ticket;
        // $data['avg_duration'] = $avg_duration;
        return $data;
    }

    public function get_per_section_monthly($section){
        
        $foc_per_week = Foc::select('new_node_owner',"month", 
                    DB::raw("COUNT(*) as total_ticket"),
                    DB::raw('ROUND(AVG(duration),2) as avg_duration')
                )
                ->where('is_service_affecting', 'Y')
                ->where('region', "NL")
                ->where('new_node_owner', $section)
                ->where('month', '<=',6)
                ->groupby('new_node_owner','month')->get();
        
        $foc_ytd = Foc::select(DB::raw("COUNT(id) as total_ticket"), 
                DB::raw('ROUND(AVG(duration),4) as avg_duration'))
                ->where('is_service_affecting', 'Y')
                ->where('region', "NL")
                ->where('month', '<=',5)
                ->where('new_node_owner', $section)->get();

        $data['foc'] = array('per_month'=>$foc_per_week,'ytd'=>$foc_ytd);
        // $data['per_week'] = $foc;
        // $data['total_ticket'] = $total_ticket;
        // $data['avg_duration'] = $avg_duration;

        return $data;
    }

    public function get_top_contributor($year, $division, $section, $type){
        
        $total_root_cause = Foc::select(
            DB::raw("COUNT(*) as total_ticket"),
            DB::raw("SUM(duration) as total_duration"),
        )
        ->where('is_service_affecting', 'Y')
        ->where('month', '<=',6)
        ->where('ticket_type','LIKE', '%'.$type.'%')
        ->where('new_node_owner', '=', $section)
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
            ->where('month', '<=',6)
            ->where('ticket_type','LIKE', '%'.$type.'%')
            ->where('new_node_owner', '=', $section)
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
            ->where('month', '<=',6)
            ->where('ticket_type','LIKE', '%'.$type.'%')
            ->where('new_node_owner', '=', $section)
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
            ->where('new_node_owner', '=', $section)
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
            ->where('new_node_owner', '=', $section)
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


    function get_net_ava_node($get_mttr_node, $get_mttr_foc, $year, $division, $section){
        $highest_month = Foc::where('year','=', $year)->max('month');

        $months         = array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        $days_per_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

        if($year==2020){
            $ne_per_month   = array(3090, 3219, 3197, 3586, 3695, 3695, 3714, 3688, 3679, 3679, 3675, 3664);
            $ne_per_month_division = array(
                "NFS_WESTNL"=>array(1012,1061,1044,1208,1232,1232,1243,1231,1228,1228,1227,1214),
                "NFS_EASTNL"=>array(695,745,747,868,881,881,880,871,874,874,874,874),
                "NFS_CENTRALNL"=>array(1383,1413,1406,1510,1582,1582,1591,1586,1577,1577,1574,1576),
            );
            
            $ne_per_month_section = array(

                "NFS_WESTNL"=>array(
                    "NFS_WESTNL_FFS1"=>array(466,499,492,590,599,599,607,598,595,595,595,592),
                    "NFS_WESTNL_FFS2"=>array(339,343,336,359,383,383,383,382,381,381,380,376),
                    "NFS_WESTNL_FFS3"=>array(207,219,216,259,250,250,253,251,252,252,252,246)
                ),
                "NFS_EASTNL"=>array(
                    "NFS_EASTNL_FFS4"=>array(417,452,453,527,558,558,555,549,551,551,550,548),
                    "NFS_EASTNL_FFS5"=>array(278,293,294,341,323,323,325,322,323,323,324,326)
                ),
                "NFS_CENTRALNL"=>array(
                    "NFS_CENTRALNL_FFS6"=>array(412,419,420,460,486,486,485,486,485,485,484,485),
                    "NFS_CENTRALNL_FFS7"=>array(658,676,668,719,746,746,753,744,740,740,738,741),
                    "NFS_CENTRALNL_FFS8"=>array(313,318,318,331,350,350,353,356,352,352,352,350)
                )
            );
 
        }else{
            $ne_per_month   = array(3653, 3653, 3664, 3685, 3685, 3658, 3658, 3658, 3580, 3580, 3580, 3580);
            $ne_per_month_division = array(
                "NFS_WESTNL"=>array(1216,1216,1223,1230,1230,1216,1216,1216,1185,1185,1185,1185),
                "NFS_EASTNL"=>array(864,864,865,867,867,877,877,877,857,857,857,857),
                "NFS_CENTRALNL"=>array(1573,1573,1576,1588,1588,1565,1565,1565,1538,1538,1538,1538),
            );

            $ne_per_month_section = array(

                "NFS_WESTNL"=>array(
                    "NFS_WESTNL_FFS1"=>array(593,593,593,596,596,591,591,591,582,580,580,580),
                    "NFS_WESTNL_FFS2"=>array(371,371,378,381,381,372,372,372,355,352,352,352),
                    "NFS_WESTNL_FFS3"=>array(252,252,252,253,253,253,253,253,248,248,248,248)
                ),
                "NFS_EASTNL"=>array(
                    "NFS_EASTNL_FFS4"=>array(544,544,542,544,544,549,549,549,520,529,529,529),
                    "NFS_EASTNL_FFS5"=>array(320,320,323,323,323,328,328,328,337,335,335,335)
                ),
                "NFS_CENTRALNL"=>array(
                    "NFS_CENTRALNL_FFS6"=>array(484,484,482,482,482,480,480,480,476,481,481,481),
                    "NFS_CENTRALNL_FFS7"=>array(739,739,739,743,743,740,740,740,731,731,731,731),
                    "NFS_CENTRALNL_FFS8"=>array(350,350,355,363,363,345,345,345,331,343,343,343)
                )
            );

        }

        

        $data['selected_ne'] = array();

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

            if($section!=""){
                $ne = $ne_per_month_section[$division][$section][$i];
            }elseif($division!=""){
                $ne = $ne_per_month_division[$division][$i];
            }else{
                $ne = $ne_per_month[$i];
            }

            array_push($data['selected_ne'],$ne);
            
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
        $data['ne_per_month_section']=$ne_per_month_section;
        $data['days_per_month']=$days_per_month;
        $data['days_per_month_display']=$days_per_month_display;
        $data['months_display']=$months_display;
        $data['last_month']=$months[$number_of_elements-1];

        $data['ytd_total_ticket_node']=$get_mttr_node['ytd']['total_ticket'];
        $data['ytd_total_ticket_foc']=$get_mttr_foc['ytd']['total_ticket'];
        $data['ytd_avg_duration_node']=round($get_mttr_node['ytd']['avg_duration'],2);
        $data['ytd_avg_duration_foc']=round($get_mttr_foc['ytd']['avg_duration'],2);

        // if($section!=""){
                
        // }elseif($division!=""){
        //     // $ne = $ne_per_month['NFS_EASTNL'][$i];
        //     $ne = $ne_per_month_division[$division][$i];
        // }else{
        //     $ne = $ne_per_month[$i];
        // }

        $ne = $ne_per_month_section[$division][$section][$highest_month-1];
        
        $kpi = round((((($ne)*(array_sum($days_per_month_display))*(24))-(($ticket_count_node[$number_of_elements]*$mttr_node[$number_of_elements])+($ticket_count_foc[$number_of_elements]*$mttr_foc[$number_of_elements])))/(($ne)*(array_sum($days_per_month_display))*(24)))*100,3);
        array_push($data['net_ava'], $kpi);

        $data['ytd_net_ava']=round($kpi,3);
        $data['division']=$division;
        $data['title_header_kpi'] = $section." (".$year." DATA)";
 
        return $data;
    }


}
