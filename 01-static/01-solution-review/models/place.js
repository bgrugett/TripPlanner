const Sequelize = require('sequelize');
const db = require('./_db');

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.DOUBLE)
  
});

module.exports = Place;

//{address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]}