'use strict'

angular.
    module('myApp', []).
    controller('MyController', function MyController($scope, $http) {
        
        $http.get('js/data.json')
            .then(function(response) {
                $scope.artists = response.data;
                $scope.artistOrder = 'name';
        });

        
    });