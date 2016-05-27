var Sequelize = require('sequelize');

var db = new Sequelize('hackifieds', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.sync()
// db.sync( { force: true } ) // use this line instead of above to overwrite with new schemas
  .then( function () {
    console.log( 'Connection to hackifieds database opened' );
  })
  .catch( function (err) {
    console.log( 'Error opening hackifieds database: ' + err );
  });

module.exports = db;

