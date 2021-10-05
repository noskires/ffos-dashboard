<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;


use App\Models\Section;
use App\Models\Division;
use App\Models\Center;
use DB;
use Requests;
use DataTables;
// use Request;

class OrganizationDivisionController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function show(Request $request) {

        $data = array(
            'id'=>$request->input('id'),
            'code'=>$request->input('code'),
        );
        
        $list = Division::select('*');

        if($data['id']){
            $list = $list->where('id', $data['id']);
        }

        if($data['code']){
            $list = $list->where('code', $data['code']);
        }

        $list = $list->get();

        return response()->json([
            'status'=>200,
            'data'=>$list,
            'count'=>$list->count(),
            'message'=>''
        ],200,[], JSON_NUMERIC_CHECK);
    }

    public function show2(Request $request) {

        $list = Division::select('*');
        
        return DataTables::of($list)->make(true);
    }
    
    public function store(Request $request){

        $fields = $request->all();

        $transaction = DB::transaction(function($field) use($fields){
            try{
                $org = new Division;
                // $org->division_code         = $fields['division_code'];
                $org->division_name         = $fields['division_name'];
                $org->center_code           = $fields['center_code'];
                $org->save();

                $org = Division::where('id', $org->id)->first();
                $org_code                      = (str_pad(($org->id), 3, "0", STR_PAD_LEFT));
                $org->division_code            = "DIV-".$org_code;
                $org->save();

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

            $org = Division::where('id', $fields['id'])->first();
            $org->division_code         = $fields['division_code'];
            $org->division_name         = $fields['division_name'];
            $org->center_code           = $fields['center_code'];
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

}
