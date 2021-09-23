(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('AsOfDateSrvcs', AsOfDateSrvcs)
        AsOfDateSrvcs.$inject = ['$http'];
        function AsOfDateSrvcs($http) {
            return {
                list: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/as-of-dates?id='+data.id+'&code='+data.code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                list2: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/as-of-dates2?id='+data.id+'&code='+data.code,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                store: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/as-of-date/store',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                update: function(data) {
                    return $http({
                        method: 'POST',
                        url: 'api/v1/as-of-date/update',
                        data: data,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();