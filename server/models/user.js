var Sequelize = require('sequelize');
var db = require('../../db/db.js');
var Listing = require('./listing.js');

var User = db.define('User', {
  'userId': { type: Sequelize.INTEGER, primaryKey: true },
  'username': { type: Sequelize.STRING(100), allowNull: false },
  'firstName': { type: Sequelize.STRING(100), allowNull: false },
  'lastName': { type: Sequelize.STRING(100), allowNull: false },
  'email': { type: Sequelize.STRING(100), allowNull: false },
  'phone': Sequelize.STRING(100),
  'school': { type: Sequelize.STRING(100), allowNull: false },
  'cohort': { type: Sequelize.STRING(100), allowNull: false },
});

//TODO: define foreign key relationship
// User.hasMany(Listing);
User.sync();

module.exports = User;