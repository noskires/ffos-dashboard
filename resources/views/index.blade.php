<!DOCTYPE html>
<html lang="en" ng-app="konsulta">

	<!--begin::Head-->
	<head>
 
		<meta charset="utf-8" />
		<title>North Luzon</title>
		<meta name="description" content="Updates and statistics" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />

		<!--end::Fonts-->

		<!--begin::Page Vendors Styles(used by this page)-->

		<!--end::Page Vendors Styles-->

		<!--begin::Global Theme Styles(used by all pages)-->
		<link href="{{URL::to('public/assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{URL::to('public/assets/plugins/custom/prismjs/prismjs.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{URL::to('public/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{URL::to('public/assets/css/style.mykee.css')}}" rel="stylesheet" type="text/css" />
		<!--end::Global Theme Styles-->

		<!--begin::Layout Themes(used by all pages)-->

		<!--end::Layout Themes-->
		<!--begin::Datatables-->
		<link href="{{URL::to('public/assets/plugins/custom/datatables/datatables.bundle.css')}}" rel="stylesheet" type="text/css" />
		<!--end::Datatables-->

		<link rel="shortcut icon" href="{{URL::to('public/assets/media/logos/nfs2.PNG')}}" />
		@if(Config::get('defaults.default.is_local')==1)
		<base href="/ffos-kpi/">
		@else
		<base href="/">
		@endif
	</head>

	<!--end::Head-->

	<!--begin::Body-->
	<body id="kt_body" class="page-loading-enabled page-loading header-fixed header-mobile-fixed subheader-enabled page-loading">

		@include('partials._page-loader');
		
		@include('layout');

		@include('partials._extras.offcanvas.quick-user');

		@include('partials._extras.offcanvas.quick-panel');

		@include('partials._extras.chat');

		@include('partials._extras.scrolltop');
		<script>
			var HOST_URL = "https://preview.keenthemes.com/keen/theme/tools/preview";
		</script>

		<!--begin::Global Config(global config for global JS scripts)-->
		<script>
			var KTAppSettings = {
				"breakpoints": {
					"sm": 576,
					"md": 768,
					"lg": 992,
					"xl": 1200,
					"xxl": 1200
				},
				"colors": {
					"theme": {
						"base": {
							"white": "#ffffff",
							"primary": "#0BB783",
							"secondary": "#E5EAEE",
							"success": "#1BC5BD",
							"info": "#8950FC",
							"warning": "#FFA800",
							"danger": "#F64E60",
							"light": "#F3F6F9",
							"dark": "#212121"
						},
						"light": {
							"white": "#ffffff",
							"primary": "#D7F9EF",
							"secondary": "#ECF0F3",
							"success": "#C9F7F5",
							"info": "#EEE5FF",
							"warning": "#FFF4DE",
							"danger": "#FFE2E5",
							"light": "#F3F6F9",
							"dark": "#D6D6E0"
						},
						"inverse": {
							"white": "#ffffff",
							"primary": "#ffffff",
							"secondary": "#212121",
							"success": "#ffffff",
							"info": "#ffffff",
							"warning": "#ffffff",
							"danger": "#ffffff",
							"light": "#464E5F",
							"dark": "#ffffff"
						}
					},
					"gray": {
						"gray-100": "#F3F6F9",
						"gray-200": "#ECF0F3",
						"gray-300": "#E5EAEE",
						"gray-400": "#D6D6E0",
						"gray-500": "#B5B5C3",
						"gray-600": "#80808F",
						"gray-700": "#464E5F",
						"gray-800": "#1B283F",
						"gray-900": "#212121"
					}
				},
				"font-family": "Poppins"
			};
		</script>
 

		<!--end::Global Config-->

		<!--begin::Global Theme Bundle(used by all pages)-->
		<script src="{{URL::to('public/assets/plugins/global/plugins.bundle.js')}}"></script>
		<script src="{{URL::to('public/assets/plugins/custom/prismjs/prismjs.bundle.js')}}"></script>
		<script src="{{URL::to('public/assets/js/scripts.bundle.js')}}"></script>
		<script src="{{URL::to('public/assets/js/scripts.mykee.js')}}"></script>
		<!--end::Global Theme Bundle-->
		
		<!--begin::Page Vendors(used by this page)-->
		
		<!--end::Page Vendors-->

		<!--begin::Page Scripts(used by this page)-->
		<!--end::Page Scripts-->

		<!-- begin::Form Scripts -->
		<script src="{{URL::to('public/assets/js/pages/features/forms/widgets/select2.js')}}"></script>
		<script src="{{URL::to('public/assets/js/pages/features/forms/widgets/input-mask.js')}}"></script>		
		<script src="{{URL::to('public/assets/js/pages/features/forms/validation/form-controls.js')}}"></script>					
		<!-- end::Form Scripts -->

		<!-- begin::ktDatatable Script -->
		<script src="{{URL::to('public/assets/js/pages/features/datatables/basic/scrollable.js')}}"></script>
		<script src="{{URL::to('public/assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
		<!-- end::ktDatatable Script -->

		<!-- begin:: Additional Script -->

		<script type="text/javascript" src="{{URL::to('public/node_modules/datatables/datatables.min.js')}}"></script>
		
		<!-- Angularjs -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular/angular.min.js')}}"></script> 

		<!-- Router -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-router/release/angular-ui-router.min.js')}}"></script> 

		<!-- Sanitize -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-sanitize/angular-sanitize.min.js')}}"></script> 

		<!-- Angular-dynamic-number -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-dynamic-number/release/dynamic-number.min.js')}}"></script>
	 
		<!-- angular-ui -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js')}}"></script>

		<!-- DataTables -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-datatables/dist/angular-datatables.min.js')}}"></script>

		<!-- Sweet Alert -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-sweetalert/SweetAlert.min.js')}}"></script>
		<script type="text/javascript" src="{{URL::to('public/node_modules/sweetalert/dist/sweetalert.min.js')}}"></script> 

		<!-- Chart Js -->
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-chart.js/chart.min.js')}}"></script>
		<script type="text/javascript" src="{{URL::to('public/node_modules/angular-chart.js/angular-chart.min.js')}}"></script>
		
		<!-- apexcharts -->
		
		<script type="text/javascript" src="{{URL::to('public/node_modules/charts/apexcharts.min.js')}}"></script>
		<script type="text/javascript" src="{{URL::to('public/node_modules/apexcharts-angularjs-master/dist/apexcharts.angularjs.min.js')}}"></script>

		
		<!-- <script type="text/javascript" src="{{URL::to('public/node_modules/charts/widgets.js')}}"></script> -->


		<script src="{{URL::to('public/js/konsulta.js')}}"></script>

		<!-- Controllers -->
		<script src="{{URL::to('public/js/controllers/employees.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/divisions.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/sections.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/poi.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/transport.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/access.ctrl.js')}}"></script>

		<script src="{{URL::to('public/js/controllers/static.pages.ctrl.js')}}"></script>
		
		<!-- Services -->
		<script src="{{URL::to('public/js/services/employees.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/divisions.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/sections.srvcs.js')}}"></script>

		<script src="{{URL::to('public/js/services/static.pages.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/foc.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/poi.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/access.transport.srvcs.js')}}"></script>

		<!-- end:: Additional Script -->


	</body>

	<!--end::Body-->
</html>