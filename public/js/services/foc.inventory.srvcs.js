(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('FocInventorySrvcs', FocInventorySrvcs)
        FocInventorySrvcs.$inject = ['$http'];
        function FocInventorySrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/inventory/foc?id='+data.id+'&inventory_code='+data.inventory_code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                list2: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v2/inventory/foc?id='+data.id+'&inventory_code='+data.inventory_code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/inventory/foc/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/inventory/foc/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();