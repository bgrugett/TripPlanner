const Sequelize = require('sequelize');
const db = require('./_db');

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
});

module.exports = Activity;

//{name: "Mahayana Temple Buddhist Association", place: {address: "133 Canal St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716291, -73.995315]}, age_range: "All" }