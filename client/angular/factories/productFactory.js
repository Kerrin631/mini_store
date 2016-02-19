myAppModule.factory('productFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var products = [];
          var factory = {};
          // Add a getproducts key to the factory object with a value of a function.
          factory.getProducts = function (callback){
              // Pass the products to a callback to be used by whoever calls the method
              $http.get('/product').success(function(res){
              	products = res;
              	callback(products); 
              })
              return products;
          };

          factory.addProduct = function(info ,callback){
          	info['created_at'] = new Date();
          	$http.post('/product', info).success(function(res){
          		console.log(info)
          		callback(products)
          	})
          };

          factory.destroy = function(info, callback){
          	console.log(info)
          	var id = info._id;
          	$http.delete('/product/delete/'+ id).success(function(){
          		console.log('hello'+ info);
          		callback(products)
          	})
          }

          // factory.decrementProduct = function(info, callback){
          //   console.log(info);
          //   var id = info._id;
          //   $http.put('/product/update/' + id).success(function(){
          //     console.log('product has been decremented');
          //     callback(product);
          //   })
          // }


          // Most important step: return the object so it can be used by the rest of our angular code
          console.log(factory);
          return factory;

      });