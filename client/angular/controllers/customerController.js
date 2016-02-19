//  build the controllers
    // Create a controller (attached to this module), and inject the customerFactory in it.
    // Create a module
      // var myAppModule = angular.module('myApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the customerFactory in it.
      myAppModule.controller('customerController', function ($scope, customerFactory){
          //  initialize an empty array so $scope.customers maintains a consistent data type
          $scope.customers = [];
          // run the getcustomers method and set $scope data in the callback
          customerFactory.getCustomers(function (data){
              $scope.customers = data;
          })
          
            $scope.addCustomer = function (data){
              // add to the array
              // $scope.customers.push($scope.newcustomer); 
              // console.log($scope.newCustomer)
            customerFactory.addCustomer($scope.newCustomer, function(){
                customerFactory.getCustomers(function (data){
            // console.log(data)
	              $scope.customers = data;
	        	})
            })
              // clear the form values
              $scope.newCustomer = {};
            };
            $scope.kill = function(data) {
            customerFactory.destroy(data, function(){
                customerFactory.getCustomers(function(data){
                    // console.log($scope.new_person)
                    $scope.customers = data;
                });
                $scope.newCustomer = {};
            })

        }
      });