myAppModule.controller('ordersController', function ($scope, customerFactory, orderFactory, productFactory){
          //  initialize an empty array so $scope.orders maintains a consistent data type
          $scope.orders = [];
          // run the getcustomers method and set $scope data in the callback
          customerFactory.getCustomers(function (data){
            console.log(data) 
              $scope.customers = data;
          })

          orderFactory.getOrders(function (data){
            console.log(data)
              $scope.orders = data;
          })

          productFactory.getProducts(function (data){
            console.log(data) 
            $scope.products = data;
          })
          
            $scope.placeOrder = function (data){
              // add to the array
              // $scope.orders.push($scope.newOrder); 
              console.log('new order');
              console.log($scope.newOrder);
              orderFactory.addOrder($scope.newOrder, function(){
                orderFactory.getOrders(function (data){
            // console.log(data)
	              $scope.orders = data;
	        	    })
              })

              // clear the form values
              $scope.newOrder = {};
            }

            $scope.cancel = function(data) {
            orderFactory.destroy(data, function(){
                orderFactory.getOrders(function(data){
                    $scope.orders = data;
                });
                $scope.newOrder = {};
            })

        };
});
            