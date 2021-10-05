(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('NetworkElementsCtrl', NetworkElementsCtrl) 
        .controller('EditNetworkElementsCtrl', EditNetworkElementsCtrl) 
        .controller('AddNetworkElementsCtrl', AddNetworkElementsCtrl) 
        
        NetworkElementsCtrl.$inject = ['NetworkElementsSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function NetworkElementsCtrl(NetworkElementsSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};
 
            // alert('as of')
            // NetworkElementsSrvcs.list({id:'', code:''}).then (function (response) {
            //     if(response.data.status == 200){
            //         vm.list = response.data.data;
            //         vm.list = response.data.count;
            //         console.log(vm.list)
            //     }
                    
            // }, function (){ alert('Bad Request!!!') })

            vm.edit = function(id){

                NetworkElementsSrvcs.list({id:id, center_code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-network-element-modal',
                            controller: 'EditNetworkElementsCtrl',
                            controllerAs: 'NetworkElementsCtrl',
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
                    templateUrl: 'add-network-element-modal',
                    controller: 'AddNetworkElementsCtrl',
                    controllerAs: 'NetworkElementsCtrl',
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
                return ' <a nowrap="nowrap" href="#" ng-click="NetworkElementsCtrl.edit(\'' + data + '\');"> Edit </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="NetworkElementsCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="NetworkElementsCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/network-elements',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                // DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('section_code').withTitle('Section'),
                DTColumnBuilder.newColumn('no_of_ne').withTitle('No. of NE'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];
        }

        AddNetworkElementsCtrl.$inject = ['collection', 'NetworkElementsSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function AddNetworkElementsCtrl(collection, NetworkElementsSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.addDetailsBtn = function(data){
                
                NetworkElementsSrvcs.store(data).then (function (response) {
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

        EditNetworkElementsCtrl.$inject = ['collection', 'NetworkElementsSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditNetworkElementsCtrl(collection, NetworkElementsSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)
 
            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
            vm.updateDetailsBtn = function(data){
                
                NetworkElementsSrvcs.update(data).then (function (response) {
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