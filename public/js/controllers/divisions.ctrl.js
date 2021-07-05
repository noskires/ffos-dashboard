(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('DivisionsCtrl', DivisionsCtrl)

        DivisionsCtrl.$inject = ['EmployeesSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function DivisionsCtrl(EmployeesSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

            const primary = '#6993FF';
            const success = '#1BC5BD';
            const info = '#8950FC';
            const warning = '#FFA800';
            const danger = '#F64E60';
            const navyblue = '#05445E';

            // const selected_year = 2021;

            vm.selected_year = $stateParams.year;
            vm.division = $stateParams.division;
            vm.year = $stateParams.year;

            if($stateParams.division=="NFS_WESTNL"){ 
                vm.field_forces_selected = ["NFS_WESTNL_FFS1", "NFS_WESTNL_FFS2", "NFS_WESTNL_FFS3"];
            }else if($stateParams.division=="NFS_EASTNL"){ 
                vm.field_forces_selected = ["NFS_EASTNL_FFS4", "NFS_EASTNL_FFS5"];
            }else if($stateParams.division=="NFS_CENTRALNL"){ 
                vm.field_forces_selected = ["NFS_CENTRALNL_FFS6", "NFS_CENTRALNL_FFS7", "NFS_CENTRALNL_FFS8"];
            }else{
                vm.field_forces_selected = [];
            }

            console.log(vm.field_forces_selected)
            console.log(vm.field_forces)

            // alert('div controller here')

            vm.select_field_force = function(year, division, field_force){
                // alert(division) 
                // $state.go("dashboard_field_foce", { "field_foce": field_force});
            }
  

            if($stateParams.division!=""){

                DivisionsSrvcs.kpi({id:'', year:vm.year, division:$stateParams.division}).then (function (response) {
                    if(response.data.status == 200){
                      
                        // alert('div here '+$stateParams.division)
                        console.log('show');
                        console.log(response.data.data.kpi.mttr_node_display)
                        console.log(response.data.data.kpi.mttr_foc_display)
                        console.log(response.data.data)
                    
                        vm.ytd_total_ticket_node = response.data.data.kpi.ytd_total_ticket_node;
                        vm.ytd_total_ticket_foc = response.data.data.kpi.ytd_total_ticket_foc;
                        vm.ytd_avg_duration_node = response.data.data.kpi.ytd_avg_duration_node;
                        vm.ytd_avg_duration_foc = response.data.data.kpi.ytd_avg_duration_foc;
                        vm.ytd_net_ava = response.data.data.kpi.ytd_net_ava;
                        
    
                        vm.kpi = {
                            series: [{
                                name: 'NODE MTTR',
                                type: 'column',
                                // data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
                                data: response.data.data.kpi.mttr_node_display
                            }, {
                                name: 'FOC MTTR',
                                type: 'column',
                                data: response.data.data.kpi.mttr_foc_display
                            }, {
                                name: 'NET. AVA',
                                type: 'line',
                                data: response.data.data.kpi.net_ava
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
                                        formatter: (value) => value.toFixed(2) +'%',
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

            vm.select_division = function(year, division, field_force){
                // alert(division) 
                if(division==""){
                    $state.go("dashboard", {"year":$stateParams.year});
                }else{
                    $state.go("dashboard_division", {"year":$stateParams.year, "division": division});
                }

                vm.division         = $stateParams.division;
                vm.selected_year    = $stateParams.year;

                // $state.reload();

                DivisionsSrvcs.kpi({id:'', year:$stateParams.year, division:$stateParams.division}).then (function (response) {
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
                                name: 'NODE MTTR',
                                type: 'column',
                                // data: [6.98, 6.34, 5.23, 6.26, 3.67, 5.48]
                                data: response.data.data.kpi.mttr_node_display
                            }, {
                                name: 'FOC MTTR',
                                type: 'column',
                                data: response.data.data.kpi.mttr_foc_display
                            }, {
                                name: 'NET. AVA',
                                type: 'line',
                                data: response.data.data.kpi.net_ava
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
                                        formatter: (value) => value.toFixed(2) +'%',
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

            vm.select_year = function(year, division, field_force){
 

                if(division==""){
                    $state.go("dashboard", {"year":year});
                }else{
                    $state.go("dashboard_division", {"year":year, "division": division});
                }
            }

            vm.select_section = function(year, division, section){
                alert(section) 
                if(section==""){
                    $state.go("dashboard_division", {"year":vm.selected_year, "division": division});
                }else{
                    $state.go("dashboard_section", {"year":vm.selected_year, "division": division, "section": section});
                }
                
                
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

            DivisionsSrvcs.topContributors({id:'', year:$stateParams.year, division:$stateParams.division}).then (function (response) {
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

            

            

            vm.routeTo = function(route){
                $window.location.href = route;
            }; 
            
        }
 

})();