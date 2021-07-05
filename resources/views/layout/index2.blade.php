<!DOCTYPE html>
<html lang="en" ng-app="myCrud">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>SAMPLE CRUD</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="{{URL::to('public/assets/modules/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{URL::to('public/assets/modules/fontawesome/css/all.min.css')}}">

    <!-- CSS Libraries -->
    <link rel="stylesheet" href="{{URL::to('public/assets/css/custom.css')}}">
    <link rel="stylesheet" href="{{URL::to('public/assets/modules/datatables/datatables.min.css')}}">
    <link rel="stylesheet" href="{{URL::to('public/assets/modules/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css')}}">

    <!-- Page Specific CSS Libraries -->
    <link rel="stylesheet" href="{{URL::to('public/assets/modules/jquery-selectric/selectric.css')}}">

    <!-- Template CSS -->
    <link rel="stylesheet" href="{{URL::to('public/assets/css/style.css')}}">
    <link rel="stylesheet" href="{{URL::to('public/assets/css/components.css')}}">

    <!-- Datatables -->
    <link rel="stylesheet" href="{{URL::to('public/node_modules/angular-datatables/dist/css/angular-datatables.min.css')}}">
    <link rel="stylesheet" href="{{URL::to('public/node_modules/datatables.net/css/buttons.dataTables.min.css')}}">

    <!-- General JS Scripts -->
    <script src="{{URL::to('public/assets/modules/jquery.min.js')}}"></script>

    <!-- JS Libraies -->
    <script src="{{URL::to('public/assets/modules/datatables/datatables.min.js')}}"></script>

    <!-- Additional plugins -->

    <!-- Angularjs -->
    <script type="text/javascript" src="{{URL::to('public/node_modules/angular/angular.min.js')}}"></script> 

    <!-- Router -->
    <script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-router/release/angular-ui-router.min.js')}}"></script> 

    <!-- angular-ui -->
    <script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js')}}"></script>

    <!-- DataTables -->
    <script type="text/javascript" src="{{URL::to('public/node_modules/angular-datatables/dist/angular-datatables.min.js')}}"></script>

    <!-- Sweet Alert -->
    <script type="text/javascript" src="{{URL::to('public/node_modules/angular-sweetalert/SweetAlert.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::to('public/node_modules/sweetalert/dist/sweetalert.min.js')}}"></script> 
    
    <base href="/crud/">
</head>

<body class="layout-3">
  <div>
    <div class="main-wrapper container" ng-controller="myCrudCtr as myCrudCtr">
      <div class="navbar-bg"></div>
      asdfasdf
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper" >
      <!-- Content Header (Page header) -->
      <table datatable="" dt-options="myCrudCtr.dtOptions" dt-columns="myCrudCtr.dtColumns" class="table table-bordered table-hover table-md" >
      </table>
      </div>

      <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2020
        </div>
        <div class="footer-right">
          
        </div>
      </footer>
    </div>
  </div>
    <script>
    (function(){
    'use strict';
    angular.module('myCrud',[
          'datatables'
        ])
        .controller('myCrudCtr', myCrudCtr)

        myCrudCtr.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
        function myCrudCtr(DTOptionsBuilder, DTColumnBuilder) {
      

            var vm = this;
            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/testurl',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('lastname').withTitle('Last name'),
                DTColumnBuilder.newColumn('suffix').withTitle('Suffix'),
                DTColumnBuilder.newColumn('firstname').withTitle('First name'),
                DTColumnBuilder.newColumn('middlename').withTitle('Middle name')
            ];
        };
    })();


    // 'use strict';
    // angular.module('myCrud', ['datatables']);

    // (function () {
    // 'use strict';
    //     angular.module('myCrud')
    //     .controller('myCrudCtr', myCrudCtr)

    //     function myCrudCtr(DTOptionsBuilder, DTColumnBuilder){
    //         var vm = this;
    //         vm.dtOptions = DTOptionsBuilder.newOptions()
    //             .withOption('ajax', {
    //             // Either you specify the AjaxDataProp here
    //             // dataSrc: 'data',
    //             url: 'api/testurl',
    //             type: 'GET'
    //         })
    //         // or here
    //         .withDataProp('data')
    //             .withOption('processing', true)
    //             .withOption('serverSide', true)
    //             .withPaginationType('full_numbers');
    //         vm.dtColumns = [ 
    //             DTColumnBuilder.newColumn('id').withTitle('ID'),
    //             DTColumnBuilder.newColumn('lastname').withTitle('Last name'),
    //             DTColumnBuilder.newColumn('suffix').withTitle('Suffix'),
    //             DTColumnBuilder.newColumn('firstname').withTitle('First name'),
    //             DTColumnBuilder.newColumn('middlename').withTitle('Middle name')
    //         ];

    //     }    
    // });

  

    </script>
</body>
</html>