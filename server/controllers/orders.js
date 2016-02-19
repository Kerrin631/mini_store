var mongoose = require('mongoose');
var order = mongoose.model('order');
var product = mongoose.model('product')

// Edit the show method as follows
module.exports = (function() {
	return {
 		index: function(req, res) {
    		order.find({}, function(err, results) {
    			if(err) {
    			console.log(err);
    		} else {
        		res.json(results);
    		}
		})
	},


	create: function(req, res) {
		console.log(req.body)
			var newOrder = new order({name: req.body.name, product: req.body.product, quantity: req.body.qty, date: req.body.created_at})
			newOrder.save(function(err, result) {
				if(err) {
					console.log('Order did not go through');
				} else {
					console.log('You added a new order!');
					// console.log(product.name)
					// if (product.name = req.body.name) {
					// 	product.quantity - req.body.qty;
					// };
					var decAmt = result.quantity;
					var name = result.product;
					product.update({name: name}, {$inc : {quantity: -decAmt}}, function(err, results){
						console.log(results);
					});
					res.end();
				}
			})
		},

	destroy: function(req, res) {
		order.remove({_id: req.params.id}, function (err, order){
			console.log('You have cancelled this order')
			// res.redirect('/');
			res.end();
		})
	}
	
}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
