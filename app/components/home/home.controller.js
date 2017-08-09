'use strict';

angular.module('angularstrapApp')
    .controller('homeController', homeController);

homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

function homeController($scope, $http, $window, $q, asyncService) {

    var vm = this;

    vm.angularstrapService = asyncService;
    vm.$onInit = getHotels;

    function getHotels(){

        asyncService.getHotels()
            .then(function (data) {
                vm.hotels = data.hotels;
            }, function (error) {
            });
    }

    vm.getSimpleArray = function(length){
        var array = new Array(parseInt(length));
        return array; 
    }
}