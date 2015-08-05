/**
 * Created by dunght163 on 7/31/15.
 */
'use strict';

angular.module('giantBooks.controller', []
)
    .controller('giantBooksController', giantBooksController)
;


function giantBooksController($scope) {
    $scope.template = {
        home: 'giant-books/home/home.tpl.html',
        settings: 'giant-books/settings/settings.tpl.html'
    };

    $scope.currentPage = 'home'; //default

    $scope.setCurrentPageHome = setCurrentPageHome;
    $scope.setCurrentPageSettings = setCurrentPageSettings;
    $scope.isHome = isHome;
    $scope.isSettings = isSettings;

    function setCurrentPageHome() {
        $scope.currentPage = 'home';
        console.log('currentPage: ' + $scope.currentPage);
    }

    function setCurrentPageSettings() {
        $scope.currentPage = 'settings';
        console.log('currentPage: ' + $scope.currentPage);
    }

    function isHome() {
        return $scope.currentPage === 'home';
    }

    function isSettings() {
        return $scope.currentPage === 'settings';
    }
}