myAppModule.factory('customerFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var customers = [];
          var factory = {};
          // Add a getcustomers key to the factory object with a value of a function.
          factory.getCustomers = function (callback){
              // Pass the customers to a callback to be used by whoever calls the method
              $http.get('/customer').success(function(res){
              	customers = res;
              	callback(customers); 
              })
              return customers;
          };

          factory.addCustomer = function(info ,callback){
          	info['created_at'] = new Date();
          	$http.post('/customer', info).success(function(res){
          		console.log(info)
          		callback(customers)
          	})
          };

          factory.destroy = function(info, callback){
          	console.log(info)
          	var id = info._id;
          	$http.delete('/customer/delete/'+ id).success(function(){
          		console.log('hello'+ info);
          		callback(customers)
          	})
          }


          // Most important step: return the object so it can be used by the rest of our angular code
          console.log(factory);
          return factory;

      });