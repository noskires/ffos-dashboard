(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('OrganizationDivisionCtrl', OrganizationDivisionCtrl) 
        .controller('EditOrganizationDivisionCtrl', EditOrganizationDivisionCtrl) 
        .controller('AddOrganizationDivisionCtrl', AddOrganizationDivisionCtrl) 
        
        OrganizationDivisionCtrl.$inject = ['OrganizationDivisionSrvcs', 'OrganizationCenterSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function OrganizationDivisionCtrl(OrganizationDivisionSrvcs, OrganizationCenterSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};

            
            


            vm.edit = function(id){

                OrganizationDivisionSrvcs.list({id:id, division_code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-organization-division-modal',
                            controller: 'EditOrganizationDivisionCtrl',
                            controllerAs: 'OrganizationDivisionCtrl',
                            backdrop: 'static',
                            keyboard  : false,
                            resolve :{
                                collection: function () {
                                    return {
                                        data: vm.list
                                    };
                                }
                            },
                            // size: 'lg'
                        });

                        return false;
                    }
                }, function (){ alert('Bad Request!!!') })
            }

            vm.add = function(){
                
                $uibModal.open({
                    templateUrl: 'add-organization-division-modal',
                    controller: 'AddOrganizationDivisionCtrl',
                    controllerAs: 'OrganizationDivisionCtrl',
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

            vm.renderActions = function(data) {
                return ' <a nowrap="nowrap" href="#" ng-click="OrganizationDivisionCtrl.edit(\'' + data + '\');"> Edit </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="OrganizationDivisionCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="OrganizationDivisionCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/organization-divisions',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                // DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('division_code').withTitle('Code'),
                DTColumnBuilder.newColumn('division_name').withTitle('Division'),
                DTColumnBuilder.newColumn('center_code').withTitle('Center'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];
        }

        AddOrganizationDivisionCtrl.$inject = ['collection', 'OrganizationDivisionSrvcs', 'OrganizationCenterSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function AddOrganizationDivisionCtrl(collection, OrganizationDivisionSrvcs, OrganizationCenterSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            
            OrganizationCenterSrvcs.list({id:'', center_code:''}).then (function (response) {
                if(response.data.status == 200)
                {
                    vm.center_list = response.data.data;
                    console.log(vm.center_list)
                }

            }, function (){ alert('Bad Request!!!') })
 
            vm.addDetailsBtn = function(data){
                
                OrganizationDivisionSrvcs.store(data).then (function (response) {
                    if(response.data.status == 200){
                        // alert('Successfully Updated!')
                        SweetAlert.swal("Success!", "Successfully saved!", "success");
                        $state.reload();
                        vm.close()
                    }else{
                        SweetAlert.swal("Error!", "", "error");
                        $state.reload();
                        vm.close()
                    }
                }, function (){ alert('Bad Request!!!') })
            }

            vm.close = function() {
                $uibModalInstance.close();
            };

        }

        EditOrganizationDivisionCtrl.$inject = ['collection', 'OrganizationDivisionSrvcs', 'OrganizationCenterSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditOrganizationDivisionCtrl(collection, OrganizationDivisionSrvcs, OrganizationCenterSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)

            OrganizationCenterSrvcs.list({id:'', center_code:''}).then (function (response) {
                if(response.data.status == 200)
                {
                    vm.center_list = response.data.data;
                    console.log(vm.center_list)
                }

            }, function (){ alert('Bad Request!!!') })
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.updateDetailsBtn = function(data){
                
                OrganizationDivisionSrvcs.update(data).then (function (response) {
                    if(response.data.status == 200){
                        // alert('Successfully Updated!')
                        SweetAlert.swal("Success!", "Successfully updated!", "success");
                        $state.reload();
                        vm.close()
                    }else{
                        SweetAlert.swal("Error!", "", "error");
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