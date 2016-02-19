var mongoose = require('mongoose');
var product = mongoose.model('product');

// Edit the show method as follows
module.exports = (function() {
	return {
 		index: function(req, res) {
    		product.find({}, function(err, results) {
    			if(err) {
    			console.log(err);
    		} else {
        		res.json(results);
    		}
		})
	},


	create: function(req, res) {
			var newProduct = new product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity, date: req.body.created_at})
			newProduct.save(function(err) {
				if(err) {
					console.log('New product has not arrived');
				} else {
					console.log('You added a new product!');
					res.end();
				}
			})
		},

	destroy: function(req, res) {
		product.remove({_id: req.params.id}, function (err, product){
			console.log('You have taken this product off the shelves')
			// res.redirect('/');
			res.end();
		})
	}
	
	
}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
