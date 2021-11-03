<?php
  
namespace App\Imports;
  
use App\Models\Project;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
  
class ProjectsImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

    public function __construct()
    {
        Project::truncate();
    }


    public function model(array $row)
    {
 
        return new Project([
            'division'          => $row['division'],
            'section'           => $row['section'],
            'project_name'      => $row['project_name'],
            'project_type'      => $row['project_type'],
            'project_status'    => $row['project_status'],
        ]);

        // return $collection = Project::select(
        //     'id', 
        //     'division',
        //     'section',
        //     'project_name',
        //     'project_status',
        //     'project_type',
        // );
    }
}