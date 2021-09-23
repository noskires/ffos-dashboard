(function(){
  'use strict';
  angular
      .module('konsulta')
      .controller('ProjectCtrl', ProjectCtrl) 

      ProjectCtrl.$inject = ['ProjectSrvcs', 'AsOfDateSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
      function ProjectCtrl(ProjectSrvcs, AsOfDateSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
          var vm = this;
          var data = {};


          const primary = '#6993FF';
          const success = '#1BC5BD';
          const info = '#8950FC';
          const warning = '#FFA800';
          const danger = '#F64E60';
          const navyblue = '#05445E';

          const selected_year = 2021;


          vm.secondary_rehab = {
            series: [{
              name: 'ACCEPTED',
              data: [0,	0,	0,	0,	0,	0,	0,	0]
            }],
              chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%'
            }
          };

          vm.primary_rebuild = {
            series: [{
              name: 'ACCEPTED',
              data: [0,	0,	0,	0,	0,	0,	0,	0]
            }],
              chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%'
            }
          };

          vm.primary_rehab = {
            series: [{
              name: 'ACCEPTED',
              data: [0,	0,	0,	0,	0,	0,	0,	0]
            }],
              chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%'
            }
          };

          AsOfDateSrvcs.list({id:'2', code:''}).then (function (response) {
             
            if(response.data.status == 200){
              vm.primary_rebuild_as_of = response.data.data[0].as_of_date;
              console.log(vm.primary_rebuild_as_of)
            }
          });

          AsOfDateSrvcs.list({id:'3', code:''}).then (function (response) {
             
            if(response.data.status == 200){
              vm.primary_rehab_as_of = response.data.data[0].as_of_date;
              console.log(vm.primary_rehab_as_of)
            }
          });

          AsOfDateSrvcs.list({id:'4', code:''}).then (function (response) {
             
            if(response.data.status == 200){
              vm.secondary_rehab_as_of = response.data.data[0].as_of_date;
              console.log(vm.secondary_rehab_as_of)
            }
          });

          vm.download_projects = function(){
            $window.location.href = "dashboard/project-export";
          }
              
          ProjectSrvcs.projects({id:'', year:''}).then (function (response) {
            if(response.data.status == 200){
                  
              console.log(response.data)
              console.log(response.data.data.secondary_rehab)

              vm.primary_rebuild_summary = response.data.data.primary_rebuild.summary;
              vm.primary_rehab_summary = response.data.data.primary_rehab.summary;
              vm.secondary_rehab_summary = response.data.data.secondary_rehab.summary;

              vm.secondary_rehab = {
                  series: response.data.data.secondary_rehab.serries,
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
                colors: ['#00E396', '#2E294E', '#F46036', '#EA3546'],
                stroke: {
                  width: 1,
                  colors: ['#fff']
                },
                title: {
                  // text: 'SECONDARY PROJECTS'
                },
                xaxis: {
                  categories: ["WESTNL_FFS1", 
                      "WESTNL_FFS2", 
                      "WESTNL_FFS3", 
                      "EASTNL_FFS4", 
                      "EASTNL_FFS5", 
                      "CENTRALNL_FFS6", 
                      "CENTRALNL_FFS7", 
                      "CENTRALNL_FFS8",
                      "NL FFS"]
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

              vm.primary_rebuild = {
                 series: response.data.data.primary_rebuild.serries,
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
                 categories: ["WESTNL_FFS1", 
                     "WESTNL_FFS2", 
                     "WESTNL_FFS3", 
                     "EASTNL_FFS4", 
                     "EASTNL_FFS5", 
                     "CENTRALNL_FFS6", 
                     "CENTRALNL_FFS7", 
                     "CENTRALNL_FFS8",
                     "NL FFS",
                    ]
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
                 series: response.data.data.primary_rehab.serries,
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
               colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'],
               stroke: {
                 width: 1,
                 colors: ['#fff']
               },
               title: {
                 // text: 'SECONDARY PROJECTS'
               },
               xaxis: {
                 categories: ["WESTNL_FFS1", 
                     "WESTNL_FFS2", 
                     "WESTNL_FFS3", 
                     "EASTNL_FFS4", 
                     "EASTNL_FFS5", 
                     "CENTRALNL_FFS6", 
                     "CENTRALNL_FFS7", 
                     "CENTRALNL_FFS8",
                     "NL FFS",
                    ]
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
          }, function (){ alert('Bad Request!!!') })
          

      }



})();