var express = require('express');

// Start Server
var app = express();
var port = process.env.PORT || 3000 ;

// Public path configuration
app.use(express.static(__dirname + '/build'));

// Start App
console.log('Starting landricks app... \nlistening on port ' + port);
app.listen(port);
