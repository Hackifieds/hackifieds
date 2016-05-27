var db = require('../../db/db');
var Listing = require('./listing');

var User = db.define('users', {
  'userId': { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  'username': { type: Sequelize.STRING(100), allowNull: false },
  'firstName': { type: Sequelize.STRING(100), allowNull: false },
  'lastName': { type: Sequelize.STRING(100), allowNull: false },
  'email': { type: Sequelize.STRING(100), allowNull: false },
  'phone': Sequelize.STRING(100),
  'school': { type: Sequelize.STRING(100), allowNull: false },
  'cohort': { type: Sequelize.STRING(100), allowNull: false },
}, {timestamps: true});

User.hasMany(Listing);
User.sync();

module.exports = User;