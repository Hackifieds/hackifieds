// node dependencies
var Sequelize = require('sequelize');

// custom dependencies
var User = require('./user');
var Category = require('./category');
var db = require('../../db/db');

var Listing = db.define('Listing', {
  listingId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  location: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.DECIMAL(10, 2) },
  startDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  endDate: { type: Sequelize.DATE }

  //TODO: specify foreign key relationships
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: User,
  //     key: 'userId'
  //   }
  // },
  // categoryId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: User,
  //     key: 'userId'
  //   }
  // }
});

//TODO: define foreign key relationship
// Listing.belongsTo(User);
// Listing.belongsTo(Category);

Listing.sync()
  .then( function () {
    console.log( 'Created (or fetched existing) Listings table.' );
  })
  .catch( function (err) {
    console.log( 'Unable to create/fetch Listings table: ' + err );
  });

module.exports = Listing;

