var app = angular.module("labFourteen", ['ngRoute']);
// app.controller('superCtrl', function ($scope){
//
// })
app. config(function ($routeProvider){
  $routeProvider
    .when('/dog', {
      controller: 'superCtrl',
      templateUrl: 'dog.html'
      })
      .when('/cat', {
        controller: 'superCtrl',
        templateUrl: 'cat.html'
        })
        .otherwise({ redirectTo: '/dog'});

});
