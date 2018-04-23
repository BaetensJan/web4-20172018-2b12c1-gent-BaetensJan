let express = require('express');
let router = express.Router();
let models = require('../models');

router.get('/API/stations', function (req, res, next) {
  models.Station.findAll()
    .then(function (users) {
      res.json(users);
    });
});

router.post('/API/stations/', function (req, res, next) {
  models.Station.create({ naam: req.body.naam})
    .then(station => {
      res.json(station);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/API/onderbrekingen', function (req, res, next) {
  models.Onderbreking.findAll()
    .then(function (onderbreking) {
      res.json(onderbreking);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/API/onderbrekingen/', function (req, res, next) {
  models.Onderbreking.create({ titel: req.body.titel, bericht: req.body.bericht, datumtijd: req.body.datumtijd})
    .then(onderbreking => {
      res.json(onderbreking);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/API/stopplaatsen', function (req, res, next) {
  models.StopPlaats.findAll()
    .then(function (stopPlaats) {
      res.json(stopPlaats);
    });
});

router.get('/API/routes/:search', function (req, res, next) {
  console.log(JSON.parse(req.params.search));
  /*
  models.Route.findAll()
    .then(function (routes) {
      res.json(routes);
    });*/
  res.send("Sent");
});

module.exports = router;
