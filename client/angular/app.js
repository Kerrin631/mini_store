var myAppModule = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
    myAppModule.config(function ($routeProvider) {
      $routeProvider
        .when('/customers',{
            templateUrl: 'partials/customers.html'
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html'
        })
        .when('/products', {
          templateUrl: 'partials/products.html'
        })
        .when('/dashboard', {
          templateUrl: 'partials/dashboard.html'
        })
        .otherwise({
          redirectTo: '/dashboard'
        });
    });