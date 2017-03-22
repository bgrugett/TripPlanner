var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

// router.get('/hotels', function(req, res, next) {
//     Hotel.findAll()
//   .then(function(dbHotels) {
//     res.json(dbHotels);
//   })
//   .catch(next);
// });

router.get('/', function(req, res, next) {
res.render('index');
});

router.get('/attractions', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    console.log('in route');
    res.json( {
      dbHotels: dbHotels,
      dbRestaurants: dbRestaurants,
      dbActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
