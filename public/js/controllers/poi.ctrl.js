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

                FocSrvcs.topContributors({id:'', year:year}).then (function (response) {
                    if(response.data.status == 200){
                        vm.contributors = response.data.data;
    
                        vm.top_contributors_number_of_tickets_node = [];
                        vm.top_contributors_name_node = [];
    
                        vm.top_contributors_number_of_tickets_foc = [];
                        vm.top_contributors_name_foc = [];
                        
                        angular.forEach(vm.contributors.top_contributor_node, function(value, key) {
                            vm.top_contributors_number_of_tickets_node.push(value.total_ticket);
                        });
    
                        angular.forEach(vm.contributors.top_contributor_node, function(value, key) {
                            vm.top_contributors_name_node.push(value.root_cause+' ('+value.total_duration.toFixed(2)+' H)');
                        });
    
                        angular.forEach(vm.contributors.top_contributor_foc, function(value, key) {
                            vm.top_contributors_number_of_tickets_foc.push(value.total_ticket);
                        });
    
                        angular.forEach(vm.contributors.top_contributor_foc, function(value, key) {
                            vm.top_contributors_name_foc.push(value.root_cause+' ('+value.total_duration.toFixed(2)+' H)');
                        });
    
                        console.log(vm.top_contributors_number_of_tickets_node)
                        console.log(vm.top_contributors_name_node)
                        console.log(vm.top_contributors_number_of_tickets_foc)
                        console.log(vm.top_contributors_name_foc)
    
    
                        
    
                        vm.top_contributors_node = {
             
                            // series: [154, 56, 41, 19, 18, 62],
                            series: vm.top_contributors_number_of_tickets_node,
                            chart: {
                                width: 570,
                                type: 'donut',
                            },
                            // labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
                            labels: vm.top_contributors_name_node,
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
                            }],
                            colors: [primary, success, warning, danger, info, navyblue]
            
                        };
    
    
                        vm.top_contributors_foc = {
             
                            // series: [154, 56, 41, 19, 18, 62],
                            series: vm.top_contributors_number_of_tickets_foc,
                            chart: {
                                width: 550,
                                type: 'donut',
                            },
                            // labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
                            labels: vm.top_contributors_name_foc,
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
                            }],
                            colors: [primary, success, warning, danger, info, navyblue]
            
                        };
    
                    }
                }, function (){ alert('Bad Request!!!') })
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

            vm.top_contributors_node = {
         
                series: [0,0,0,0,0,0],
                chart: {
                    width: 500,
                    type: 'donut',
                },
                labels: ['', '', '', '', '', ''],
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
                }],
                colors: [primary, success, warning, danger, info, navyblue]

            };

            vm.top_contributors_foc = {
        
                series: [0,0,0,0,0,0],
                chart: {
                    width: 500,
                    type: 'donut',
                },
                labels: ['', '', '', '', '', ''],
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
                }],
                colors: [primary, success, warning, danger, info, navyblue]

            };


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
                            data: [1,2,3,4,5,6]
                        }, {
                            name: 'FTTH POI',
                            type: 'column',
                            // data: response.data.data.kpi.mttr_foc_display
                            data: [2,3,4,5,6,7]
                        }, {
                            name: 'TOTAL',
                            type: 'line',
                            // data: response.data.data.kpi.net_ava
                            data: [3,5,7,9,11,13]
                        }],
                        // colors: ['#fff', "#FF1654", "#247BA0"],

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
                                    color: primary
                                },
                                labels: {
                                    // formatter: (value) => value.toFixed(2),
                                    style: {
                                        colors: primary,
                                    }
                                },
                                title: {
                                    text: "FTTBTS POI",
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
                                    // formatter: (value) => value.toFixed(2),
                                    style: {
                                        colors: success,
                                    }
                                },
                                title: {
                                    text: "FTTH POI",
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
                                    // formatter: (value) => value.toFixed(3) +'%',
                                    style: {
                                        colors: warning,
                                    },
                                },
                                title: {
                                    text: "TOTAL POI",
                                    style: {
                                        color: warning,
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

            



            FocSrvcs.topContributors({id:'', year:$stateParams.year}).then (function (response) {
                if(response.data.status == 200){
                    vm.contributors = response.data.data;

                    vm.top_contributors_number_of_tickets_node = [];
                    vm.top_contributors_name_node = [];

                    vm.top_contributors_number_of_tickets_foc = [];
                    vm.top_contributors_name_foc = [];
                    
                    angular.forEach(vm.contributors.top_contributor_node, function(value, key) {
                        vm.top_contributors_number_of_tickets_node.push(value.total_ticket);
                    });

                    angular.forEach(vm.contributors.top_contributor_node, function(value, key) {
                        vm.top_contributors_name_node.push(value.root_cause+' ('+value.total_duration.toFixed(2)+' H)');
                    });

                    angular.forEach(vm.contributors.top_contributor_foc, function(value, key) {
                        vm.top_contributors_number_of_tickets_foc.push(value.total_ticket);
                    });

                    angular.forEach(vm.contributors.top_contributor_foc, function(value, key) {
                        vm.top_contributors_name_foc.push(value.root_cause+' ('+value.total_duration.toFixed(2)+' H)');
                    });

                    console.log(vm.top_contributors_number_of_tickets_node)
                    console.log(vm.top_contributors_name_node)
                    console.log(vm.top_contributors_number_of_tickets_foc)
                    console.log(vm.top_contributors_name_foc)


                    

                    vm.top_contributors_node = {
         
                        // series: [154, 56, 41, 19, 18, 62],
                        series: vm.top_contributors_number_of_tickets_node,
                        chart: {
                            width: 570,
                            type: 'donut',
                        },
                        // labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
                        labels: vm.top_contributors_name_node,
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
                        }],
                        colors: [primary, success, warning, danger, info, navyblue]
        
                    };


                    vm.top_contributors_foc = {
         
                        // series: [154, 56, 41, 19, 18, 62],
                        series: vm.top_contributors_number_of_tickets_foc,
                        chart: {
                            width: 550,
                            type: 'donut',
                        },
                        // labels: ['AC Power Dis', 'Vehicular Acc', 'Individual Core Trouble', 'Animal Bites', 'Tree Trimming', 'Others'],
                        labels: vm.top_contributors_name_foc,
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
                        }],
                        colors: [primary, success, warning, danger, info, navyblue]
        
                    };

                }
            }, function (){ alert('Bad Request!!!') })

            // 

            vm.fttbts_poi = {
         
                series: [14, 23, 21, 17, 15, 10],
                chart: {
                    width: 530,
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
         
                series: [14, 23, 21, 17, 15, 10],
                chart: {
                    width: 530,
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


            vm.radial = {
                series: [102, 55, 67],
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
                        label: 'Total',
                        formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                        }
                    }
                    }
                }
                },
                legend: {
                        show: true,
                        position: 'bottom'
                      }
                
            }

            vm.radar = {

                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20, 100],
                  }, {
                    name: 'Series 2',
                    data: [20, 30, 40, 80, 20, 80, 100],
                  }, {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10, 100],
                  }, {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10, 100],
                  }
                
                
                ],
                    chart: {
                    height: 350,
                    type: 'radar',
                    dropShadow: {
                      enabled: true,
                      blur: 1,
                      left: 1,
                      top: 1
                    }
                  },
                  title: {
                    text: 'Radar Chart - Multi Series'
                  },
                  stroke: {
                    width: 2
                  },
                  fill: {
                    opacity: 0.1
                  },
                  markers: {
                    size: 0
                  },
                  xaxis: {
                    categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                  }
            }

            vm.groupbar1 = {
                series: [{
                    data: [44, 55, 41, 64, 22, 43, 21, 11]
                  }, {
                    data: [53, 32, 33, 52, 13, 44, 32, 20]
                  }],
                    chart: {
                    type: 'bar',
                    height: 420,
                    width: 400
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                      dataLabels: {
                        position: 'top',
                      },
                    }
                  },
                  dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                      fontSize: '12px',
                      colors: ['#fff']
                    }
                  },
                  stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                  },
                  tooltip: {
                    shared: true,
                    intersect: false
                  },
                  xaxis: {
                    categories: [
                        "NFS_WESTNL_FFS1",
                        "NFS_WESTNL_FFS2",
                        "NFS_WESTNL_FFS3",
                        "NFS_EASTNL_FFS4",
                        "NFS_EASTNL_FFS5",
                        "NFS_CENTRALNL_FFS6",
                        "NFS_CENTRALNL_FFS7",
                        "NFS_CENTRALNL_FFS8", 
                    ],
                  },
            }


            vm.access_node1 = { 

                series: [{
                    name: 'TARGET',
                    type: 'column',
                    data: [140,84,73,133,98,145,187,77]
                }, {
                    name: 'ACTUAL',
                    type: 'column',
                    data: [140,72,65,133,98,138,160,75]
                }, {
                    name: 'COMPLETION',
                    type: 'line',
                    data: [100,86,89,100,100,95,86,97]
                }],
                // colors: ['#fff', "#FF1654", "#247BA0"],

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
                // title: {
                //     text: 'PM ACCOMPLISHMENT (SECTION LEVEL)',
                //     align: 'left',
                //     offsetX: 0
                // },
                dataLabels: {
                    // formatter: (value) => value.toFixed(3)+' = 12',
                    enabled: true,
                },

                
                xaxis: {
                    
                    // categories: response.data.data.kpi.months_display,
                    categories: ["FFS1", "FFS2", "FFS3", "FFS4", "FFS5", "FFS6", "FFS7", "FFS8"],
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
                            text: "TARGET",
                            style: {
                                color: primary,
                            }
                        },
                        tooltip: {
                            enabled: true
                        },
                        min: 0,
                        max: 300,
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
                            color: success
                        },
                        labels: {
                            // formatter: (value) => value.toFixed(2),
                            style: {
                                colors: success,
                            }
                        },
                        title: {
                            text: "ACTUAL",
                            style: {
                                color: success,
                            }
                        },
                        min: 0,
                        max: 300,
                        tickAmount: 5,
                        forceNiceScale: false,
                    },
                    {
                        dataLabels: {
                            enabled: true,
                            formatter: function (val) {
                              return val + "%";
                            }
                            
                          },
                          
                        seriesName: '',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: warning
                        },
                        labels: {
                            formatter: function (val) {
                                return val + "%";
                              },
                            // formatter: (value) => value +'%',
                            style: {
                                colors: warning,
                            },

                            dataLabels: {
                                enabled: true,
                                formatter: function (val) {
                                  return val + "%";
                                }
                                
                              },
                        },

                       
                        
                        title: {
                            text: "COMPLETION",
                            style: {
                                color: warning,
                            }
                        },
                        forceNiceScale: false,
                        
                        min: 50,
                        max: 100,
                        tickAmount: 5,

                        dataLabels: {
                            enabled: true,
                            formatter: function (val) {
                              return val + "%";
                            }
                            
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

            vm.markershere = {
                series: [
                    {
                      name: 'Actual',
                      data: [
                        {
                          x: 'FFS1',
                          y: 140,
                          goals: [
                            {
                              name: 'Expected',
                              value: 140,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS2',
                          y: 84,
                          goals: [
                            {
                              name: 'Expected',
                              value: 72,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS3',
                          y: 73,
                          goals: [
                            {
                              name: 'Expected',
                              value: 65,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS4',
                          y: 133,
                          goals: [
                            {
                              name: 'Expected',
                              value: 133,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS5',
                          y: 98,
                          goals: [
                            {
                              name: 'Expected',
                              value: 98,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS6',
                          y: 160,
                          goals: [
                            {
                              name: 'Expected',
                              value: 187,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS7',
                          y: 160,
                          goals: [
                            {
                              name: 'Expected',
                              value: 187,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        },
                        {
                          x: 'FFS8',
                          y: 75,
                          goals: [
                            {
                              name: 'Expected',
                              value: 77,
                              strokeWidth: 5,
                              strokeColor: '#775DD0'
                            }
                          ]
                        }
                      ]
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
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                      fillColors: ['#00E396', '#775DD0']
                    }
                  }
            }
 


            var options = {
                series: [
                {
                  name: 'Actual',
                  data: [
                    {
                      x: '2011',
                      y: 1292,
                      goals: [
                        {
                          name: 'Expected',
                          value: 1400,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2012',
                      y: 4432,
                      goals: [
                        {
                          name: 'Expected',
                          value: 5400,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2013',
                      y: 5423,
                      goals: [
                        {
                          name: 'Expected',
                          value: 5200,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2014',
                      y: 6653,
                      goals: [
                        {
                          name: 'Expected',
                          value: 6500,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2015',
                      y: 8133,
                      goals: [
                        {
                          name: 'Expected',
                          value: 6600,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2016',
                      y: 7132,
                      goals: [
                        {
                          name: 'Expected',
                          value: 7500,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2017',
                      y: 7332,
                      goals: [
                        {
                          name: 'Expected',
                          value: 8700,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: '2018',
                      y: 6553,
                      goals: [
                        {
                          name: 'Expected',
                          value: 7300,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    }
                  ]
                }
              ],
                chart: {
                height: 350,
                type: 'bar'
              },
              plotOptions: {
                bar: {
                  columnWidth: '60%'
                }
              },
              colors: ['#00E396'],
              dataLabels: {
                enabled: false
              },
              legend: {
                show: true,
                showForSingleSeries: true,
                customLegendItems: ['Actual', 'Expected'],
                markers: {
                  fillColors: ['#00E396', '#775DD0']
                }
              }
              };
      
              var chart = new ApexCharts(document.querySelector("#chart"), options);
              chart.render();
            
        }

})();