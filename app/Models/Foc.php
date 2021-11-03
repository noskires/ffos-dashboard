<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Foc extends Model {
    
    protected $primaryKey = 'id';
    protected $table = "foc_tbl";

    protected $fillable = [
        'tt_number',
        'duration',
        'root_cause',
        'is_service_affecting',
        'new_node_owner',
        'month',
        'day',
        'week_text',
        'region',
        'division',
        'week_number',
        'year',
        'ticket_type',
        'd',
    ];

}
