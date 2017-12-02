'use strict'

angular.
    module('myApp', [
        'ngRoute',
        'myControllers'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/partials/search.html',
                controller: 'SearchController'
            })
            .when('/details/:itemId', {
                templateUrl: 'js/partials/details.html',
                controller: 'DetailsController'
            });
    }]);