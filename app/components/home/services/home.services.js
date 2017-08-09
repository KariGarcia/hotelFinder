    angular.module('angularstrapApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

    function asyncService($http, $q) {

        var factory = {
            getHotels: getHotels
        };

        function getHotels() {

            var defer = $q.defer()

            $http({
                method: 'GET',
                url: "http://localhost:8080/api/hotels"

            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise
        }

        return factory;
    }