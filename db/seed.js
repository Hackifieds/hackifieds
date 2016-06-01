// To run seed.js
// Prereq: must clear categories table before running to avoid duplicate categories (same can be applied to users and listings table if your database already has the seed data)
// In terminal run: node seed.js

var data = require('./data');
var db = require('./db');

// iterate through data.json
data.forEach(function(table) {
  // iterate through categories and insert into categories table
  if (table.hasOwnProperty('categories')) {
    table.categories.forEach(function(entry) {
      db.Category.create(entry)
        .then(function(category) {
          console.log('Created category: ', category.dataValues.categoryName);
        })
        .catch(function(error) {
          console.error(error);
        });
    });
  // iterate through users and insert into users table  
  } else if (table.hasOwnProperty('users')) {
    table.users.forEach(function(entry) {
      db.User.create(entry)
        .then(function(user) {
          console.log('Created user: ', user.dataValues.username);
        })
        .catch(function(error) {
          console.error(error);
        });
    });
  // iterate through listings and insert into listings table  
  } else if (table.hasOwnProperty('listings')) {
    table.listings.forEach(function(entry) {
      db.Listing.create(entry)
        .then(function(listing) {
          console.log('Created listing: ', listing.dataValues.title);
        })
        .catch(function(error) {
          console.error(error);
        });
    });
  }
});