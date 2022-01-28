<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Division extends Model {
    
    protected $primaryKey = 'id';
    protected $table = "divisions";

    public function networkElement(){
    	return $this->hasOne('App\Models\NetworkElement', 'division_code', 'division_code');
    }
}
