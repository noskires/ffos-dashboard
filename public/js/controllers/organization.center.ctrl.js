(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('OrganizationCenterCtrl', OrganizationCenterCtrl) 
        .controller('EditOrganizationCenterCtrl', EditOrganizationCenterCtrl) 
        .controller('AddOrganizationCenterCtrl', AddOrganizationCenterCtrl) 
        
        OrganizationCenterCtrl.$inject = ['OrganizationCenterSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function OrganizationCenterCtrl(OrganizationCenterSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};
 
            // alert('as of')
            // OrganizationCenterSrvcs.list({id:'', code:''}).then (function (response) {
            //     if(response.data.status == 200){
            //         vm.list = response.data.data;
            //         vm.list = response.data.count;
            //         console.log(vm.list)
            //     }
                    
            // }, function (){ alert('Bad Request!!!') })

            vm.edit = function(id){

                OrganizationCenterSrvcs.list({id:id, center_code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-organization-center-modal',
                            controller: 'EditOrganizationCenterCtrl',
                            controllerAs: 'OrganizationCenterCtrl',
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
                    templateUrl: 'add-organization-center-modal',
                    controller: 'AddOrganizationCenterCtrl',
                    controllerAs: 'OrganizationCenterCtrl',
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
                return ' <a nowrap="nowrap" href="#" ng-click="OrganizationCenterCtrl.edit(\'' + data + '\');"> Edit </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="OrganizationCenterCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="OrganizationCenterCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/organization-centers',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                // DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('center_code').withTitle('Code'),
                DTColumnBuilder.newColumn('center_name').withTitle('Center'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];
        }

        AddOrganizationCenterCtrl.$inject = ['collection', 'OrganizationCenterSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function AddOrganizationCenterCtrl(collection, OrganizationCenterSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            // vm.collection = collection.data;
            // console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.addDetailsBtn = function(data){
                
                OrganizationCenterSrvcs.store(data).then (function (response) {
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

        EditOrganizationCenterCtrl.$inject = ['collection', 'OrganizationCenterSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditOrganizationCenterCtrl(collection, OrganizationCenterSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
            vm.updateDetailsBtn = function(data){
                
                OrganizationCenterSrvcs.update(data).then (function (response) {
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