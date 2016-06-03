// custom dependencies
var db = require('../../db/db');

// retrieve all users from DB
var getAll = function (callback) {
  db.User.findAll()
    .then( function (users) {
      callback(200, users);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

exports.getAll = getAll;

