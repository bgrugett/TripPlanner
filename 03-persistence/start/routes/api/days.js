var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;

router.get('/api/days', function(req, res, next) {
res.render('index');
});

router.get('/api/days/:id', function(req, res, next) {
res.render('index');
});

router.post('/api/days/:id/restaurants', function(req, res, next) {
res.render('index');
});

router.post('/api/days/:id/hotels', function(req, res, next) {
res.render('index');
});

router.post('/api/days/:id/activities', function(req, res, next) {
res.render('index');
});
