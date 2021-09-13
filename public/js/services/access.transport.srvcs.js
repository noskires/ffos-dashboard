(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('AccessTransportSrvcs', AccessTransportSrvcs)
        AccessTransportSrvcs.$inject = ['$http'];
        function AccessTransportSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/patients?id='+data.id,
                        headers: {'Content-Type': 'application/json'}
                    })
                },
                listPerWeek: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/list_per_week?id='+data.id,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                topContributors: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/list_per_week?id='+data.id+'&year='+data.year,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                kpi: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/list_per_week?id='+data.id+'&year='+data.year,
                        headers: {'Content-Type': 'application/json'}
                    })
                },
                // store: function(data) {
                //     return $http({
                //         method: 'POST',
                //         url: 'api/v1/patient/store',
                //         data: data,
                //         headers: {'Content-Type': 'application/json'}
                //     })
                // },
                // update: function(data) {
                //     return $http({
                //         method: 'POST',
                //         url: 'api/v1/patient/update',
                //         data: data,
                //         headers: {'Content-Type': 'application/json'}
                //     })
                // },
                // remove: function(data) {
                //     return $http({
                //         method: 'POST',
                //         url: 'api/v1/patient/remove',
                //         data: data,
                //         headers: {'Content-Type': 'application/json'}
                //     })
                // }

            };
        }
})();