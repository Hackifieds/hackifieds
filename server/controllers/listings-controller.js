var db = require('../../db/db');

var listings = {};

//Controller method - retrieve all listings from DB
listings.getAll = function(callback) {
  // Listing.findAll({ order: ['createdAt', 'DESC'] })
  db.Listing.findAll()
    .then(function(listings) {
      callback(200, listings);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

//Controller method - add a listings to DB
listings.addOne = function(listing, callback) {
  db.Listing.create(listing)
    .then(function(listing) {
      callback(201, listing);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

module.exports = listings;