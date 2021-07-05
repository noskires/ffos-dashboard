(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('StaticCtrl', StaticCtrl) 

        StaticCtrl.$inject = ['EmployeesSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function StaticCtrl(EmployeesSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

            const primary = '#6993FF';
            const success = '#1BC5BD';
            const info = '#8950FC';
            const warning = '#FFA800';
            const danger = '#F64E60';
            const navyblue = '#05445E';

            const selected_year = 2021;
 
        

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

            //   sample annotation

            // vm.annotation = {
            //     series: [{
            //     data: series.monthDataSeries1.prices
            //   }],
            //     chart: {
            //     height: 350,
            //     type: 'line',
            //     id: 'areachart-2'
            //   },
            //   annotations: {
            //     yaxis: [{
            //       y: 8200,
            //       borderColor: '#00E396',
            //       label: {
            //         borderColor: '#00E396',
            //         style: {
            //           color: '#fff',
            //           background: '#00E396',
            //         },
            //         text: 'Support',
            //       }
            //     }, {
            //       y: 8600,
            //       y2: 9000,
            //       borderColor: '#000',
            //       fillColor: '#FEB019',
            //       opacity: 0.2,
            //       label: {
            //         borderColor: '#333',
            //         style: {
            //           fontSize: '10px',
            //           color: '#333',
            //           background: '#FEB019',
            //         },
            //         text: 'Y-axis range',
            //       }
            //     }],
            //     xaxis: [{
            //       x: new Date('23 Nov 2017').getTime(),
            //       strokeDashArray: 0,
            //       borderColor: '#775DD0',
            //       label: {
            //         borderColor: '#775DD0',
            //         style: {
            //           color: '#fff',
            //           background: '#775DD0',
            //         },
            //         text: 'Anno Test',
            //       }
            //     }, {
            //       x: new Date('26 Nov 2017').getTime(),
            //       x2: new Date('28 Nov 2017').getTime(),
            //       fillColor: '#B3F7CA',
            //       opacity: 0.4,
            //       label: {
            //         borderColor: '#B3F7CA',
            //         style: {
            //           fontSize: '10px',
            //           color: '#fff',
            //           background: '#00E396',
            //         },
            //         offsetY: -10,
            //         text: 'X-axis range',
            //       }
            //     }],
            //     points: [{
            //       x: new Date('01 Dec 2017').getTime(),
            //       y: 8607.55,
            //       marker: {
            //         size: 8,
            //         fillColor: '#fff',
            //         strokeColor: 'red',
            //         radius: 2,
            //         cssClass: 'apexcharts-custom-class'
            //       },
            //       label: {
            //         borderColor: '#FF4560',
            //         offsetY: 0,
            //         style: {
            //           color: '#fff',
            //           background: '#FF4560',
            //         },
              
            //         text: 'Point Annotation',
            //       }
            //     }, {
            //       x: new Date('08 Dec 2017').getTime(),
            //       y: 9340.85,
            //       marker: {
            //         size: 0
            //       },
            //       image: {
            //         path: '../../assets/images/ico-instagram.png'
            //       }
            //     }]
            //   },
            //   dataLabels: {
            //     enabled: false
            //   },
            //   stroke: {
            //     curve: 'straight'
            //   },
            //   grid: {
            //     padding: {
            //       right: 30,
            //       left: 20
            //     }
            //   },
            //   title: {
            //     text: 'Line with Annotations',
            //     align: 'left'
            //   },
            //   labels: series.monthDataSeries1.dates,
            //   xaxis: {
            //     type: 'datetime',
            //   },
            //   };
      
       

        }
 
 

})();