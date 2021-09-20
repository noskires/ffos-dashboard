(function(){
    'use strict';
    angular
        .module('konsulta')
        .factory('ProjectSrvcs', ProjectSrvcs)
        ProjectSrvcs.$inject = ['$http'];
        function ProjectSrvcs($http) {
            return {
                

                projects: function(data) {
                    return $http({
                        method: 'GET',
                        data: data,
                        url: 'api/v1/projects?id='+data.id+'&year='+data.year,
                        headers: {'Content-Type': 'application/json'}
                    })
                },

            };
        }
})();