(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('DivisionsSrvcs', DivisionsSrvcs)
        DivisionsSrvcs.$inject = ['$http'];
        function DivisionsSrvcs($http) {
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
                        url: 'api/v1/division_kpi?id='+data.id,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                topContributors: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/division_kpi?id='+data.id+'&year='+data.year+'&division='+data.division,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

                kpi: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/division_kpi?id='+data.id+'&year='+data.year+'&division='+data.division,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();