(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('StaticCtrl', StaticCtrl) 

        StaticCtrl.$inject = ['EmployeesSrvcs','StaticSrvcs', 'DivisionsSrvcs', 'FocSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function StaticCtrl(EmployeesSrvcs, StaticSrvcs, DivisionsSrvcs, FocSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

            const primary = '#6993FF';
            const success = '#1BC5BD';
            const info = '#8950FC';
            const warning = '#FFA800';
            const danger = '#F64E60';
            const navyblue = '#05445E';

            const selected_year = 2021;
 

            // StaticSrvcs.projects({id:''}).then (function (response) {
            //   if(response.data.status == 200){
            //       console.log(response.data.data)

            //       vm.projects = response.data.data;

            //       vm.sections = ["NFS_WESTNL_FFS1", 
            //         "NFS_WESTNL_FFS2", 
            //         "NFS_WESTNL_FFS3", 
            //         "NFS_EASTNL_FFS4", 
            //         "NFS_EASTNL_FFS5", 
            //         "NFS_CENTRALNL_FFS6", 
            //         "NFS_CENTRALNL_FFS7", 
            //         "NFS_CENTRALNL_FFS8"];
        

            //       vm.secondary_rehab = [];

            //       angular.forEach(response.data.data.secondary_rehab['OPEN'], function(value, key) {

            //         angular.forEach(vm.sections, function(value2, key2) {

            //             if(key==value2){
            //               vm.secondary_rehab.push(key);
            //             }else{
            //               vm.secondary_rehab.push(0);
            //             }
                        
            //         });

            //       });

            //       console.log(vm.secondary_rehab)
            //   }
            // }, function (){ alert('Bad Request!!!') });

             // stack 100
             vm.secondary_rehab = 
             {
                  series: [{
                  name: 'OPEN',
                  data: [0,	0,	0,	0,	0,	1,	3,	0]
                }, {

                  name: 'ONGOING',
                  data: [1,	2,	4,	3,	0,	1,	3,	1]
                }, {
                  name: 'FOR IMPLEMENTATION',
                  data: [0,	0,	1,	0,	0,	0,	0,	0]
                }, {
                  name: 'ACCEPTED',
                  data: [7,	0,	1,	4,	0,	1,	1,	6]
                }
              ],
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
                colors: ['#2E294E', '#F46036', '#EA3546', '#00E396'],
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
                      return val + ""
                    }
                  }
                },
                fill: {
                  opacity: 1
                
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'center',
                  // offsetX: 40
                }
              };

              vm.primary_rebuild = 
              {
                   series: [{
                   name: 'FOR PERMIT APPROVAL',
                   data: [4, 6, 1, 0, 6, 0, 2, 1]
                 }, {
 
                   name: 'ONGOING IMPLEM',
                   data: [8, 1, 15, 0, 6, 0, 2, 2]
                 }, {
                   name: 'FOR ACCEPTANCE',
                   data: [1, 0, 1, 0, 1, 0, 1, 0]
                 }, {
                   name: 'ACCEPTED FOR CUT-OVER',
                   data: [9, 0, 3, 0, 6, 0, 0, 2]
                 }, {
                  name: 'ACCEPTED/RFS',
                  data: [2, 1, 11, 10, 11, 0, 0, 1]
                }
                // , {
                //   name: 'OVERALL',
                //   data: [24, 8, 31, 10, 30, 0, 5, 6]
                // }
               ],
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
                       return val + ""
                     }
                   }
                 },
                 fill: {
                   opacity: 1
                 
                 },
                 legend: {
                   position: 'top',
                   horizontalAlign: 'center',
                  //  offsetX: 40
                 }
               };


               vm.primary_rehab = 
              {
                   series: [{
                   name: 'PLAN PREPARATION',
                   data: [0, 0, 0, 0, 0, 0, 0, 1]
                 }, {
 
                   name: 'PLAN APPROVAL',
                   data: [0, 10, 1, 0, 0, 0, 1, 0]
                 }, {
                   name: 'FPERMIT APPLICATION',
                   data: [0, 8, 2, 2, 0, 0, 0, 1]
                 }, {
                   name: 'PERMIT APPROVAL',
                   data: [0, 0, 4, 5, 2, 1, 2, 2]
                 }, {
                  name: 'RTA APPROVAL',
                  data: [0, 1, 0, 0, 0, 0, 0, 0]
                }, {
                  name: 'ONGOING',
                  data: [8, 6, 8, 7, 7, 0, 1, 7]
                }
                , {
                  name: 'FOR IMPLEM',
                  data: [0, 1, 0, 0, 2, 0, 0, 0]
                }
                , {
                  name: 'FOR PRE-ACCEPTANCE',
                  data: [1, 2, 0, 3, 0, 0, 1, 0]
                }
                , {
                  name: 'IMPLEM COMPLETED',
                  data: [2, 0, 0, 1, 0, 0, 2, 2]
                }
                , {
                  name: 'FOR ACCEPTANCE',
                  data: [0, 0, 0, 3, 0, 0, 0, 1]
                }, {
                  name: 'ACCEPTED',
                  data: [3, 7, 3, 0, 3, 1, 2, 11]
                }
                // , {
                //   name: 'OVERALL',
                //   data: [24, 8, 31, 10, 30, 0, 5, 6]
                // }
               ],
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
                 colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
                '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
              ],
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
                       return val + ""
                     }
                   }
                 },
                 fill: {
                   opacity: 1
                 
                 },
                 legend: {
                   position: 'top',
                   horizontalAlign: 'center',
                  //  offsetX: 40
                 }
               };


        }
 
 

})();