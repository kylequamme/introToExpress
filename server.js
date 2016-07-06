//Include the express framework
var express = require('express');
var path = require('path');
//set port for express to listen on
var port = 3000;

var app = express();

app.use(express.static('public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));

app.listen(port, function(){
  console.log('Started the Express Server on Port ' + port);
  console.log('Press Ctrl + C to Stop Server');
});
