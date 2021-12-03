<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;


use App\Models\FocInventory;
use DB;
use Requests;
use DataTables;
// use Request;

class FocInventoryController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function show(Request $request) {

        $data = array(
            'id'=>$request->input('id'),
            'inventory_code'=>$request->input('inventory_code'),
        );
        
        $list = FocInventory::select('*');

        if($data['id']){
            $list = $list->where('id', $data['id']);
        }

        if($data['inventory_code']){
            $list = $list->where('inventory_code', $data['inventory_code']);
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

        $list = FocInventory::select('*');
        
        return DataTables::of($list)->make(true);
    }
    
    public function store(Request $request){

        $fields = $request->all();

        $transaction = DB::transaction(function($field) use($fields){
            // try{
                $inventory = new FocInventory;
                $inventory->inventory_type   = $fields['inventory_type'];
                $inventory->section_code     = $fields['section_code'];
                $inventory->foc_link         = $fields['foc_link'];
                $inventory->cable_id         = $fields['cable_id'];
                $inventory->date_submitted   = date('Y-m-d', strtotime($fields['date_submitted']));
                $inventory->save();

                return response()->json([
                    'status' => 200,
                    'data' => null,
                    'message' => 'Successfully saved.'
                ]);

            // }
            // catch (\Exception $e) 
            // {
            //     return response()->json([
            //         'status' => 500,
            //         'data' => null,
            //         'message' => 'Error, please try again!'
            //     ]);
            // }
        });

        return $transaction;
    }

    public function update(Request $request){

        $fields = $request->all();

        $transaction = DB::transaction(function($field) use($fields){
        // try{

            $inventory = FocInventory::where('id', $fields['id'])->first();
            $inventory->inventory_type   = $fields['inventory_type'];
            $inventory->section_code     = $fields['section_code'];
            $inventory->foc_link         = $fields['foc_link'];
            $inventory->cable_id         = $fields['cable_id'];
            $inventory->date_submitted   = date('Y-m-d', strtotime($fields['date_submitted']));
            $inventory->save();

            return response()->json([
                'status' => 200,
                'data' => null,
                'message' => 'Successfully updated.'
            ]);

        //   }
        //   catch (\Exception $e) 
        //   {
        //     return response()->json([
        //       'status' => 500,
        //       'data' => null,
        //       'message' => 'Error, please try again!'
        //     ]);
        //   }
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

    public function getPerFfs(){
        
        $data['ffs_team'] = array(
            "NFS_WESTNL_FFS1",
            "NFS_WESTNL_FFS2",
            "NFS_WESTNL_FFS3",
            "NFS_EASTNL_FFS4",
            "NFS_EASTNL_FFS5",
            "NFS_CENTRALNL_FFS6",
            "NFS_CENTRALNL_FFS7",
            "NFS_CENTRALNL_FFS8"
        );

        $data['actual_count_per_ffs_team']=array();
        $data['target_count_per_ffs']=array(38,37,11,70,33,47,60,48);
        $data['actual_percentage_per_ffs_team']=array();

        foreach($data['ffs_team'] as $key=>$ffsTeam){
            $count = FocInventory::select('*')->where('section_code', $ffsTeam)->count();
            array_push($data['actual_count_per_ffs_team'], $count);
            array_push($data['actual_percentage_per_ffs_team'], round(($count/$data['target_count_per_ffs'][$key])*100,2));
        }
        
        return $data;

    }
}
