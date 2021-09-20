<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Project extends Model {
    
    protected $primaryKey = 'id';
    protected $table = "projects";

    protected $fillable = [
        'division',
        'section',
        'project_name',
        'project_type',
        'project_status'
    ];

}
