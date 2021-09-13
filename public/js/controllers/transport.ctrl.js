(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('TransportCtrl', TransportCtrl) 

        TransportCtrl.$inject = ['AccessTransportSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function TransportCtrl(AccessTransportSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
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
            vm.co_transport_value_target = [160,96,83,152,112,166,214,88];
            vm.co_transport_value_actual = [160,76,69,152,112,149,210,86];
            vm.co_transport_series = [];
            vm.co_transport_overall_target = 0;
            vm.co_transport_overall_actual = 0;
            vm.co_transport_overall_completion = 0;

            vm.co_transport_west_target = vm.co_transport_value_target[0]+vm.co_transport_value_target[1]+vm.co_transport_value_target[2];
            vm.co_transport_west_actual = vm.co_transport_value_actual[0]+vm.co_transport_value_actual[1]+vm.co_transport_value_actual[2];
            vm.co_transport_west_completion = ((vm.co_transport_west_actual/vm.co_transport_west_target)*100).toFixed(0);

            vm.co_transport_east_target = vm.co_transport_value_target[3]+vm.co_transport_value_target[4];
            vm.co_transport_east_actual = vm.co_transport_value_actual[3]+vm.co_transport_value_actual[4];
            vm.co_transport_east_completion = ((vm.co_transport_east_actual/vm.co_transport_east_target)*100).toFixed(0);

            vm.co_transport_central_target = vm.co_transport_value_target[5]+vm.co_transport_value_target[6]+vm.co_transport_value_target[7];
            vm.co_transport_central_actual = vm.co_transport_value_actual[5]+vm.co_transport_value_actual[6]+vm.co_transport_value_actual[7];
            vm.co_transport_central_completion = ((vm.co_transport_central_actual/vm.co_transport_central_target)*100).toFixed(0);

            vm.npob_transport_value_target = [27,33,22,62,134,238,320,299];
            vm.npob_transport_value_actual = [26,28,21,59,128,200,298,230];
            vm.npob_transport_series = [];
            vm.npob_transport_overall_target = 0;
            vm.npob_transport_overall_actual = 0;
            vm.npob_transport_overall_completion = 0;

            vm.npob_transport_west_target = vm.npob_transport_value_target[0]+vm.npob_transport_value_target[1]+vm.npob_transport_value_target[2];
            vm.npob_transport_west_actual = vm.npob_transport_value_actual[0]+vm.npob_transport_value_actual[1]+vm.npob_transport_value_actual[2];
            vm.npob_transport_west_completion = ((vm.npob_transport_west_actual/vm.npob_transport_west_target)*100).toFixed(0);

            vm.npob_transport_east_target = vm.npob_transport_value_target[3]+vm.npob_transport_value_target[4];
            vm.npob_transport_east_actual = vm.npob_transport_value_actual[3]+vm.npob_transport_value_actual[4];
            vm.npob_transport_east_completion = ((vm.npob_transport_east_actual/vm.npob_transport_east_target)*100).toFixed(0);

            vm.npob_transport_central_target = vm.npob_transport_value_target[5]+vm.npob_transport_value_target[6]+vm.npob_transport_value_target[7];
            vm.npob_transport_central_actual = vm.npob_transport_value_actual[5]+vm.npob_transport_value_actual[6]+vm.npob_transport_value_actual[7];
            vm.npob_transport_central_completion = ((vm.npob_transport_central_actual/vm.npob_transport_central_target)*100).toFixed(0);

            vm.cs_transport_value_target = [88,24,40,32,24,40,96,8];
            vm.cs_transport_value_actual = [88,24,40,32,24,40,96,8];
            vm.cs_transport_series = [];
            vm.cs_transport_overall_target = 0;
            vm.cs_transport_overall_actual = 0;
            vm.cs_transport_overall_completion = 0;

            vm.cs_transport_west_target = vm.cs_transport_value_target[0]+vm.cs_transport_value_target[1]+vm.cs_transport_value_target[2];
            vm.cs_transport_west_actual = vm.cs_transport_value_actual[0]+vm.cs_transport_value_actual[1]+vm.cs_transport_value_actual[2];
            vm.cs_transport_west_completion = ((vm.cs_transport_west_actual/vm.cs_transport_west_target)*100).toFixed(0);

            vm.cs_transport_east_target = vm.cs_transport_value_target[3]+vm.cs_transport_value_target[4];
            vm.cs_transport_east_actual = vm.cs_transport_value_actual[3]+vm.cs_transport_value_actual[4];
            vm.cs_transport_east_completion = ((vm.cs_transport_east_actual/vm.cs_transport_east_target)*100).toFixed(0);

            vm.cs_transport_central_target = vm.cs_transport_value_target[5]+vm.cs_transport_value_target[6]+vm.cs_transport_value_target[7];
            vm.cs_transport_central_actual = vm.cs_transport_value_actual[5]+vm.cs_transport_value_actual[6]+vm.cs_transport_value_actual[7];
            vm.cs_transport_central_completion = ((vm.cs_transport_central_actual/vm.cs_transport_central_target)*100).toFixed(0);


            angular.forEach(vm.sections, function(value, key) {
                
                vm.co_data = {
                    x:value,
                    y:vm.co_transport_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.co_transport_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.co_transport_overall_target = vm.co_transport_overall_target + vm.co_transport_value_target[key];
                vm.co_transport_overall_actual = vm.co_transport_overall_actual + vm.co_transport_value_actual[key];
                vm.co_transport_overall_completion = ((vm.co_transport_overall_actual/vm.co_transport_overall_target)*100).toFixed(0);

                vm.npob_data = {
                    x:value,
                    y:vm.npob_transport_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.npob_transport_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.npob_transport_overall_target = vm.npob_transport_overall_target + vm.npob_transport_value_target[key];
                vm.npob_transport_overall_actual = vm.npob_transport_overall_actual + vm.npob_transport_value_actual[key];
                vm.npob_transport_overall_completion = ((vm.npob_transport_overall_actual/vm.npob_transport_overall_target)*100).toFixed(0);


                vm.cs_data = {
                    x:value,
                    y:vm.cs_transport_value_actual[key],
                    goals: [
                        {
                            name: 'Target',
                            value: vm.cs_transport_value_target[key],
                            strokeWidth: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                }

                vm.cs_transport_overall_target = vm.cs_transport_overall_target + vm.cs_transport_value_target[key];
                vm.cs_transport_overall_actual = vm.cs_transport_overall_actual + vm.cs_transport_value_actual[key];
                vm.cs_transport_overall_completion = ((vm.cs_transport_overall_actual/vm.cs_transport_overall_target)*100).toFixed(0);


                vm.co_transport_series.push(vm.co_data);
                vm.npob_transport_series.push(vm.npob_data);
                vm.cs_transport_series.push(vm.cs_data);
            });
            

            console.log(vm.co_transport_series)


            vm.co_transport = {
                series: [
                    {
                      name: 'Actual',
                      data: vm.co_transport_series
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
                      data: vm.npob_transport_series
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
                      data: vm.cs_transport_series
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

            vm.co_transport_radial = {
                series: [vm.co_transport_west_completion, vm.co_transport_east_completion, vm.co_transport_central_completion],
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
                            return vm.co_transport_overall_completion+'%'
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

            vm.npob_transport_radial = {
                series: [vm.npob_transport_west_completion, vm.npob_transport_east_completion, vm.npob_transport_central_completion],
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
                            return vm.npob_transport_overall_completion+'%'
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

            vm.cs_transport_radial = {
                series: [vm.cs_transport_west_completion, vm.cs_transport_east_completion, vm.cs_transport_central_completion],
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
                            return vm.cs_transport_overall_completion+'%'
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