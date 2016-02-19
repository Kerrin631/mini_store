myAppModule.controller('dashboardController', function ($scope, customerFactory, orderFactory, productFactory){

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
});