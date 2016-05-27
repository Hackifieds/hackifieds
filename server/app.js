// node dependencies
var express = require('express');

var db = require('./db');
var passport = require('passport');
var morgan = require('morgan');
var parser = require('body-parser');

// custom dependencies
var db = require('../db/Listings.js');
var db = require('../db/Users.js');
var db = require('../db/Categories.js');

// use middleware
server.use(session({
  secret: 'hackyhackifiers',
  resave: false,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());

// Router


var app = express();

// configure passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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
