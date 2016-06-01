// node dependencies
var Sequelize = require('sequelize');

// create database connection
var db = new Sequelize('hackifieds', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// User model
var User = db.define('User', {
  userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING(100), allowNull: false },
  firstName: { type: Sequelize.STRING(100), allowNull: false },
  lastName: { type: Sequelize.STRING(100), allowNull: false },
  email: { type: Sequelize.STRING(100), allowNull: false },
  phone: Sequelize.STRING(100),
  school: { type: Sequelize.STRING(100), allowNull: false },
  cohort: { type: Sequelize.STRING(100), allowNull: false },
});

// Category model
var Category = db.define('Category', {
  'categoryId': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  'categoryName': {type: Sequelize.STRING(25), allowNull: false}
});

// Listing model
var Listing = db.define('Listing', {
  listingId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING(100), allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  location: { type: Sequelize.STRING(100), allowNull: false },
  price: { type: Sequelize.DECIMAL(10, 2) },
  startDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  endDate: { type: Sequelize.DATE }
});

// define foreign key relationship
User.hasMany(Listing, {foreignKey: 'userId'});
Listing.belongsTo(User, {foreignKey: 'userId'});
Category.hasMany(Listing, {foreignKey: 'categoryId'});
Listing.belongsTo(Category, {foreignKey: 'categoryId'});

// Sync database
User.sync()
  .then( function () {
    console.log( 'Created (or fetched existing) Users table.' );
  })
  .catch( function (err) {
    console.log( 'Unable to create/fetch Users table: ' + err );
  });

Category.sync()
  .then( function () {
    console.log( 'Created (or fetched existing) Categories table.' );
  })
  .catch( function (err) {
    console.log( 'Unable to create/fetch Categories table: ' + err );
  });

Listing.sync()
  .then( function () {
    console.log( 'Created (or fetched existing) Listings table.' );
  })
  .catch( function (err) {
    console.log( 'Unable to create/fetch Listings table: ' + err );
  });

db.sync()
// db.sync( { force: true } ) // use this line instead of above to overwrite with new schemas
  .then( function () {
    console.log( 'Connection to hackifieds database opened' );
  })
  .catch( function (err) {
    console.log( 'Error opening hackifieds database: ' + err );
  });

exports.User = User;
exports.Category = Category;
exports.Listing = Listing;