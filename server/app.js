// node dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// custom dependencies
var db = require('../db/db');
var listingsCtrl = require('./controllers/listings-controller.js');
var categoriesController = require('./controllers/categoriesController');
var usersController = require('./controllers/usersController');

// create server instance
var app = express();

// use express middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// serve static files / libraries to the client
app.use (express.static('./client'));
app.use ('/scripts', express.static(__dirname + '/../node_modules/react-bootstrap/dist/'));
app.use ('/scripts', express.static(__dirname + '/../node_modules/bootstrap/dist/'));
app.use ('/scripts', express.static(__dirname + '/../node_modules/jquery/dist/'));
app.use ('/scripts', express.static(__dirname + '/../node_modules/react/dist/'));
app.use ('/scripts', express.static(__dirname + '/../node_modules/react-dom/dist/'));

// routing: handle endpoint requests from client
app.route('/api/listings')
  .get(function(req, res) {
    listingsCtrl.getAll(req.query.category, function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  })
  .post(function(req, res) {
    listingsCtrl.addOne(req.body, function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  });
app.route('/api/categories')
  .get(function(req, res) {
    categoriesController.getAll(function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  });
app.route('/api/users')
  .get(function(req, res) {
    usersController.getAll(function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  });

// Start server, listen for client requests on designated port
console.log( 'hackifieds server listening on 3000....' );
app.listen(3000);

module.exports.app = app;

