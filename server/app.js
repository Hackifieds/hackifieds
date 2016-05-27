// node dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// custom dependencies
var db = require('../db/db');
//var db = require('../db/listing.js');
// var db = require('../db/Users.js');
// var db = require('../db/Categories.js');

var app = express();

var listings = [{
  date: '26 Jan 2016',
  title: 'House to let in apartment not centrally located',
  description: 'I like cheese',
  location: 'Pacific Heights',
  price: '$2,500pm'
}];
var counter = 0;

//------------------------------------------
// // use middleware
// app.use(session({
//   secret: 'hackyhackifiers',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// configure passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// parse application/json
app.use(bodyParser.json());
// Logging and parsing
app.use(morgan('dev'));

// Set up and use our routes
// app.use('/', router);
// var router = require('./routes.js');
// Serve the client files
// app.use (express.static(__dirname + '/../client'));
app.use (express.static('./client'));

//------------------------------------------

// Router
app.get('/api/listings', function(req, res) {
  // console.log(req);

  res.status(200).send(listings);
});

app.post('/api/listings', function(req, res) {
  console.log('hi');
  console.log(req);
  listings.push(req.body);
  // console.log(listings);

  res.status(200).send('' + listings.length);
});


// Set what we are listening on.
app.listen(3000);


// // If we are being run directly, run the server.
// if (!module.parent) {
//   app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
// }

module.exports.app = app;
