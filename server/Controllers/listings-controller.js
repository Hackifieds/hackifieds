var Listing = require('../models/listing.js');
var app = require('../../server/app.js');

var listings = {};

//Controller method - retrieve all listings from DB
listings.getAll = function(callback) {
  console.log('Called Listings Controller');
  Listing.findAll()
    .then(function(listings) {
      console.log('Listings Controller getALL', listings);
      callback(200, listings);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

//Controller method - add a listings to DB
listings.addOne = function(listing, callback) {
  console.log('Called Listings Controller');
  Listing.create(listing)
    .then(function(listing) {
      console.log('Listings Controller addOne', listing);
      callback(201, listing);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

module.exports = listings;