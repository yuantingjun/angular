var app = angular.module('h5_angularjs', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/homepage.html',
      controller: 'homepage'
    })
    .when('/next', {
      templateUrl: 'view/next.html',
      controller: 'next'
    })
    .when('/form', {
      templateUrl: 'view/form.html',
      controller: 'form'
    })
    .when('/day/:id', {
      templateUrl: 'view/day.html',
      controller: 'DayCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
app.controller("form", ["$scope",function($scope) {
        $scope.form = {
            firstName: "form"
        };
    }
]);
app.controller("next", ["$scope",function($scope) {
        $scope.next = {
            firstName: "next"
        };
    }
]);
app.controller("homepage", ["$scope",function($scope) {
        $scope.person = {
            firstName: "John",
            lastName: "Doe"
        };
    }
]);