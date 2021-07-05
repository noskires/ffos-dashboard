<?php

namespace App\Http\Controllers;
 
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Input;

use App\Models\Patient;
use DB;
use Requests;
use DataTables;

class PatientController extends Controller
{
    public function index(){
        return view('index');
    }
    
    public function show(Request $request) {

        // $data = array(
        //     'id'=>$request->input('id')
        // );

        // $patient = Patient::select('id', 'lname', 'fname', 'mname');

        // if ($data['id']){
        //     $patient = $patient->where('id', $data['id']);
        // }

        // $patient = $patient->get();

        // return response()->json([
        //     'status'=>200,
        //     'data'=>$patient,
        //     'count'=>$patient->count(),
        //     'message'=>''
        // ],200,[], JSON_NUMERIC_CHECK);


        $data = array(
            'id'=>$request->input('id')
        );

        $patient = Patient::select('id', 'lname', 'fname', 'mname');
        return DataTables::of($patient)->make(true);
    }

    public function store(Request $request){

        $fields = Requests::post();

        $transaction = DB::transaction(function($field) use($fields){
            // try{

                $patient = new Patient;
                $patient->lname    = $fields['lname'];
                $patient->fname    = $fields['fname'];
                $patient->mname    = $fields['mname'];
                $patient->save();

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

        $fields = Input::post();

        $transaction = DB::transaction(function($field) use($fields){
        try{

            $patient = Patient::where('id', $fields['id'])->first();
            $patient->lname    = $fields['lname'];
            $patient->fname    = $fields['fname'];
            $patient->mname    = $fields['mname'];
            $patient->save();

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

    public function remove(Request $request){

	    $fields = Input::post();

	    $transaction = DB::transaction(function($field) use($fields) {
	    try{

			Patient::where('id', $fields['id'])->firstOrFail()->delete();

	        return response()->json([
	            'status' => 200,
	            'data' => 'null',
	            'message' => 'Successfully deleted.'
	        ]);

	        }
            catch (\Exception $e) {

                return response()->json([
                    'status' => 500,
                    'data' => 'null',
                    'message' => 'Error, please try again!'
                ]);
            }
	    });

   	 	return $transaction;
  	}

}
