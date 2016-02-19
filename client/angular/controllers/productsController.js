myAppModule.controller('productsController', function ($scope, orderFactory, productFactory){
	//  initialize an empty array so $scope.orders maintains a consistent data type
          $scope.products = [];
          // run the getcustomers method and set $scope data in the callback

        	orderFactory.getOrders(function (data){
            	console.log(data);
            	$scope.orders = data;
        	})

        	productFactory.getProducts(function (data){
            	console.log(data);
            	$scope.products = data;
        	})
          
            $scope.createProduct = function (data){
              // add to the array
              // $scope.orders.push($scope.newOrder); 
            	console.log($scope.newProduct)
            	productFactory.addProduct($scope.newProduct, function(){
                productFactory.getProducts(function (data){
            // console.log(data)
	              $scope.products = data;
	        	})
            })
              // clear the form values
              $scope.newProduct = {};
            };


        //     $scope.cancel = function(data) {
        //     productFactory.destroy(data, function(){
        //         productFactory.getProducts(function(data){
        //             $scope.products = data;
        //         });
        //         $scope.newProduct = {};
        //     })

        // }
});
