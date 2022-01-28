(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('NetworkElementsSrvcs', NetworkElementsSrvcs)
        NetworkElementsSrvcs.$inject = ['$http'];
        function NetworkElementsSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/network-elements?id='+data.id+'&section_code='+data.section_code+'&division_code='+data.division_code+'&year='+data.year,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/network-element/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/network-element/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();