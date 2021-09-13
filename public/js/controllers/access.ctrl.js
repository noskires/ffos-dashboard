(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('AccessCtrl', AccessCtrl) 

        AccessCtrl.$inject = ['AccessTransportSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function AccessCtrl(AccessTransportSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
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
            vm.co_access_value_target = [156,126,56,174,83,174,139,72];
            vm.co_access_value_actual = [156,122,55,174,83,156,139,70];
            vm.co_access_series = [];
            vm.co_access_overall_target = 0;
            vm.co_access_overall_actual = 0;
            vm.co_access_overall_completion = 0;

            vm.co_access_west_target = vm.co_access_value_target[0]+vm.co_access_value_target[1]+vm.co_access_value_target[2];
            vm.co_access_west_actual = vm.co_access_value_actual[0]+vm.co_access_value_actual[1]+vm.co_access_value_actual[2];
            vm.co_access_west_completion = ((vm.co_access_west_actual/vm.co_access_west_target)*100).toFixed(0);

            vm.co_access_east_target = vm.co_access_value_target[3]+vm.co_access_value_target[4];
            vm.co_access_east_actual = vm.co_access_value_actual[3]+vm.co_access_value_actual[4];
            vm.co_access_east_completion = ((vm.co_access_east_actual/vm.co_access_east_target)*100).toFixed(0);

            vm.co_access_central_target = vm.co_access_value_target[5]+vm.co_access_value_target[6]+vm.co_access_value_target[7];
            vm.co_access_central_actual = vm.co_access_value_actual[5]+vm.co_access_value_actual[6]+vm.co_access_value_actual[7];
            vm.co_access_central_completion = ((vm.co_access_central_actual/vm.co_access_central_target)*100).toFixed(0);

            vm.npob_access_value_target = [67,32,13,85,29,70,89,26];
            vm.npob_access_value_actual = [61,23,12,67,21,63,81,22];
            vm.npob_access_series = [];
            vm.npob_access_overall_target = 0;
            vm.npob_access_overall_actual = 0;
            vm.npob_access_overall_completion = 0;

            vm.npob_access_west_target = vm.npob_access_value_target[0]+vm.npob_access_value_target[1]+vm.npob_access_value_target[2];
            vm.npob_access_west_actual = vm.npob_access_value_actual[0]+vm.npob_access_value_actual[1]+vm.npob_access_value_actual[2];
            vm.npob_access_west_completion = ((vm.npob_access_west_actual/vm.npob_access_west_target)*100).toFixed(0);

            vm.npob_access_east_target = vm.npob_access_value_target[3]+vm.npob_access_value_target[4];
            vm.npob_access_east_actual = vm.npob_access_value_actual[3]+vm.npob_access_value_actual[4];
            vm.npob_access_east_completion = ((vm.npob_access_east_actual/vm.npob_access_east_target)*100).toFixed(0);

            vm.npob_access_central_target = vm.npob_access_value_target[5]+vm.npob_access_value_target[6]+vm.npob_access_value_target[7];
            vm.npob_access_central_actual = vm.npob_access_value_actual[5]+vm.npob_access_value_actual[6]+vm.npob_access_value_actual[7];
            vm.npob_access_central_completion = ((vm.npob_access_central_actual/vm.npob_access_central_target)*100).toFixed(0);

            vm.cs_access_value_target = [1133,968,544,912,640,1224,1200,480];
            vm.cs_access_value_actual = [1111,758,410,842,608,1107,1111,442];
            vm.cs_access_series = [];
            vm.cs_access_overall_target = 0;
            vm.cs_access_overall_actual = 0;
            vm.cs_access_overall_completion = 0;

            vm.cs_access_west_target = vm.cs_access_value_target[0]+vm.cs_access_value_target[1]+vm.cs_access_value_target[2];
            vm.cs_access_west_actual = vm.cs_access_value_actual[0]+vm.cs_access_value_actual[1]+vm.cs_access_value_actual[2];
            vm.cs_access_west_completion = ((vm.cs_access_west_actual/vm.cs_access_west_target)*100).toFixed(0);

            vm.cs_access_east_target = vm.cs_access_value_target[3]+vm.cs_access_value_target[4];
            vm.cs_access_east_actual = vm.cs_access_value_actual[3]+vm.cs_access_value_actual[4];
            vm.cs_access_east_completion = ((vm.cs_access_east_actual/vm.cs_access_east_target)*100).toFixed(0);

            vm.cs_access_central_target = vm.cs_access_value_target[5]+vm.cs_access_value_target[6]+vm.cs_access_value_target[7];
            vm.cs_access_central_actual = vm.cs_access_value_actual[5]+vm.cs_access_value_actual[6]+vm.cs_access_value_actual[7];
            vm.cs_access_central_completion = ((vm.cs_access_central_actual/vm.cs_access_central_target)*100).toFixed(0);


            angular.forEach(vm.sections, function(value, key) {
                
                vm.co_data = {
                    x:value,
                    y:vm.co_access_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.co_access_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.co_access_overall_target = vm.co_access_overall_target + vm.co_access_value_target[key];
                vm.co_access_overall_actual = vm.co_access_overall_actual + vm.co_access_value_actual[key];
                vm.co_access_overall_completion = ((vm.co_access_overall_actual/vm.co_access_overall_target)*100).toFixed(0);

                vm.npob_data = {
                    x:value,
                    y:vm.npob_access_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.npob_access_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.npob_access_overall_target = vm.npob_access_overall_target + vm.npob_access_value_target[key];
                vm.npob_access_overall_actual = vm.npob_access_overall_actual + vm.npob_access_value_actual[key];
                vm.npob_access_overall_completion = ((vm.npob_access_overall_actual/vm.npob_access_overall_target)*100).toFixed(0);


                vm.cs_data = {
                    x:value,
                    y:vm.cs_access_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.cs_access_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.cs_access_overall_target = vm.cs_access_overall_target + vm.cs_access_value_target[key];
                vm.cs_access_overall_actual = vm.cs_access_overall_actual + vm.cs_access_value_actual[key];
                vm.cs_access_overall_completion = ((vm.cs_access_overall_actual/vm.cs_access_overall_target)*100).toFixed(0);


                vm.co_access_series.push(vm.co_data);
                vm.npob_access_series.push(vm.npob_data);
                vm.cs_access_series.push(vm.cs_data);
            });
            

            console.log(vm.co_access_series)


            vm.co_transport = {
                series: [
                    {
                      name: 'Actual',
                      data: vm.co_access_series
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

            vm.npob_transport = {
                series: [
                    {
                      name: 'Actual',
                      data: vm.npob_access_series
                    }
                  ],
                    chart: {
                    height: 250,
                    type: 'bar',
                    fontSize: '8px',
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


            vm.cs_transport = {
                series: [
                    {
                      name: 'Actual',
                      data: vm.cs_access_series
                    }
                  ],
                    chart: {
                    height: 250,
                    type: 'bar',
                    fontSize: '8px',
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


            //  Radial

            vm.co_access_radial = {
                series: [vm.co_access_west_completion, vm.co_access_east_completion, vm.co_access_central_completion],
                chart: {
                width: 500,
                height: 300,
                type: 'radialBar',
                },
                // title: {
                //     text: 'PM ACCOMPLISHMENT (DIVISION LEVEL)',
                //     align: 'left',
                //     offsetX: 0
                // },
                labels: ['NL WEST', 'NL EAST', 'NL CENTRAL'],
                plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'OVERALL %',
                            formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return vm.co_access_overall_completion+'%'
                            }
                        }
                        }
                    }
                },
                legend: {
                    show: true,
                    // position: 'bottom',
                    floating: true,
                    fontSize: '10px',
                    position: 'left',
                    offsetX: 10,
                    offsetY: 10,
                    formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
                    },
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    itemMargin: {
                        vertical: 3
                    }
                }
                
            }

            vm.npob_access_radial = {
                series: [vm.npob_access_west_completion, vm.npob_access_east_completion, vm.npob_access_central_completion],
                chart: {
                width: 500,
                height: 300,
                type: 'radialBar',
                },
                // title: {
                //     text: 'PM ACCOMPLISHMENT (DIVISION LEVEL)',
                //     align: 'left',
                //     offsetX: 0
                // },
                labels: ['NL WEST', 'NL EAST', 'NL CENTRAL'],
                plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'OVERALL %',
                            formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return vm.npob_access_overall_completion+'%'
                            }
                        }
                        }
                    }
                },
                legend: {
                    show: true,
                    // position: 'bottom',
                    floating: true,
                    fontSize: '10px',
                    position: 'left',
                    offsetX: 10,
                    offsetY: 10,
                    formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
                    },
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    itemMargin: {
                        vertical: 3
                    }
                }
                
            }

            vm.cs_access_radial = {
                series: [vm.cs_access_west_completion, vm.cs_access_east_completion, vm.cs_access_central_completion],
                chart: {
                width: 500,
                height: 300,
                type: 'radialBar',
                },
                // title: {
                //     text: 'PM ACCOMPLISHMENT (DIVISION LEVEL)',
                //     align: 'left',
                //     offsetX: 0
                // },
                labels: ['NL WEST', 'NL EAST', 'NL CENTRAL'],
                plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'OVERALL %',
                            formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return vm.cs_access_overall_completion+'%'
                            }
                        }
                        }
                    }
                },
                legend: {
                    show: true,
                    // position: 'bottom',
                    floating: true,
                    fontSize: '10px',
                    position: 'left',
                    offsetX: 10,
                    offsetY: 10,
                    formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
                    },
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    itemMargin: {
                        vertical: 3
                    }
                }
                
            }
 
            
        }

})();