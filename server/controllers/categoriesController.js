// custom dependencies
var db = require('../../db/db');

// retrieve all categories from DB
exports.getAll = function (callback) {
  db.Category.findAll()
    .then( function (categories) {
      callback(200, categories);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

