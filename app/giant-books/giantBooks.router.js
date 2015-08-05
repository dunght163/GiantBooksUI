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
                templateUrl: 'giant-books/giantBooks.router.html',
                controller: 'giantBooksController'
            })

            .when('/home', {
                templateUrl: 'giant-books/home/home.tpl.html',
                controller: 'homeController'
            })

            .when('/settings', {
                templateUrl: 'giant-books/settings/settings.tpl.html',
                controller: 'settingsController'
            })

            .when('/about', {
                templateUrl: 'giant-books/about/about.tpl.html',
                controller: 'aboutController'
            })

            .when('/login', {
                templateUrl: 'giant-books/login/login.tpl.html',
                controller: 'loginController'
            })

            .when('/register', {
                templateUrl: 'giant-books/register/register.tpl.html',
                controller: 'registerController'
            })
    }])
;