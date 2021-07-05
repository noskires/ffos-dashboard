@if(Config::get('defaults.default.is_local')==1)

<link rel="stylesheet" href="{{URL::to('assets/modules/bootstrap/css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{URL::to('assets/modules/fontawesome/css/all.min.css')}}">

<!-- CSS Libraries -->
<link rel="stylesheet" href="{{URL::to('assets/css/custom.css')}}">
<link rel="stylesheet" href="{{URL::to('assets/modules/datatables/datatables.min.css')}}">
<link rel="stylesheet" href="{{URL::to('assets/modules/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css')}}">

<!-- Page Specific CSS Libraries -->
<link rel="stylesheet" href="{{URL::to('assets/modules/jquery-selectric/selectric.css')}}">

<!-- Template CSS -->
<link rel="stylesheet" href="{{URL::to('assets/css/style.css')}}">
<link rel="stylesheet" href="{{URL::to('assets/css/components.css')}}">

<!-- Datatables -->
<link rel="stylesheet" href="{{URL::to('node_modules/angular-datatables/dist/css/angular-datatables.min.css')}}">
<link rel="stylesheet" href="{{URL::to('node_modules/datatables.net/css/buttons.dataTables.min.css')}}">

@else

<link rel="stylesheet" href="{{asset('public/assets/modules/bootstrap/css/bootstrap.min.css')}}"> 
<link rel="stylesheet" href="{{asset('public/assets/modules/fontawesome/css/all.min.css')}}">

<!-- CSS Libraries -->
<link rel="stylesheet" href="{{asset('public/assets/css/custom.css')}}">
<link rel="stylesheet" href="{{asset('public/assets/modules/datatables/datatables.min.css')}}">
<link rel="stylesheet" href="{{asset('public/assets/modules/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css')}}">

<!-- Page Specific CSS Libraries -->
<link rel="stylesheet" href="{{asset('public/assets/modules/jquery-selectric/selectric.css')}}">

<!-- Template CSS -->
<link rel="stylesheet" href="{{asset('public/assets/css/style.css')}}">
<link rel="stylesheet" href="{{asset('public/assets/css/components.css')}}">

<!-- Datatables -->
<link rel="stylesheet" href="{{URL::to('public/node_modules/angular-datatables/dist/css/angular-datatables.min.css')}}">
<link rel="stylesheet" href="{{URL::to('public/node_modules/datatables.net/css/buttons.dataTables.min.css')}}">

<!-- Sweet Alert -->
<link rel="stylesheet" type="text/css" href="{{URL::to('public/node_modules/sweetalert/dist/sweetalert.css')}}"> 



@endif

@yield('additionalScripts')