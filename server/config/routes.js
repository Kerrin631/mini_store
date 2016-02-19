var mongoose = require('mongoose');
var customer = require('./../controllers/customers.js');
var order = require('./../controllers/orders.js');
var product = require('./../controllers/products.js');



  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all customers)

  //customer routes
    app.get('/customer', function(req, res) {
      customer.index(req, res);
	});

	app.post('/customer', function(req, res) {
		console.log('POST DATA', req.body);
		customer.create(req, res);
	});


  app.delete('/customer/delete/:id', function (req, res){
    customer.destroy(req, res);
  })

  //orders routes

  app.get('/order', function(req, res) {
      order.index(req, res);
  });

  app.post('/order', function(req, res) {
    console.log('POST DATA', req.body);
    order.create(req, res);
  });


  app.delete('/order/delete/:id', function (req, res){
    order.destroy(req, res);
  })

  //product routes
  app.get('/product', function(req, res) {
      product.index(req, res);
  });

  app.post('/product', function(req, res) {
    console.log('POST DATA', req.body);
    product.create(req, res);
  });

  app.delete('/product/delete/:id', function (req, res){
    product.destroy(req, res);
  })

  // app.put('/product/update/:id', function (req, res){
  //   product.update(req, res);
  // })
};



