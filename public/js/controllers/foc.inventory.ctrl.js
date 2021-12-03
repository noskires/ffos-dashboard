(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('FocInventoryCtrl', FocInventoryCtrl)
        .controller('AddFocInventoryCtrl', AddFocInventoryCtrl)
        .controller('EditFocInventoryCtrl', EditFocInventoryCtrl)

        FocInventoryCtrl.$inject = ['FocInventorySrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function FocInventoryCtrl(FocInventorySrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
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

            // Start Automation here

            vm.edit = function(id){
 

              FocInventorySrvcs.list({id:id, inventory_code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-foc-inventory-modal',
                            controller: 'EditFocInventoryCtrl',
                            controllerAs: 'FocInventoryCtrl',
                            backdrop: 'static',
                            keyboard  : false,
                            resolve :{
                                collection: function () {
                                    return {
                                        data: vm.list
                                    };
                                }
                            },
                            // size: 'lg'
                        });

                        return false;
                    }
                }, function (){ alert('Bad Request!!!') })
            }

            vm.add = function(){
                
                $uibModal.open({
                    templateUrl: 'add-foc-inventory-modal',
                    controller: 'AddFocInventoryCtrl',
                    controllerAs: 'FocInventoryCtrl',
                    backdrop: 'static',
                    keyboard  : false,
                    resolve :{
                        collection: function () {
                            return {
                                data: null
                            };
                        }
                    },
                    // size: 'lg'
                });
            }


            vm.renderActions = function(data) {
              return ' <a nowrap="nowrap" href="#" ng-click="FocInventoryCtrl.edit(\'' + data + '\');"> Edit </a>';
              // return ' <a nowrap="nowrap" href="#" ng-click="AsOfDateCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="AsOfDateCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/inventory/foc',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('section_code').withTitle('Section'),
                DTColumnBuilder.newColumn('inventory_type').withTitle('Type'),
                DTColumnBuilder.newColumn('foc_link').withTitle('FOC Link'),
                DTColumnBuilder.newColumn('cable_id').withTitle('Cable ID'),
                DTColumnBuilder.newColumn('date_submitted').withTitle('Date Submitted'),
                DTColumnBuilder.newColumn('remarks').withTitle('Remarks'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];

            

            // End Automation here

            vm.sections = [
                "WESTNL_FFS1",
                "WESTNL_FFS2",
                "WESTNL_FFS3",
                "EASTNL_FFS4",
                "EASTNL_FFS5",
                "CENTRALNL_FFS6",
                "CENTRALNL_FFS7",
                "CENTRALNL_FFS8", 
            ];

            vm.value_target = [38,37,11,70,33,47,60,48];
            vm.value_actual = [20,22,7,45,16,20,54,40];
            vm.series = [];
            vm.overall_target = 0;
            vm.overall_actual = 0;
            vm.overall_completion = 0;

            vm.west_target = vm.value_target[0]+vm.value_target[1]+vm.value_target[2];
            vm.west_actual = vm.value_actual[0]+vm.value_actual[1]+vm.value_actual[2];
            vm.west_completion = ((vm.west_actual/vm.west_target)*100).toFixed(0);

            vm.east_target = vm.value_target[3]+vm.value_target[4];
            vm.east_actual = vm.value_actual[3]+vm.value_actual[4];
            vm.east_completion = ((vm.east_actual/vm.east_target)*100).toFixed(0);

            vm.central_target = vm.value_target[5]+vm.value_target[6]+vm.value_target[7];
            vm.central_actual = vm.value_actual[5]+vm.value_actual[6]+vm.value_actual[7];
            vm.central_completion = ((vm.central_actual/vm.central_target)*100).toFixed(0);
            
            angular.forEach(vm.sections, function(value, key) {
                
                vm.co_data = {
                    x:value,
                    y:vm.value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.overall_target = vm.overall_target + vm.value_target[key];
                vm.overall_actual = vm.overall_actual + vm.value_actual[key];
                vm.overall_completion = ((vm.overall_actual/vm.overall_target)*100).toFixed(0);

                vm.series.push(vm.co_data); 
            });
            
            console.log(vm.series)

            vm.distribution_per_section = {
                series: [
                    {
                      name: 'Actual',
                      data: vm.series
                    }
                  ],
                    chart: {
                    height: 250, 
                    type: 'bar', 
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: '100%',
                      horizontal: true,
                    }  
                  },
                  colors: ['#00E396'],
                //   dataLabels: {
                //     enabled: true
                //   },
                  dataLabels: {
                    fontSize: '8px',
                    formatter: function(val, opt) {
                      const goals =
                        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                          .goals
                  
                      if (goals && goals.length) {
                        return `${val} / ${goals[0].value}`
                      }
                      return val
                    }
                  },
                  legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Target'],
                    markers: {
                      fillColors: ['#00E396', '#775DD0']
                    }
                  }
            }
 
            vm.overall_status = {
                series: [65],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        },
                        color: "red",
                    },
                },
                labels: ['OVERALL'],
            };

            vm.dfon_status = {
                series: [57],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['DFON'],
            };

            vm.ief_status = {
                series: [76],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['IEF'],
            };

            vm.fitl_status = {
                series: [41],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['FITL'],
            };

            vm.distribution_per_division = {
                series: [
                    {
                      name: 'Actual',
                      data: [
                        {
                          x: 'NL WEST',
                          y: 49,
                          goals: [
                            {
                              name: 'Expected',
                              value: 86,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'NL EAST',
                          y: 61,
                          goals: [
                            {
                              name: 'Expected',
                              value: 103,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'NL CENTRAL',
                          y: 114,
                          goals: [
                            {
                              name: 'Expected',
                              value: 155,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                    
                         
                      ]
                    }
                  ],
                    chart: {
                    height: 250,
                    type: 'bar'
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: '60%'
                    }
                  },
                  colors: ['#00E396'],
                  // dataLabels: {
                  //   enabled: false
                  // },
                  dataLabels: {
                    fontSize: '8px',
                    formatter: function(val, opt) {
                      const goals =
                        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                          .goals
                  
                      if (goals && goals.length) {
                        return ((val/goals[0].value)*100).toFixed(0)+"%"
                      }
                      return val
                    }
                  },
                  legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                      fillColors: ['#00E396', '#775DD0']
                    }
                  }
            }
 
            
        }

        AddFocInventoryCtrl.$inject = ['collection', 'FocInventorySrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
            function AddFocInventoryCtrl(collection, FocInventorySrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
                var vm = this;
                var data = {};

                // vm.collection = collection.data;
                // console.log(vm.collection)
    
    
                vm.addDetailsBtn = function(data){
                    
                  FocInventorySrvcs.store(data).then (function (response) {
                        if(response.data.status == 200){
                            // alert('Successfully Updated!')
                            SweetAlert.swal("Success!", "Successfully saved!", "success");
                            $state.reload();
                            vm.close()
                        }
                    }, function (){ alert('Bad Request!!!') })
                }

                vm.close = function() {
                    $uibModalInstance.close();
                };

            }

            EditFocInventoryCtrl.$inject = ['collection', 'FocInventorySrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
              function EditFocInventoryCtrl(collection, FocInventorySrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
                  var vm = this;
                  var data = {};

                  vm.collection = collection.data;
                  console.log(vm.collection)
      

                  collection.data.date_submitted = new Date(collection.data.date_submitted);
      
      
                  vm.updateDetailsBtn = function(data){
                      
                    FocInventorySrvcs.update(data).then (function (response) {
                          if(response.data.status == 200){
                              // alert('Successfully Updated!')
                              SweetAlert.swal("Success!", "Successfully updated!", "success");
                              $state.reload();
                              vm.close()
                          }
                      }, function (){ alert('Bad Request!!!') })
                  }

                  vm.close = function() {
                      $uibModalInstance.close();
                  };

              }

})();