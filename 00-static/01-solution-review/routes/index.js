
const router = require('express').Router();
const db = require('../models')

const Hotel = db.model('hotel');
const Restaurant = db.model('restaurant');
const Activity = db.model('activity');


router.get('/', function(req, res, next) {
  //query for all the things
  const hotelQuery = Hotel.findAll();
  const restaurantQuery = Restaurant.findAll();
  const activityQuery = Activity.findAll();
  
  Promise.all([hotelQuery, restaurantQuery, activityQuery])
  .then(function(allThings) {
    const hotels = allThings[0];
    const restaurants = allThings[1];
    const activities = allThings[2];
    res.render('index', {
      hotels: hotels, 
      restaurants: restaurants, 
      activities: activities
    });
  
  })
  .catch(next);
})

module.exports = router;