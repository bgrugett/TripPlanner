//create the database 

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});
//export

module.exports = db;