	myAppModule.factory('orderFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var orders = [];
          var factory = {};
          // Add a getcustomers key to the factory object with a value of a function.
          factory.getOrders = function (callback){
              // Pass the orders to a callback to be used by whoever calls the method
              $http.get('/order').success(function(res){
              	orders = res;
              	callback(orders); 
              })
              return orders;
          };

          factory.addOrder = function(info ,callback){
          	info['created_at'] = new Date();
          	$http.post('/order', info).success(function(res){
          		console.log(info)
          		callback(orders)
          	})
          };

          factory.destroy = function(info, callback){
          	console.log(info)
          	var id = info._id;
          	$http.delete('/order/delete/'+ id).success(function(){
          		console.log('hello'+ info);
          		callback(orders)
          	})
          }


          // Most important step: return the object so it can be used by the rest of our angular code
          console.log(factory);
          return factory;

      });