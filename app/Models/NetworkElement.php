<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use DB;

class NetworkElement extends Model {
    
    protected $primaryKey = 'id';
    protected $table = "ne";

    public function division(){
    	return $this->belongsTo('App\Division', 'division_code', 'division_code');
    }

    // public function division(){
    // 	return $this->hasOne('App\Models\Division', 'division_id', 'division_id');
    // }
    
    public function scopeDefaultFields($query){
        $query->select(
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
        });
    }

    public function scopeWhereFields($query, $data){

        if($data['id']){
            $query->where('ne.id', $data['id']);
        }
          
        if($data['section_code']){
            $query->where('ne.section_code', 'like', $data['section_code']);
        }
        
        if($data['division_code']){
            $query->where('ne.division_code', $data['division_code']);
        }

        if($data['year']){
            $query->where('ne.year', 'like', $data['year']);
        }

    }
}
