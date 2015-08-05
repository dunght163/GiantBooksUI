'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.version',
        'myApp.giantBooks'
    ]
)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/giant-books', {
                templateUrl: 'giant-books/giantBooks.router.html',
                controller: 'giantBooksController'
            })

            .otherwise({redirectTo: '/giant-books/page404'});
    }])
;
