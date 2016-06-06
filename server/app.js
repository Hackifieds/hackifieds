// node dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var GitHubStrategy = require('passport-github2').Strategy;
var multer = require('multer');

// custom dependencies
var db = require('../db/db');
var listingsCtrl = require('./controllers/listingsController');
var categoriesController = require('./controllers/categoriesController');
var github = require('./auth/github_oauth');
var upload = multer({dest: 'uploads/'});

// passport session setup
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

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
app.use ('/scripts', express.static(__dirname + '/../node_modules/underscore/'));
app.use ('/uploads', express.static(__dirname + '/../uploads/'));

// configure passport github oAuth strategy
passport.use(new GitHubStrategy({
  clientID: github.GITHUB_CLIENT_ID,
  clientSecret: github.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
function(accessToken, refreshToken, profile, done) {
  console.log('profile: ', profile);
  console.log('profile.username: ', profile.username);
  // TODO: include fields that are not nullable in DB
  db.User.findOrCreate({ where: { username: profile.username } })
    .spread(function(user, created) {
      console.log('Created: ', created);
      return done(null, user);
    });
}));

app.use(session({
  secret: 'hackyhackifiers',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Github authentication successful!');
    res.redirect('/');
  });

// routing: handle endpoint requests from client
app.route('/api/listings')
  .get(function(req, res) {
    listingsCtrl.getAll(req.query.category, function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  })
  .post(upload.array('images', 12), function(req, res) {
    listingsCtrl.addOne(req.body, req.files, function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  });
app.route('/api/categories')
  .get(function(req, res) {
    categoriesController.getAll(function(statusCode, results) {
      res.status(statusCode).send(results);
    });
  });
app.route('/api/auth')
  .get(function(req, res) {
    console.log('Req session before', req.session);
    res.send(req.user);
  });

app.get('/api/logout', function(req, res) {
  req.session.destroy(function() {
    console.log( req.session);
    res.redirect('/');
  });

});

// Start server, listen for client requests on designated port
console.log( 'hackifieds server listening on 3000....' );
app.listen(3000);

module.exports.app = app;

