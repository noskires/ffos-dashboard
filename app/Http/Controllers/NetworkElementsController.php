<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;


use App\Models\Section;
use App\Models\Division;
use App\Models\Center;
use App\Models\NetworkElement;
use DB;
use Requests;
use DataTables;
// use Request;

class NetworkElementsController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function show(Request $request) {

        $data = array(
            'id'=>$request->input('id'),
            'code'=>$request->input('code'),
            'year'=>$request->input('year'),
        );
        
        // $list = NetworkElement::select('*');

        // if($data['id']){
        //     $list = $list->where('id', $data['id']);
        // }

        // if($data['code']){
        //     $list = $list->where('code', $data['code']);
        // }

        // if($data['year']){
        //     $list = $list->where('year', $data['year']);
        // }

        $list = NetworkElement::defaultFields()->whereFields($request);
        
        $list = $list->get();

        return response()->json([
            'status'=>200,
            'data'=>$list,
            'count'=>$list->count(),
            'message'=>''
        ],200,[], JSON_NUMERIC_CHECK);
    }

    public function show2(Request $request) {

        $list = NetworkElement::select('*');
        
        return DataTables::of($list)->make(true);
    }
    
    public function store(Request $request){

        $fields = $request->all();

        $transaction = DB::transaction(function($field) use($fields){
            try{
                $ne = new NetworkElement;
                $ne->no_of_ne             = $fields['no_of_ne'];
                $ne->section_code         = $fields['section_code'];
                $ne->save();

                return response()->json([
                    'status' => 200,
                    'data' => null,
                    'message' => 'Successfully saved.'
                ]);

            }
            catch (\Exception $e) 
            {
                return response()->json([
                    'status' => 500,
                    'data' => null,
                    'message' => 'Error, please try again!'
                ]);
            }
        });

        return $transaction;
    }

    public function update(Request $request){

        $fields = $request->all();

        $transaction = DB::transaction(function($field) use($fields){
        try{

            $ne = NetworkElement::where('id', $fields['id'])->first();
            $ne->no_of_ne             = $fields['no_of_ne'];
            $ne->section_code         = $fields['section_code'];
            $org->save();

            return response()->json([
                'status' => 200,
                'data' => null,
                'message' => 'Successfully updated.'
            ]);

          }
          catch (\Exception $e) 
          {
            return response()->json([
              'status' => 500,
              'data' => null,
              'message' => 'Error, please try again!'
            ]);
          }
        });

        return $transaction;
    }

    // public function remove(Request $request){

	//     $fields = Input::post();

	//     $transaction = DB::transaction(function($field) use($fields) {
	//     try{

	// 		Patient::where('id', $fields['id'])->firstOrFail()->delete();

	//         return response()->json([
	//             'status' => 200,
	//             'data' => 'null',
	//             'message' => 'Successfully deleted.'
	//         ]);

	//         }
    //         catch (\Exception $e) {

    //             return response()->json([
    //                 'status' => 500,
    //                 'data' => 'null',
    //                 'message' => 'Error, please try again!'
    //             ]);
    //         }
	//     });

   	//  	return $transaction;
  	// }

      function getTotalNePerMonth1212 (Request $request, $year){

        $request['year'] = $year;

        // $lists = NetworkElement::defaultFields()->whereFields($request)->get();

        $lists->select(
            'ne.id',
            'ne.section_code',
            'ne.division_code',
            'ne.year',
            'ne.january',
            'ne.february',
            'ne.march',
            'ne.april',
            'ne.may',
            'ne.june',
            'ne.july',
            'ne.august',
            'ne.september',
            'ne.october',
            'ne.november',
            'ne.december',
            'divisions.division_name',
        )
        ->leftJoin('divisions', function($join){
            $join->on('divisions.division_code', '=', 'ne.division_code');
        })->get();
        
        $total_jan = 0;
        $total_feb = 0;
        $total_mar = 0;
        $total_apr = 0;
        $total_may = 0;
        $total_jun = 0;
        $total_jul = 0;
        $total_aug = 0;
        $total_sep = 0;
        $total_oct = 0;
        $total_nov = 0;
        $total_dec = 0;

        foreach ($lists as $key=>$list) {
            $total_jan = $total_jan+$list['january'];
            $total_feb = $total_feb+$list['february'];
            $total_mar = $total_mar+$list['march'];
            $total_apr = $total_apr+$list['april'];
            $total_may = $total_may+$list['may'];
            $total_jun = $total_jun+$list['june'];
            $total_jul = $total_jul+$list['july'];
            $total_aug = $total_aug+$list['august'];
            $total_sep = $total_sep+$list['september'];
            $total_oct = $total_oct+$list['october'];
            $total_nov = $total_nov+$list['november'];
            $total_dec = $total_dec+$list['december'];
        }

        $monthly_count  = array($total_jan, $total_feb, $total_mar, $total_apr, $total_may,
                            $total_jun, $total_jul, $total_aug, $total_sep, $total_oct, $total_nov, $total_dec); 

        return $monthly_count;
        
    }
    

}
