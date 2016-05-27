// node dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var parser = require('body-parser');

// custom dependencies
var db = require('../db/db');
var db = require('../db/listing.js');
// var db = require('../db/Users.js');
// var db = require('../db/Categories.js');

var app = express();

// use middleware
app.use(session({
  secret: 'hackyhackifiers',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Router


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
