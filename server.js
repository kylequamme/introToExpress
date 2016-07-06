//Include the express framework
var express = require('express');
var path = require('path');
//set port for express to listen on
var port = 3000;

var app = express();
//set static path
app.use(express.static('public'));
//set path to npm libraries used in client html
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));
//provide fallback route and return a 404 message
app.get('/*', function(req, res) {
  res.sendStatus(404);
});
//start server and listen for connections on port 3000
app.listen(port, function(){
  console.log('Started the Express Server on Port ' + port);
  console.log('Press Ctrl + C to Stop Server');
});
