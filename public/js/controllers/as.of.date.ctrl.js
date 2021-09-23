(function(){
    'use strict';
    angular
        .module('konsulta')
        .controller('AsOfDateCtrl', AsOfDateCtrl) 
        .controller('EditAsOfDateCtrl', EditAsOfDateCtrl) 
        .controller('AddAsOfDateCtrl', AddAsOfDateCtrl) 
        
        AsOfDateCtrl.$inject = ['AsOfDateSrvcs', '$scope', '$stateParams', '$state', '$uibModal', '$window', '$rootScope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'SweetAlert'];
        function AsOfDateCtrl(AsOfDateSrvcs, $scope, $stateParams, $state, $uibModal, $window, $rootScope, $compile, DTOptionsBuilder, DTColumnBuilder, SweetAlert){
            var vm = this;
            var data = {};
 
            // alert('as of')
            // AsOfDateSrvcs.list({id:'', code:''}).then (function (response) {
            //     if(response.data.status == 200){
            //         vm.list = response.data.data;
            //         vm.list = response.data.count;
            //         console.log(vm.list)
            //     }
                    
            // }, function (){ alert('Bad Request!!!') })

            vm.edit = function(id){

                AsOfDateSrvcs.list({id:id, code:''}).then (function (response) {
                    if(response.data.status == 200)
                    {

                        vm.list = response.data.data[0];

                        $uibModal.open({
                            templateUrl: 'edit-asofdate-modal',
                            controller: 'EditAsOfDateCtrl',
                            controllerAs: 'AsOfDateCtrl',
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
                    templateUrl: 'add-asofdate-modal',
                    controller: 'AddAsOfDateCtrl',
                    controllerAs: 'AsOfDateCtrl',
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
                return ' <a nowrap="nowrap" href="#" ng-click="AsOfDateCtrl.edit(\'' + data + '\');"> Edit </a>';
                // return ' <a nowrap="nowrap" href="#" ng-click="AsOfDateCtrl.editEmployee(\'' + data + '\');"> edit </a> | <a nowrap="nowrap" href="#" ng-click="AsOfDateCtrl.deleteEmployee(\'' + data + '\');"> delete </a>';
            }

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: 'api/v2/as-of-dates',
                type: 'GET'
            })
            // or here
            .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withPaginationType('full_numbers');
            vm.dtColumns = [ 
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('name').withTitle('Type'),
                DTColumnBuilder.newColumn('as_of_date').withTitle('As of date'),
                DTColumnBuilder.newColumn('id').withTitle('Actions').renderWith(vm.renderActions)
                .withOption('createdCell', function(cell, cellData, rowData, rowIndex, colIndex) {
                    $compile(angular.element(cell).contents())($scope);
                }), 
                // DTColumnBuilder.newColumn('').withTitle('Action')  
            ];
        }

        AddAsOfDateCtrl.$inject = ['collection', 'AsOfDateSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function AddAsOfDateCtrl(collection, AsOfDateSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            // vm.collection = collection.data;
            // console.log(vm.collection)
 

            // collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.addDetailsBtn = function(data){
                
                AsOfDateSrvcs.store(data).then (function (response) {
                    if(response.data.status == 200){
                        // alert('Successfully Updated!')
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

        EditAsOfDateCtrl.$inject = ['collection', 'AsOfDateSrvcs', '$state', '$stateParams', '$uibModal', '$uibModalInstance', '$window', 'SweetAlert'];
        function EditAsOfDateCtrl(collection, AsOfDateSrvcs, $state, $stateParams, $uibModal, $uibModalInstance, $window, SweetAlert){
            var vm = this;
            var data = {};

            vm.collection = collection.data;
            console.log(vm.collection)
 

            collection.data.as_of_date = new Date(collection.data.as_of_date);
 
 
            vm.updateDetailsBtn = function(data){
                
                AsOfDateSrvcs.update(data).then (function (response) {
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