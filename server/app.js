var express = require('express');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router


var app = express();


// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up and use our routes
// app.use('/', router);
// var router = require('./routes.js');
// Serve the client files

app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;