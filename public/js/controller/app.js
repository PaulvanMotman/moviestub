window.movieStubApp = angular.module('movieStubApp', ['ngRoute', 'ngResource']);
 
movieStubApp.controller("movieStubController", function ($scope, movieStubFactory) {
    $scope.headerSrc = "template/header.html";
    $scope.movies = movieStubFactory.query();
 
    $scope.currMovie = null;
    $scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            if (movies[i].id == id) {
                $scope.currMovie = movies[i];
            }
        }
    };
    // A simple back function, that will help us navigate between views
    $scope.back = function () {
        window.history.back();
    };
    $scope.getCount = function (n) {
        return new Array(n);
    };
});
movieStubApp.controller("movieDetailsController", function ($scope, $routeParams) {
    $scope.getMovieById($routeParams.id);
});