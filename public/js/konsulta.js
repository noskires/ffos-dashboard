(function(){
    'use strict';
    angular.module('konsulta',[
          'ui.router',
          'ngSanitize',
          'dynamicNumber',
          'ui.bootstrap',
          'datatables',
          'chart.js',
          'oitozero.ngSweetAlert',
          'apexcharts'
        ])
        .config(Config)
        .controller('MainCtrl', MainCtrl)

        Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider', 'dynamicNumberStrategyProvider', 'ChartJsProvider'];
        function Config($stateProvider, $urlRouterProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider, dynamicNumberStrategyProvider, ChartJsProvider){
            console.log("App here!");
            $interpolateProvider.startSymbol('<%');
            $interpolateProvider.endSymbol('%>');
            $locationProvider.html5Mode(true);

            ChartJsProvider.setOptions({ colors : [ '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#803690', '#00ADF9'] });

            var main = {
                url: '/index',
                templateUrl: 'main.view'
            };
            
            $stateProvider
            .state('main-view', main)

            .state('dashboard1', {
                url: '/dashboard',
                controller: 'EmployeesCtrl as EmployeesCtrl',
                templateUrl: 'foc.view'
            })

            .state('dashboard', {
                url: '/dashboard/kpi/:year',
                controller: 'EmployeesCtrl as EmployeesCtrl',
                templateUrl: 'foc.view'
            })
            
            .state('dashboard_division', {
                url: '/dashboard/kpi/:year/:division',
                controller: 'DivisionsCtrl as DivisionsCtrl',
                templateUrl: 'division.view'
            })

            .state('dashboard_section', {
                url: '/dashboard/kpi/:year/:division/:section',
                controller: 'SectionsCtrl as SectionsCtrl',
                templateUrl: 'section.view'
            })

            .state('project_update', {
                url: '/project_update',
                controller: 'StaticCtrl as StaticCtrl',
                templateUrl: 'project_update.view'
            })

            // POI

            .state('poi', {
                url: '/dashboard/poi/:year',
                controller: 'PoiCtrl as PoiCtrl',
                templateUrl: 'poi.view'
            })

            // ACCESS TRANSPORT EQUIP
            .state('transport', {
                url: '/dashboard/transport/:year',
                controller: 'TransportCtrl as TransportCtrl',
                templateUrl: 'transport.view'
            })

            .state('access', {
                url: '/dashboard/access/:year',
                controller: 'AccessCtrl as AccessCtrl',
                templateUrl: 'access.view'
            })

            // FOC Inventory

            .state('foc-inventory', {
                url: '/dashboard/foc-inventory/:year',
                controller: 'FocInventoryCtrl as FocInventoryCtrl',
                templateUrl: 'foc.inventory.view'
            })

            // Billing

            .state('billing-fc', {
                url: '/dashboard/billing-fc/:year',
                controller: 'BillingCtrl as BillingCtrl',
                templateUrl: 'billing.fc.view'
            })

            .state('billing-fh', {
                url: '/dashboard/billing-fh/:year',
                controller: 'BillingCtrl as BillingCtrl',
                templateUrl: 'billing.fh.view'
            })

            // Scorecard

            .state('scorecard-fc', {
                url: '/dashboard/scorecard-fc/:year',
                controller: 'ScoreCardCtrl as ScoreCardCtrl',
                templateUrl: 'scorecard.fc.view'
            })

            .state('scorecard-fh', {
                url: '/dashboard/scorecard-fh/:year',
                controller: 'ScoreCardCtrl as ScoreCardCtrl',
                templateUrl: 'scorecard.fh.view'
            })

            // SECONDARY MTTR

            .state('secondary-mttr', {
                url: '/dashboard/secondary-mttr/:year',
                controller: 'SecondaryMttrCtrl as SecondaryMttrCtrl',
                templateUrl: 'secondary.mttr.view'
            })

            // .state('patients', {
            //     url: '/patients',
            //     controller: 'EmployeesCtrl as EmployeesCtrl',
            //     templateUrl: 'patients.view'
            // })

            // .state('registration', {
            //     url: '/registration',
            //     controller: 'EmployeesCtrl as EmployeesCtrl',
            //     templateUrl: 'registration.view'
            // })

            // .state('employee-details', {
            //     url: '/employee/:id/:actionType',
            //     controller: 'EmployeesCtrl as EmployeesCtrl',
            //     templateUrl: 'employees.view'
            // })

            $urlRouterProvider.otherwise('/index');

        }

        MainCtrl.$inject = ['$window','$http', '$stateParams', '$state'];
        function MainCtrl($window, $http, $stateParams, $state) {
            var vm = this;

            vm.routeTo = function(route){
                $window.location.href = route;
            };
        };
})();


 