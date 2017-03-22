
const db = require('./_db');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = db;

//require the created database
//require in the models
//export the database
