var mongoose = require('mongoose');
var customer = mongoose.model('customer');

// Edit the show method as follows
module.exports = (function() {
	return {
 		index: function(req, res) {
    		customer.find({}, function(err, results) {
    			if(err) {
    			console.log(err);
    		} else {
        		res.json(results);
    		}
		})
	},


	create: function(req, res) {
			var newCustomer = new customer({name: req.body.name, date: req.body.created_at})
			newCustomer.save(function(err) {
				if(err) {
					console.log('Its hard doing business');
				} else {
					console.log('You added a new customer!');
					res.end();
				}
			})
		},

	destroy: function(req, res) {
		customer.remove({_id: req.params.id}, function (err, customer){
			console.log('You have killed this customer')
			// res.redirect('/');
			res.end();
		})
	}
	
}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
