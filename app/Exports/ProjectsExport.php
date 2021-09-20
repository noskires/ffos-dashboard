<?php
  
  
namespace App\Exports;
use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromCollection;
 
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

use DB;

class ProjectsExport implements FromQuery, WithHeadings, ShouldAutoSize
{
    use Exportable;

    public function headings(): array{
        return [
            'ID',
            'Division',
            'Section',
            'Project Name',
            'Project Status',
            'Project Type'
        ];
    }

    public function query()
    {
        return $collection = Project::select(
            'id', 
            'division',
            'section',
            'project_name',
            'project_status',
            'project_type',
        );
    }
}

