//require the db

//create model

//export the model

// {name: "Andaz Wall Street", place: {address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]}, num_stars: 4, amenities: "Pool, Free Wi-Fi" }

const Sequelize = require('sequelize');
const db = require('./_db');

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: Sequelize.FLOAT,
  amenities: Sequelize.TEXT
});

module.exports = Hotel;

