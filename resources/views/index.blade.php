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

		<link rel="shortcut icon" href="{{URL::to('public/assets/media/logos/favicon.ico')}}" />

		<base href="/ffos-kpi/">
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
		<script src="public/assets/js/pages/features/forms/widgets/select2.js')}}"></script>
		<script src="public/assets/js/pages/features/forms/widgets/input-mask.js')}}"></script>		
		<script src="public/assets/js/pages/features/forms/validation/form-controls.js')}}"></script>					
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
		

		<script type="text/javascript" src="{{URL::to('public/node_modules/apexcharts-angularjs-master/dist/apexcharts.angularjs.min.js')}}"></script>

		<!-- <script type="text/javascript" src="{{URL::to('public/node_modules/charts/apexcharts.js')}}"></script>
		<script type="text/javascript" src="{{URL::to('public/node_modules/charts/widgets.js')}}"></script> -->


		<script src="{{URL::to('public/js/konsulta.js')}}"></script>

		<!-- Controllers -->
		<script src="{{URL::to('public/js/controllers/employees.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/divisions.ctrl.js')}}"></script>
		<script src="{{URL::to('public/js/controllers/sections.ctrl.js')}}"></script>

		<!-- Services -->
		<script src="{{URL::to('public/js/services/employees.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/divisions.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/sections.srvcs.js')}}"></script>
		<script src="{{URL::to('public/js/services/foc.srvcs.js')}}"></script>
		<!-- end:: Additional Script -->

		<script>


// 			var _demo5 = function () {
// 				const apexChart = "#chart_5";
// 				var options = {
// 					series: [{
// 						name: 'NODE MTTR',
// 						type: 'column',
// 						data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
// 					}, {
// 						name: 'FOC MTTR',
// 						type: 'column',
// 						data: [10.92, 10.38, 9.22, 9.43, 10.49, 10.1070]
// 					}, {
// 						name: 'NET. AVA',
// 						type: 'line',
// 						data: [99.84, 99.87, 99.87, 99.84, 99.81, 99.85]
// 					}],
// 					chart: {
// 						height: 250,
// 						type: 'line',
// 						stacked: false
// 					},
// 					dataLabels: {
// 						enabled: false
// 					},
// 					stroke: {
// 						width: [1, 1, 4]
// 					},
// 					title: {
// 						text: 'Jan - May 2021 Data',
// 						align: 'left',
// 						offsetX: 110
// 					},
// 					dataLabels: {
//           enabled: true,
//         },
// 					xaxis: {
// 						categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'YTD'],
// 					},
// 					yaxis: [
// 						{
// 							axisTicks: {
// 								show: true,
// 							},
// 							axisBorder: {
// 								show: true,
// 								color: primary
// 							},
// 							labels: {
// 								style: {
// 									colors: primary,
// 								}
// 							},
// 							title: {
// 								text: "NODE MTTR",
// 								style: {
// 									color: primary,
// 								}
// 							},
// 							tooltip: {
// 								enabled: true
// 							},
// 							min: 0,
// 							max: 15,
// 							tickAmount: 5,
// 							forceNiceScale: false,

							
// 						},
// 						{
// 							seriesName: 'Income',
// 							opposite: true,
// 							axisTicks: {
// 								show: true,
// 							},
// 							axisBorder: {
// 								show: true,
// 								color: success
// 							},
// 							labels: {
// 								style: {
// 									colors: success,
// 								}
// 							},
// 							title: {
// 								text: "FOC MTTR",
// 								style: {
// 									color: success,
// 								}
// 							},
// 							min: 0,
// 							max: 15,
// 							tickAmount: 5,
// 							forceNiceScale: false,
// 						},
// 						{
// 							seriesName: 'Revenue',
// 							opposite: true,
// 							axisTicks: {
// 								show: true,
// 							},
// 							axisBorder: {
// 								show: true,
// 								color: warning
// 							},
// 							labels: {
// 								style: {
// 									colors: warning,
// 								},
// 							},
// 							title: {
// 								text: "NET. AVA",
// 								style: {
// 									color: warning,
// 								}
// 							},
// 							forceNiceScale: false,
							
// 							min: 99,
// 							max: 100,
// 							tickAmount: 5,
// 							labels: {
// 								formatter: (value) => value.toFixed(2) +'%',
// 								style: {
// 									colors: warning,
// 								},
// 							},

							
// 						},
// 					],
// 					tooltip: {
// 						fixed: {
// 							enabled: false,
// 							// position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
// 							// offsetY: 30,
// 							offsetX: 160
// 						},
// 					},
// 					legend: {
// 						horizontalAlign: 'center',
// 						// offsetX: 40
// 					}
// 				};

// 				var chart = new ApexCharts(document.querySelector(apexChart), options);
// 				chart.render();
// 			}






// // 	var options123 = {
// //   chart: {
// //     type: 'bar'
// //   },
// //   series: [{
// //     name: 'sales',
// //     data: [30,40,45,50,49,60,70,91,125]
// //   }],
// //   xaxis: {
// //     categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
// //   }
// // }

// // var chart123 = new ApexCharts(document.querySelector("#chart"), options123);

// // chart123.render();

// var _demo11 = function () {
//                         const apexChart = "#chart_11";
//                         var options = {
//                             series: [154, 56, 41, 19, 18, 62],
//                             // series: vm.top_contributors_number_of_tickets_node,
//                             chart: {
//                                 width: 500,
//                                 type: 'donut',
//                             },
//                             labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
//                             responsive: [{
//                                 breakpoint: 480,
//                                 options: {
//                                     chart: {
//                                         width: 200
//                                     },
//                                     legend: {
//                                         position: 'top'
//                                     }
//                                 }
//                             }],
//                             colors: [primary, success, warning, danger, info, navyblue]
//                         };
                
//                         var chart = new ApexCharts(document.querySelector(apexChart), options);
//                         chart.render();
//                     }


// 	 	var _demo12 = function () {
// 		const apexChart = "#chart_12";
// 		var options = {
// 			series: [44, 55, 13, 43, 22, 30],
// 			chart: {
// 				width: 500,
// 				type: 'donut',
// 			},
// 			labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
// 			responsive: [{
// 				breakpoint: 480,
// 				options: {
// 					chart: {
// 						width: 200
// 					},
// 					legend: {
// 						position: 'top'
// 					}
// 				}
// 			}],
// 			colors: [primary, success, warning, danger, info, navyblue]
// 		};

// 		var chart = new ApexCharts(document.querySelector(apexChart), options);
// 		chart.render();
// 	}
 
	 
// 	// Private functions
// 	var _demo1 = function () {
// 		const apexChart = "#chart_1";
//         var options = {
//           series: [
//           {
//             name: "WEST NL",
//             data: [28, 29, 33, 36, 32, 32]
//           },
//           {
//             name: "EAST NL",
//             data: [12, 11, 14, 18, 17, 13]
//           },
// 		  {
//             name: "CENTRAL NL",
//             data: [14, 13, 12, 11, 11, 15]
//           }
//         ],
//           chart: {
//           height: 350,
//           type: 'line',
//           dropShadow: {
//             enabled: true,
//             color: '#000',
//             top: 18,
//             left: 7,
//             blur: 10,
//             opacity: 0.2
//           },
//           toolbar: {
//             // show: false
//           }
//         },
//         colors: ['#77B6EA', '#545454', warning],
//         dataLabels: {
//           enabled: true,
//         },
//         stroke: {
//           curve: 'smooth'
//         },
//         title: {
//           text: 'NET AVA PER DIVISION',
//           align: 'left'
//         },
//         grid: {
//           borderColor: '#e7e7e7',
//           row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         markers: {
//           size: 1
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//           title: {
//             text: 'Month'
//           }
//         },
//         yaxis: {
//           title: {
//             text: 'Net Ava %'
//           },
//           min: 5,
//           max: 40
//         },
//         legend: {
//           position: 'bottom',
//           horizontalAlign: 'center',
//         //   floating: true,
//         //   offsetY: -25,
//         //   offsetX: -5
//         }
//         };

// 		var chart = new ApexCharts(document.querySelector(apexChart), options);
// 		chart.render();
	// }
	
 
		</script>
 

	</body>

	<!--end::Body-->
</html>