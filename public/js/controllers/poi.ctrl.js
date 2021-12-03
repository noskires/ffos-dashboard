(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('PoiCtrl', PoiCtrl)
        // .controller('CreatePoiCtrl', CreatePoiCtrl)
        // .controller('EditPoiCtrl', EditPoiCtrl)

        PoiCtrl.$inject = ['PoiSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function PoiCtrl(PoiSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
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

            vm.select_year = function(year){
                  
                $state.go("dashboard", {"year":year});
                
                FocSrvcs.kpi({id:'', year:year}).then (function (response) {
                    if(response.data.status == 200){
                   
    
                      
                        console.log('show');
                        console.log(response.data.data.kpi.mttr_node_display)
                        console.log(response.data.data.kpi.mttr_foc_display)
    
                        vm.ytd_total_ticket_node = response.data.data.kpi.ytd_total_ticket_node;
                        vm.ytd_total_ticket_foc = response.data.data.kpi.ytd_total_ticket_foc;
                        vm.ytd_avg_duration_node = response.data.data.kpi.ytd_avg_duration_node;
                        vm.ytd_avg_duration_foc = response.data.data.kpi.ytd_avg_duration_foc;
                        vm.ytd_net_ava = response.data.data.kpi.ytd_net_ava;
                        
    
                        vm.kpi = {
                            series: [{
                                name: 'FTTBTS POI',
                                type: 'column',
                                // data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
                                // data: response.data.data.kpi.mttr_node_display
                                data: [1,2,3,4,5,6,7,8,9,10]
                            }, {
                                name: 'FTTH POI',
                                type: 'column',
                                // data: response.data.data.kpi.mttr_foc_display
                                data: [2,3,4,5,6,7,8,9,10,11]
                            }, {
                                name: 'TOTAL',
                                type: 'line',
                                // data: response.data.data.kpi.net_ava
                                data: [3,5,7,9,11,13,15,17,19,21]
                            }],
                            
                            chart: {
                                height: 250,
                                type: 'line',
                                stacked: false,

                                
                                 
                            },
                            dataLabels: {
                                formatter: (value) => value.toFixed(3),
                                enabled: false
                            },
                            stroke: {
                                width: [1, 1, 4]
                            },

                            
                            title: {
                                text: 'Jan - '+response.data.data.kpi.last_month+' data',
                                align: 'left',
                                offsetX: 110
                            },
                            dataLabels: {
                                // formatter: (value) => value.toFixed(3)+' = 12',
                                enabled: true,
                            },
                            xaxis: {
                                categories: response.data.data.kpi.months_display,
                            },
                            // annotations: {
                            //     yaxis: [
                            //       {
                            //         y: 4,
                            //         borderColor: 'red',
                            //         label: {
                            //           borderColor: 'red',
                            //           style: {
                            //             color: '#fff',
                            //             background: 'red'
                            //           },
                            //           text: 'Y-axis annotation on 8800'
                            //         }
                            //       }
                            //     ]
                            //   },

                            
                            yaxis: [

                                {
                                    axisTicks: {
                                        show: true,
                                    },
                                    axisBorder: {
                                        show: true,
                                        color: primary
                                    },
                                    labels: {
                                        formatter: (value) => value.toFixed(2),
                                        style: {
                                            colors: primary,
                                        }
                                    },
                                    title: {
                                        text: "NODE MTTR",
                                        style: {
                                            color: primary,
                                        }
                                    },
                                    tooltip: {
                                        enabled: true
                                    },
                                    min: 0,
                                    max: 15,
                                    tickAmount: 5,
                                    forceNiceScale: false,
    
                                },
                                {
                                    seriesName: 'Income',
                                    opposite: true,
                                    axisTicks: {
                                        show: true,
                                    },
                                    axisBorder: {
                                        show: true,
                                        color: success
                                    },
                                    labels: {
                                        formatter: (value) => value.toFixed(2),
                                        style: {
                                            colors: success,
                                        }
                                    },
                                    title: {
                                        text: "FOC MTTR",
                                        style: {
                                            color: success,
                                        }
                                    },
                                    min: 0,
                                    max: 15,
                                    tickAmount: 5,
                                    forceNiceScale: false,
                                },
                                {
                                    seriesName: 'Revenue',
                                    opposite: true,
                                    axisTicks: {
                                        show: true,
                                    },
                                    axisBorder: {
                                        show: true,
                                        color: warning
                                    },
                                    labels: {
                                        formatter: (value) => value.toFixed(3) +'%',
                                        style: {
                                            colors: warning,
                                        },
                                    },
                                    title: {
                                        text: "NET. AVA",
                                        style: {
                                            color: warning,
                                        }
                                    },
                                    forceNiceScale: false,
                                    
                                    min: 99,
                                    max: 100,
                                    tickAmount: 5,
                                },
                            ],
                            tooltip: {
                                fixed: {
                                    enabled: false,
                                    // position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                                    // offsetY: 30,
                                    offsetX: 160
                                },
                            },
                            legend: {
                                horizontalAlign: 'center',
                                // offsetX: 40
                            }	 
                        }
    
                    }
                }, function (){ alert('Bad Request!!!') });

            }

  
            
            function kFormatter(num) {
                return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
            }
 
            vm.kpi = {
               
                series: [{
                    name: 'NODE MTTR',
                    type: 'column',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                }, {
                    name: 'FOC MTTR',
                    type: 'column',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                }, {
                    name: 'NET. AVA',
                    type: 'line',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                }],
                chart: {
                    height: 250,
                    type: 'line',
                    stacked: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1, 4]
                },
                title: {
                    text: 'Jan - May 2021 Data',
                    align: 'left',
                    offsetX: 110
                },
                dataLabels: {
                enabled: true,
            },
                xaxis: {
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'YTD'],
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: primary
                        },
                        labels: {
                            style: {
                                colors: primary,
                            }
                        },
                        title: {
                            text: "NODE MTTR",
                            style: {
                                color: primary,
                            }
                        },
                        tooltip: {
                            enabled: true
                        },
                        min: 0,
                        max: 15,
                        tickAmount: 5,
                        forceNiceScale: false,

                        
                    },
                    {
                        seriesName: 'Income',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: success
                        },
                        labels: {
                            style: {
                                colors: success,
                            }
                        },
                        title: {
                            text: "FOC MTTR",
                            style: {
                                color: success,
                            }
                        },
                        min: 0,
                        max: 15,
                        tickAmount: 5,
                        forceNiceScale: false,
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: warning
                        },
                        labels: {
                            style: {
                                colors: warning,
                            },
                        },
                        title: {
                            text: "NET. AVA",
                            style: {
                                color: warning,
                            }
                        },
                        forceNiceScale: false,
                        
                        min: 99,
                        max: 100,
                        tickAmount: 5,
                        labels: {
                            formatter: (value) => value.toFixed(2) +'%',
                            style: {
                                colors: warning,
                            },
                        },

                        
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: false,
                        // position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        // offsetY: 30,
                        offsetX: 160
                    },
                },
                legend: {
                    horizontalAlign: 'center',
                    // offsetX: 40
                }	 
            }


            FocSrvcs.kpi({id:'', year:$stateParams.year}).then (function (response) {
                if(response.data.status == 200){
               

                  
                    console.log('show');
                    console.log(response.data.data.kpi.mttr_node_display)
                    console.log(response.data.data.kpi.mttr_foc_display)

                    vm.ytd_total_ticket_node = response.data.data.kpi.ytd_total_ticket_node;
                    vm.ytd_total_ticket_foc = response.data.data.kpi.ytd_total_ticket_foc;
                    vm.ytd_avg_duration_node = response.data.data.kpi.ytd_avg_duration_node;
                    vm.ytd_avg_duration_foc = response.data.data.kpi.ytd_avg_duration_foc;
                    vm.ytd_net_ava = response.data.data.kpi.ytd_net_ava;
                    

                    vm.kpi = {
                        // series: [{
                        //     name: 'NODE MTTR',
                        //     type: 'column',
                        //     // data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
                        //     data: response.data.data.kpi.mttr_node_display
                        // }, {
                        //     name: 'FOC MTTR',
                        //     type: 'column',
                        //     data: response.data.data.kpi.mttr_foc_display
                        // }, {
                        //     name: 'NET. AVA',
                        //     type: 'line',
                        //     data: response.data.data.kpi.net_ava
                        // }],

                        series: [{
                            name: 'FTTBTS POI',
                            type: 'column',
                            // data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
                            // data: response.data.data.kpi.mttr_node_display
                            data: [99,42,200,327,367,72]
                        }, {
                            name: 'FTTH POI',
                            type: 'column',
                            // data: response.data.data.kpi.mttr_foc_display
                            data: [280,417,1631,495,101,510]
                        }, {
                            name: 'TOTAL',
                            type: 'line',
                            // data: response.data.data.kpi.net_ava
                            data: [379,459,1831,822,468,582]
                        }],
                        colors: ['#2B908F', "#FF1654", "#2E294E"],

                        chart: {
                            height: 250,
                            type: 'line',
                            stacked: false,
                            color: '#2E294E'
                             
                        },
                        dataLabels: {
                            formatter: (value) => value.toFixed(3),
                            enabled: false
                        },
                        stroke: {
                            width: [1, 1, 4]
                        },
                        title: {
                            text: 'FTTBTS and FTTH POI',
                            align: 'left',
                            offsetX: 110
                        },
                        dataLabels: {
                            // formatter: (value) => value.toFixed(3)+' = 12',
                            enabled: true,
                        },
                        xaxis: {
                            // categories: response.data.data.kpi.months_display,
                            categories: ["NE MM", "SW MM", "NL", "SL", "VIS", "MIN"],
                        },
                        // annotations: {
                        //     yaxis: [
                        //       {
                        //         y: 4,
                        //         borderColor: 'red',
                        //         label: {
                        //           borderColor: 'red',
                        //           style: {
                        //             color: '#fff',
                        //             background: 'red'
                        //           },
                        //           text: 'Y-axis annotation on 8800'
                        //         }
                        //       }
                        //     ]
                        //   },
                        yaxis: [
                            {
                                axisTicks: {
                                    show: true,
                                },
                                axisBorder: {
                                    show: true,
                                    color: '#2B908F'
                                },
                                labels: {
                                    // formatter: (value) => value.toFixed(2),
                                    style: {
                                        colors: '#2B908F',
                                    }
                                },
                                title: {
                                    text: "FTTBTS POI",
                                    style: {
                                        color: '#2B908F',
                                    }
                                },
                                tooltip: {
                                    enabled: true
                                },
                                // min: 0,
                                // max: 350,
                                tickAmount: 5,
                                forceNiceScale: false,

                            },
                            {
                                seriesName: '',
                                opposite: true,
                                axisTicks: {
                                    show: true,
                                },
                                axisBorder: {
                                    show: true,
                                    color: '#FF1654'
                                },
                                labels: {
                                    // formatter: (value) => value.toFixed(2),
                                    style: {
                                        colors: '#FF1654',
                                    }
                                },
                                title: {
                                    text: "FTTH POI",
                                    style: {
                                        color: '#FF1654',
                                    }
                                },
                                min: 0,
                                // max: 1500,
                                tickAmount: 5,
                                forceNiceScale: false,
                            },
                            {
                                seriesName: '',
                                opposite: true,
                                axisTicks: {
                                    show: true,
                                },
                                axisBorder: {
                                    show: true,
                                    color: '#2E294E'
                                },
                                labels: {
                                    // formatter: (value) => value.toFixed(3) +'%',
                                    style: {
                                        colors: '#2E294E',
                                    },
                                },
                                title: {
                                    text: "TOTAL POI",
                                    style: {
                                        color: '#2E294E',
                                    }
                                },
                                forceNiceScale: false,
                                
                                // min: 99,
                                // max: 100,
                                tickAmount: 5,

                            },
                        ],
                        tooltip: {
                            fixed: {
                                enabled: false,
                                // position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                                // offsetY: 30,
                                offsetX: 160
                            },
                        },
                        legend: {
                            horizontalAlign: 'center',
                            // offsetX: 40
                        }	 
                    }

                }
            }, function (){ alert('Bad Request!!!') });



            vm.fttbts_poi = {
         
                series: [99,42,200,327,367,72],
                chart: {
                    width: 400,
                    type: 'polarArea',
                    
                },
                labels:["NE MM", "SW MM", "NL", "SL", "VIS", "MIN"],
                stroke: {
                colors: ['#fff']
                },
                fill: {
                opacity: 0.8
                },
                responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    
                    legend: {
                        position: 'top'
                    }
                }
                }]

            };

            vm.ftth_poi = {
         
                series: [280,417,1631,495,101,510],
                chart: {
                    width: 400,
                    type: 'polarArea',
                },
                labels:["NE MM", "SW MM", "NL", "SL", "VIS", "MIN"],
                stroke: {
                colors: ['#fff'],
                },
                fill: {
                opacity: 0.8
                },
                responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'top'
                    }
                }
                }]

            };


            vm.nl_pie_fttbts = {
                series: [78, 69, 53],
                chart: {
                width: 380,
                type: 'pie',
                },
                labels: ['NL WEST', 'NL EAST', 'NL CENTRAL'],
                responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                    width: 200
                    },
                    legend: {
                    position: 'bottom'
                    }
                }
                }]
            }

            vm.nl_pie_ftth = {
                series: [743, 558, 330],
                chart: {
                width: 380,
                type: 'pie',
                },
                labels: ['NL WEST', 'NL EAST', 'NL CENTRAL'],
                responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                    width: 200
                    },
                    legend: {
                    position: 'bottom'
                    }
                }
                }]
            }

            vm.nl_section_ftth = {
                series: [{
                    data: [235, 334, 174, 276, 282, 182, 83, 65]
                  }],
                    chart: {
                    type: 'bar',
                    height: 250,
                    width: 350,
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  xaxis: {
                    categories: ["WESTNL_FFS1", 
                    "WESTNL_FFS2", 
                    "WESTNL_FFS3", 
                    "EASTNL_FFS4", 
                    "EASTNL_FFS5", 
                    "CENTRALNL_FFS6", 
                    "CENTRALNL_FFS7", 
                    "CENTRALNL_FFS8"],
                  }
            }

            vm.nl_section_fttbts = {
                series: [{
                    data: [13, 57, 8, 50, 19, 36, 9, 8]
                  }],
                    chart: {
                    type: 'bar',
                    height: 250,
                    width: 350,
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  xaxis: {
                    categories: ["WESTNL_FFS1", 
                    "WESTNL_FFS2", 
                    "WESTNL_FFS3", 
                    "EASTNL_FFS4", 
                    "EASTNL_FFS5", 
                    "CENTRALNL_FFS6", 
                    "CENTRALNL_FFS7", 
                    "CENTRALNL_FFS8"],
                  }
            }
 
            
        }

})();