<!-- script init-->

<!-- General JS Scripts -->
<script src="public/assets/modules/jquery.min.js"></script>
<script src="public/assets/modules/popper.js"></script>
<script src="public/assets/modules/tooltip.js"></script>
<script src="public/assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
<script src="public/assets/modules/moment.min.js"></script>
<script src="public/assets/js/stisla.js"></script>

<!-- JS Libraies -->
<script src="public/assets/modules/datatables/datatables.min.js"></script>
<!-- <script src="public/assets/modules/datatables/DataTables-1.10.16/js/dataTables.bootstrap4.min.js"></script>  -->

<!-- Page Specific JS File -->
<script src="public/assets/modules/jquery-selectric/jquery.selectric.min.js"></script>  

<!-- Template JS File -->
<script src="public/assets/js/scripts.js"></script>
<script src="public/assets/js/custom.js"></script>
<!-- <script src="public/assets/js/page/modules-datatables.js"></script> -->

<!-- Additional plugins -->

<!-- Angularjs -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular/angular.min.js')}}"></script> 

<!-- Router -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-router/release/angular-ui-router.min.js')}}"></script> 

<!-- Sanitize -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-sanitize/angular-sanitize.min.js')}}"></script> 

<!-- Angular-dynamic-number -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-dynamic-number/release/dynamic-number.min.js')}}"></script>

<!-- bootstrap -->
<script type="text/javascript" src="{{URL::to('public/node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>

<!-- angular-ui -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js')}}"></script>
<!-- <script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls-3.0.6.min.js')}}"></script> -->

<!-- DataTables -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-datatables/dist/angular-datatables.min.js')}}"></script>

<!-- Sweet Alert -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-sweetalert/SweetAlert.min.js')}}"></script>
<script type="text/javascript" src="{{URL::to('public/node_modules/sweetalert/dist/sweetalert.min.js')}}"></script> 

<!-- Chart Js -->
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-chart.js/chart.min.js')}}"></script>
<script type="text/javascript" src="{{URL::to('public/node_modules/angular-chart.js/angular-chart.min.js')}}"></script>

<!-- Main App -->
<script src="{{URL::to('public/js/konsulta.js')}}"></script>

<!-- Controllers -->
<script src="{{URL::to('public/js/controllers/employees.ctrl.js')}}"></script>

<!-- Services -->
<script src="{{URL::to('public/js/services/employees.srvcs.js')}}"></script>

@yield('additionalScripts')