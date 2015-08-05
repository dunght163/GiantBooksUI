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
            .when('/giantBooks', {
                templateUrl: 'giantbooks.router.html',
                controller: 'GiantBooksRouterController'
            })

            .when('/home', {
                templateUrl: 'home/home.tpl.html',
                controller: 'homeController'
            })

            .when('/settings', {
                templateUrl: 'settings/settings.tpl.html',
                controller: 'settingsController'
            })

            .when('/about', {
                templateUrl: 'about/about.tpl.html',
                controller: 'aboutController'
            })

            .when('/login', {
                templateUrl: 'login/login.tpl.html',
                controller: 'loginController'
            })

            .when('/register', {
                templateUrl: 'register/register.tpl.html',
                controller: 'registerController'
            })
    }])
;