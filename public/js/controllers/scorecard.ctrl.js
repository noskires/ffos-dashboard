(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('ScoreCardCtrl', ScoreCardCtrl) 

        ScoreCardCtrl.$inject = ['AccessTransportSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function ScoreCardCtrl(AccessTransportSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
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

            colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'];
 

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
            vm.value_target = [38,37,11,70,33,47,60,48];
            vm.value_actual = [10,22,7,41,10,13,54,28];
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
                series: [83.94],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL FFS'],
            };

            vm.overall_status_fh = {
                series: [86.06],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL FFS'],
            };

            vm.west_status = {
                series: [81.67],
                chart: {
                    height: 200,
                    type: 'radialBar',
                    color:[danger],
                },
                
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL WEST'],

                
            };

            vm.west_status_fh = {
                series: [81.33],
                chart: {
                    height: 200,
                    type: 'radialBar',
                    color:[danger],
                },
                
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL WEST'],

                
            };

            vm.east_status = {
                series: [84.17],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL EAST'],
            };

            vm.east_status_fh = {
                series: [92.83],
                chart: {
                    height: 200,
                    type: 'radialBar',
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL EAST'],
            };

            vm.central_status = {
                series: [86.00],
                chart: {
                    height: 200,
                    type: 'radialBar',
                    color: '#f2f2f2'
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL CENTRAL'],
            };

            vm.central_status_fh = {
                series: [84.00],
                chart: {
                    height: 200,
                    type: 'radialBar',
                    color: '#f2f2f2'
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15
                        }
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#fff",
                          fontSize: "13px"
                        },
                        value: {
                          color: "#fff",
                          fontSize: "20px",
                          show: true
                        }
                      }
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      gradientToColors: ["#87D4F9"],
                      stops: [0, 100]
                    }
                  },
                  stroke: {
                    lineCap: "round"
                  },
                labels: ['NL CENTRAL'],
            };
 



            vm.scorecard_fc = {
                series: [
                    {
                    name: 'FFS1',
                    data: [80, 82, 80, 80.67]
                  }, 
                  {
                    name: 'FFS2',
                    data: [84, 84, 84, 84.00]
                  }, 
                  {
                    name: 'FFS3',
                    data: [79, 80, 82, 80.33]
                  }, 
                  {
                    name: 'FFS4',
                    data: [82, 85, 84, 80.67]
                  }, 
                  {
                    name: 'FFS5',
                    data: [81, 85, 88, 84.67]
                  }, 
                  {
                    name: 'FFS6',
                    data: [82, 82, 82, 82]
                  }, 
                  {
                    name: 'FFS7',
                    data: [92, 92, 92, 92]
                  }, 
                  {
                    name: 'FFS8',
                    data: [84, 84, 84, 84]
                  }, 
                  
                ],
                    chart: {
                    type: 'bar',
                    height: 250
                  },
                //   colors: [primary, success, warning, danger, info, navyblue, color_reserve_1, color_reserve_2, '#FF9800'],
                  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#2B908F', '#2E294E'],
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded',
                 
                      borderRadius: 6,
                    //   colors: {
                    //         ranges: [{
                    //             from: 0,
                    //             to: 0,
                    //             color: ['red', 'blue'],
                    //         }],
                    //         backgroundBarColors: [],
                    //         backgroundBarOpacity: 1,
                    //         backgroundBarRadius: 0,
                    //     },
                    },
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  xaxis: {
                    categories: ['Apr', 'May', 'Jun', "2Q AVG"],
                  },
                  yaxis: {
                    title: {
                      text: 'Scorecard %'
                    }
                  },
                  fill: {
                    opacity: 1
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return val + "%"
                      }
                    }
                  }
            }

            vm.scorecard_fh = {
                series: [
                    {
                    name: 'FFS1',
                    data: [82, 82, 79, 81]
                  }, 
                  {
                    name: 'FFS2',
                    data: [82, 82, 82, 82]
                  }, 
                  {
                    name: 'FFS3',
                    data: [81, 81, 81, 81]
                  }, 
                  {
                    name: 'FFS4',
                    data: [95, 95, 96, 95.33]
                  }, 
                  {
                    name: 'FFS5',
                    data: [89, 90, 92,90.33]
                  }, 
                  {
                    name: 'FFS6',
                    data: [85, 85, 85, 85]
                  }, 
                  {
                    name: 'FFS7',
                    data: [82, 82, 82, 82]
                  }, 
                  {
                    name: 'FFS8',
                    data: [85, 85, 85, 85]
                  }, 

               
                  
                ],
                    chart: {
                    type: 'bar',
                    height: 250
                  },
                //   colors: [primary, success, warning, danger, info, navyblue, color_reserve_1, color_reserve_2, '#FF9800'],
                  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#2B908F', '#2E294E'],
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded',
                      borderRadius: 6,
                        dataLabels: {
                        position: 'top', // top, center, bottom
                        },
                    //   colors: {
                    //         ranges: [{
                    //             from: 0,
                    //             to: 0,
                    //             color: ['red', 'blue'],
                    //         }],
                    //         backgroundBarColors: [],
                    //         backgroundBarOpacity: 1,
                    //         backgroundBarRadius: 0,
                    //     },
                    },
                  },
                  dataLabels: {
                        enabled: false,
                        formatter: function (val) {
                            return val + "%";
                        },
                        offsetY: -20,
                        style: {
                            fontSize: '9px',
                            colors: ["#304758"]
                        }
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  xaxis: {
                    categories: ['Apr', 'May', 'Jun', '2Q AVG'],
                  },
                  yaxis: {
                    title: {
                      text: 'Scorecard %'
                    },
                    axisBorder: {
                        show: false
                      },
                      axisTicks: {
                        show: false,
                      },
                    labels: {
                        show: true,
                        formatter: function (val) {
                          return val + "%";
                        }
                      }
                  },
                  fill: {
                    opacity: 1
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return val + "%"
                      }
                    }
                  }
            }
 
        }

})();