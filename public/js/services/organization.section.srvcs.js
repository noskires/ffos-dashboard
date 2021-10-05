(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('OrganizationSectionSrvcs', OrganizationSectionSrvcs)
        OrganizationSectionSrvcs.$inject = ['$http'];
        function OrganizationSectionSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/organization-sections?id='+data.id+'&section_code='+data.section_code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-section/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/organization-section/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();