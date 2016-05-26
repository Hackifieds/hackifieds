var Sequelize = require('sequelize');

var sequelize = new Sequelize('hackifieds', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize.sync()
  .then( function () {
    console.log( 'Connection to hackifieds database opened' );
  })
  .catch( function (err) {
    console.log( 'Error opening hackifieds database: ' + err );
  });

module.exports.db = sequelize;

