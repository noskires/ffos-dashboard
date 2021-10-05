(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('OrganizationSectionCtrl', OrganizationSectionCtrl) 
        .controller('EditOrganizationSectionCtrl', EditOrganizationSectionCtrl) 
        .controller('AddOrganizationSectionCtrl', AddOrganizationSectionCtrl) 
        
        OrganizationSectionCtrl.$inject = ['OrganizationSectionSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function OrganizationSectionCtrl(OrganizationSectionSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};
 
            // alert('as of')
            // OrganizationSectionSrvcs.list({id:'', code:''}).then (function (response) {
            //     if(response.data.status == 200){
            //         vm.list = response.data.data;
            //         vm.list = response.data.count;
            //         console.log(vm.list)
            //     }
                    
            // }, function (){ alert('Bad Request!!!') })

            vm.edit = function(id){

                OrganizationSectionSrvcs.list({id:id, div_code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-organization-section-modal',
                            controller: 'EditOrganizationSectionCtrl',
                            controllerAs: 'OrganizationSectionCtrl',
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
                    templateUrl: 'add-organization-section-modal',
                    controller: 'AddOrganizationSectionCtrl',
                    controllerAs: 'OrganizationSectionCtrl',
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
                return ' <a nowrap="nowrap" href="#" ng-click="OrganizationSectionCtrl.edit(\'' + data + '\');"> Edit </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="OrganizationSectionCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="OrganizationSectionCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/organization-sections',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                // DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('section_code').withTitle('Code'),
                DTColumnBuilder.newColumn('section_name').withTitle('Section'),
                DTColumnBuilder.newColumn('division_code').withTitle('Division'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];
        }

        AddOrganizationSectionCtrl.$inject = ['collection', 'OrganizationSectionSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function AddOrganizationSectionCtrl(collection, OrganizationSectionSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            // vm.collection = collection.data;
            // console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.addDetailsBtn = function(data){
                
                OrganizationSectionSrvcs.store(data).then (function (response) {
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

        EditOrganizationSectionCtrl.$inject = ['collection', 'OrganizationSectionSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditOrganizationSectionCtrl(collection, OrganizationSectionSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.updateDetailsBtn = function(data){
                
                OrganizationSectionSrvcs.update(data).then (function (response) {
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