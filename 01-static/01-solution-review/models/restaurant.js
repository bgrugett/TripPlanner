const Sequelize = require('sequelize');
const db = require('./_db');

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  price: Sequelize.INTEGER
});

module.exports = Restaurant;

//name: "Bouley", place: {address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.013940]}, cuisine: "French", price: 4}