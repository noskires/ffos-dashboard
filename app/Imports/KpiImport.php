<?php
  
namespace App\Imports;
  
use App\Models\Foc;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
  
class KpiImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

    public function __construct()
    {
        Foc::truncate();
    }


    public function model(array $row)
    {
 
        return new Foc([
            'tt_number'             => $row['tt_number'],
            'duration'              => $row['duration'],
            'root_cause'            => $row['root_cause'],
            'is_service_affecting'     => $row['is_service_affecting'],
            'new_node_owner'        => $row['new_node_owner'],
            'month'                 => $row['month'],
            'day'                   => $row['day'],
            'week_text'             => $row['week_text'],
            'region'                => $row['region'],
            'division'              => $row['division'],
            'week_number'           => $row['week_number'],
            'year'                  => $row['year'],
            'ticket_type'           => $row['ticket_type'],
            'd'                     => $row['d'],
        ]);

    }
}