var express = require('express');

var path = require('path');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client")));

// This goes in our server.js file so that we actually use the mongoose config file!
require('./server/config/mongoose.js');

//always require routes AFTER requiring mongoose
require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
})

