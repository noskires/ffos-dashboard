(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('SecondaryMttrCtrl', SecondaryMttrCtrl) 

        SecondaryMttrCtrl.$inject = ['AccessTransportSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function SecondaryMttrCtrl(AccessTransportSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

 

            const primary = '#6993FF';
            const success = '#1BC5BD';
            const info = '#8950FC';
            const warning = '#FFA800';
            const danger = '#F64E60';
            const navyblue = '#05445E';
            const color_reserve_1 = '#2E93fA';
            const color_reserve_2 = '#66DA26';
            const color_reserve_3 = '#546E7A';
            const color_reserve_4 = '#E91E63';
            const color_reserve_5 = '#FF9800';
 

            const selected_year = 2021;

            vm.selected_year = $stateParams.year;

            vm.select_field_force = function(field_force){
                // alert(division) 

                // $state.go("dashboard_field_foce", { "field_foce": field_force});
            }

            vm.select_division = function(division){
                // alert(division) 
                if(division==""){
                    $state.go("dashboard", {"year":vm.selected_year});
                }else{
                    $state.go("dashboard_division", {"year":vm.selected_year, "division": division});
                }
                
            }

            

            vm.mttr_operational = {
            series: [{
                name: 'NL WEST',
                data: [1.1, 1.3, 1.1, 0.9, 0.9, 0.9, 0.8, 0.7]
              }, {
                name: 'NL EAST',
                data: [1.0, 1.0, 0.7, 0.7, 0.6, 0.7, 0.7, 0.5]
              }, {
                name: 'NL CENTRAL',
                data: [1.2, 1.1, 0.9, 1.0, 0.9, 0.8, 0.9, 0.6]
              }],
                chart: {
                height: 250,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                // type: 'datetime',
                categories: ["FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"]
              },
              tooltip: {
                x: {
                //   format: 'dd/MM/yy HH:mm'
                },
              },
            }

            vm.mttr_allin = {
                series: [
                    {
                    name: 'NL WEST',
                    data: [2.4, 2.5, 2.2, 1.9, 1.9, 1.8, 1.9, 2.0]
                  }, 
                  {
                    name: 'NL EAST',
                    data: [2.0, 1.9, 1.6, 1.5, 1.3, 1.6, 1.7, 1.6]
                  }, {
                    name: 'NL CENTRAL',
                    data: [2.9, 2.7, 2.0, 2.5, 2.6, 1.8, 1.9, 1.7]
                  }],
                    chart: {
                    height: 250,
                    type: 'area'
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                  xaxis: {
                    // type: 'datetime',
                    categories: ["FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"]
                  },
                  tooltip: {
                    x: {
                      format: 'dd/MM/yy HH:mm'
                    },
                  },
                }

                vm.mttr_summary = {
                    series: [{
                        name: 'FFS HANDLING',
                        data: [1.1, 1.2, 0.9, 0.9, 0.9, 0.8, 0.8, 0.6]
                      }, {
                        name: 'SDT CREATION',
                        data: [2.6, 2.5, 2.0, 2.2, 2.2, 1.8, 1.9, 1.8]
                      }],
                        chart: {
                        height: 250,
                        type: 'area'
                      },
                      dataLabels: {
                        enabled: false
                      },
                      stroke: {
                        curve: 'smooth'
                      },
                      xaxis: {
                        // type: 'datetime',
                        categories: ["FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"]
                      },
                      tooltip: {
                        x: {
                        //   format: 'dd/MM/yy HH:mm'
                        },
                      },
                    }
 
            
        }

})();