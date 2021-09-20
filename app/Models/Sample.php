<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Sample extends Model {
    
    protected $primaryKey = 'id';
    protected $table = "sample";

    protected $fillable = [
        'name',
        'email'
    ];
}
