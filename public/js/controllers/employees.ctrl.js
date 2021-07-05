(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('EmployeesCtrl', EmployeesCtrl)
        .controller('CreateEmployeesCtrl', CreateEmployeesCtrl)
        .controller('EditEmployeesCtrl', EditEmployeesCtrl)

        EmployeesCtrl.$inject = ['EmployeesSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function EmployeesCtrl(EmployeesSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

            const primary = '#6993FF';
            const success = '#1BC5BD';
            const info = '#8950FC';
            const warning = '#FFA800';
            const danger = '#F64E60';
            const navyblue = '#05445E';

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

             // stack 100
             vm.stacked100 = {
                series: [{
                name: 'OPEN',
                data: [44, 55, 41, 37, 22, 43, 21, 33]
              }, {
                name: 'ONGOING',
                data: [53, 32, 33, 52, 13, 43, 32, 20]
              }, {
                name: 'FOR IMPLEMENTATION',
                data: [12, 17, 11, 9, 15, 11, 20, 21]
              }, {
                name: 'ACCEPTED',
                data: [25, 12, 19, 32, 25, 24, 10,12]
              }],
                chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                // text: 'SECONDARY PROJECTS'
              },
              xaxis: {
                categories: ["NFS_WESTNL_FFS1", 
                    "NFS_WESTNL_FFS2", 
                    "NFS_WESTNL_FFS3", 
                    "NFS_EASTNL_FFS4", 
                    "NFS_EASTNL_FFS5", 
                    "NFS_CENTRALNL_FFS6", 
                    "NFS_CENTRALNL_FFS7", 
                    "NFS_CENTRALNL_FFS8"]
                    ,
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + "K"
                  }
                }
              },
              fill: {
                opacity: 1
              
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
              };
      
             
            // stack 100
            
            
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

            
            //render dtables here

            vm.editEmployee = function(id){
 
                alert(id)

                EmployeesSrvcs.list({id:id}).then (function (response) {
                    if(response.data.status == 200)
                    {
                        vm.employee = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-employee-modal',
                            controller: 'EditEmployeesCtrl',
                            controllerAs: 'EmployeesCtrl',
                            backdrop: 'static',
                            keyboard  : false,
                            resolve :{
                                collection: function () {
                                    return {
                                        data: vm.employee
                                    };
                                }
                            },
                            // size: 'lg'
                        });
                        
                    }
                }, function (){ alert('Bad Request!!!') })

               

            }

            vm.deleteEmployee = function(code){
 
                alert(code)

            }

            vm.renderActions = function(data) {
                return ' <a nowrap="nowrap" href="#" ng-click="EmployeesCtrl.editEmployee(\'' + data + '\');"> 1 </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="EmployeesCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="EmployeesCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }


            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v1/patients',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('lname').withTitle('Last name'),
                DTColumnBuilder.newColumn('fname').withTitle('First name'),
                DTColumnBuilder.newColumn('mname').withTitle('Middle name'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                DTColumnBuilder.newColumn('').withTitle('Action')
                
            ];

            vm.newEmployeeBtn = ()=>{
                
                $uibModal.open({
                    templateUrl: 'add-employee-modal',
                    controller: 'CreateEmployeesCtrl',
                    controllerAs: 'EmployeesCtrl',
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

            vm.deleteEmployee = (id)=>{
                SweetAlert.swal({
                    title: "Are you sure you want to delete this record?",
                    text: "sample text",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (!isConfirm) {
                        SweetAlert.swal("Cancelled!", "", "error");
                        
                    } else {

                        EmployeesSrvcs.remove({id:id}).then ( (response)=> {
                            if(response.data.status == 200){
                                SweetAlert.swal("Success!", "This record has been deleted.", "success");
                                $state.reload();
                            }else{
                                SweetAlert.swal("Error!", "Bad request!.", "error");
                            }
                        },()=>{ alert('Bad Request!!!') })
                    }
                });
            }

            vm.routeTo = function(route){
                $window.location.href = route;
            }; 
            
        }


        CreateEmployeesCtrl.$inject = ['EmployeesSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function CreateEmployeesCtrl(EmployeesSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.createEmployeeBtn = (data)=>{
                
                EmployeesSrvcs.store(data).then (function (response) {
                    if(response.data.status == 200){
                        // alert('Successfully Saved!')
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

        EditEmployeesCtrl.$inject = ['collection', 'EmployeesSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditEmployeesCtrl(collection, EmployeesSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)

            vm.updateEmployeeBtn = (data)=>{
                
                EmployeesSrvcs.update(data).then (function (response) {
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