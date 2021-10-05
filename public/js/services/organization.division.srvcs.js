(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('OrganizationDivisionSrvcs', OrganizationDivisionSrvcs)
        OrganizationDivisionSrvcs.$inject = ['$http'];
        function OrganizationDivisionSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/organization-divisions?id='+data.id+'&division_code='+data.division_code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-division/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-division/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();