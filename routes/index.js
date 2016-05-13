var router = require('express').Router();
var Promise = require('bluebird');

var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Place = require('../models/place');

router.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll({include: [Place]}),
    Restaurant.findAll({include: [Place]}),
    Activity.findAll({include: [Place]})
  ])
  .spread(function (hotels, restaurants, activities) {
    res.render('index', {
      hotels: hotels,
      restaurants: restaurants,
      activities: activities
    });
  })
  .catch(next);
});

module.exports = router;