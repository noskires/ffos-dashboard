    @extends('layout.master')
@section('additionalStyles')
@endsection
@section('content')

<!-- Employees -->
<script type="text/ng-template" id="patients.view">
    @include('employees.employees')
</script>

<script type="text/ng-template" id="foc.view">
@include('employees.employees')
</script>


@endsection
@section('additionalScripts')
@endsection