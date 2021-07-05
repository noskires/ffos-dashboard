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
      
       

        }
 
 

})();