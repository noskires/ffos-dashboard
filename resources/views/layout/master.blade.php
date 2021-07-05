<!DOCTYPE html>
<html lang="en" ng-app="konsulta">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>SAMPLE CRUD</title>

  <!-- General CSS Files -->
  @include('layout.styles')
  
  <style type="text/css">
    label{
      color:black;
    }
    
    .fade.in {
      opacity: 1;
    }

    .modal.in .modal-dialog {
      -webkit-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    .modal-backdrop.in {
      filter: alpha(opacity=50);
      opacity: .5;
    }

    @media (min-width: 768px) {
      .modal-xlg {
        width: 90%;
        max-width:1200px;
      }
    }
 
#cover-spin {
    position:fixed;
    width:100%;
    left:0;right:0;top:0;bottom:0;
    background-color: rgba(255,255,255,0.7);
    z-index:9999; 
}

@-webkit-keyframes spin {
	from {-webkit-transform:rotate(0deg);}
	to {-webkit-transform:rotate(360deg);}
}

@keyframes spin {
	from {transform:rotate(0deg);}
	to {transform:rotate(360deg);}
}

#cover-spin::after {
    content:'';
    display:block;
    position:absolute;
    left:48%;top:40%;
    width:40px;height:40px;
    border-style:solid;
    border-color:black;
    border-top-color:transparent;
    border-width: 4px;
    border-radius:50%;
    -webkit-animation: spin .8s linear infinite;
    animation: spin .8s linear infinite;
}

  </style>

  <base href="/laravel8/">
</head>

<body class="layout-3">
  <div id="app">
    <div class="main-wrapper container" ng-controller="MainCtrl as mc" ng-cloak>
      <div class="navbar-bg"></div>
      <!-- Header -->
      <!-- Header -->
      
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
      <!-- Content Header (Page header) -->
        @yield('content')
      <div ui-view></div>
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

  @include('layout.scripts')
</body>
</html>