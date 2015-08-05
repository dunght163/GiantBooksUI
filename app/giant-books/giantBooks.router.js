/**
 * Created by dunght163 on 7/31/15.
 */
'use strict';

angular.module('giantBooks.router', [
        'ngRoute',
        'giantBooks.controller',
        'giantBooks.home.controller',
        'giantBooks.settings.controller',
        'giantBooks.about.controller',
        'giantBooks.login.controller',
        'giantBooks.register.controller'
    ]
)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/giant-books', {
                redirectTo: 'giant-books/home'
            })

            .when('/giant-books/home', {
                templateUrl: 'giant-books/home/home.tpl.html',
                controller: 'homeController'
            })

            .when('/giant-books/settings', {
                templateUrl: 'giant-books/settings/settings.tpl.html',
                controller: 'settingsController'
            })

            .when('/giant-books/about', {
                templateUrl: 'giant-books/about/about.tpl.html',
                controller: 'aboutController'
            })

            .when('/giant-books/login', {
                templateUrl: 'giant-books/login/login.tpl.html',
                controller: 'loginController'
            })

            .when('/giant-books/register', {
                templateUrl: 'giant-books/register/register.tpl.html',
                controller: 'registerController'
            })

            .when('/giant-books/page404', {
                templateUrl: 'giant-books/page404.tpl.html'
                //controller: ''
            })

            .otherwise({redirectTo: '/giant-books/page404'})
    }])
;