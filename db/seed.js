var data = require('./data');
var db = require('./db');

data.forEach(function(table) {
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