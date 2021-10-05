(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('OrganizationCenterSrvcs', OrganizationCenterSrvcs)
        OrganizationCenterSrvcs.$inject = ['$http'];
        function OrganizationCenterSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/organization-centers?id='+data.id+'&center_code='+data.center_code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-center/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-center/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();