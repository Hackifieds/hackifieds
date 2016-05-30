var Sequelize = require('sequelize');
var db = require('../../db/db');
var Listing = require('./listing');

var Category = db.define('Category', {
  'categoryId': {type: Sequelize.INTEGER, primaryKey: true },
  'categoryName': {type: Sequelize.STRING(25), allowNull: false}
}, {timestamps: true});

// Category.hasMany(Listing);
Category.sync();

// look into sequelize stuff 
module.exports = Category;