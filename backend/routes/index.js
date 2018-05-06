let express = require('express');
let router = express.Router();
let models = require('../models');

router.post('/checkstationname/', function (req, res, next) {
  models.Station.findOne({where: {naam: req.body.name}})
    .then(station => {
      if (station === null) {
        res.json({ name: "ok"});
      } else {
        res.json({ name: "alreadyexists"});
      }
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/stations', function (req, res, next) {
  models.Station.findAll()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/stations/', function (req, res, next) {
  models.Station.create({ naam: req.body.naam})
    .then(station => {
      res.json(station);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.delete('/stations/:name', function (req, res, next) {
  models.Station.findOne({where: {naam: req.params.name}})
    .then(station => {
      res.json(station.destroy());
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/onderbrekingen', function (req, res, next) {
  models.Onderbreking.findAll()
    .then(function (onderbreking) {
      res.json(onderbreking);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/onderbrekingen/', function (req, res, next) {
  models.Onderbreking.create({ titel: req.body.titel, bericht: req.body.bericht, datumtijd: req.body.datumtijd})
    .then(onderbreking => {
      res.json(onderbreking);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.delete('/onderbrekingen/:datumtijd', function (req, res, next) {
  models.Onderbreking.findOne({where: {datumtijd: req.params.datumtijd}})
    .then(onderbreking => {
      res.json(onderbreking.destroy());
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/stopplaatsen', function (req, res, next) {
  models.StopPlaats.findAll()
    .then(function (stopPlaats) {
      res.json(stopPlaats);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/routes', function (req, res, next) {
  models.Route.findAll({ include: [ {
      model: models.StopPlaats,
      include: [models.Station]
    }]})
    .then(function (routes) {
      res.json(routes);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/routes', function (req,res, next) {
  var newRoute;
  var stopPlaatsen;
  models.Route.create(
    { naam: req.body.naam,
      datum: req.body.datum,
      StopPlaats: req.body.stopPlaatsen
    },
    {
      include: [
        models.StopPlaats
      ]
    })
    .then(route => {
      newRoute = route;
      models.StopPlaatsRoute.findAll({where: {
          RouteId: route.dataValues.id
        }})
        .then(spr => {
          stopPlaatsen = spr;
          for (var i = 0; i < req.body.stopPlaatsen.length; i++) {
            let sp = req.body.stopPlaatsen[i];
            models.StopPlaatsStation.create({StationNaam: sp.station.naam, StopPlaatId: stopPlaatsen[i].dataValues.StopPlaatId});
          }
        })
        .then(() => {
          models.Route.find({where: {id: newRoute.id}, include: [ {
              model: models.StopPlaats,
              include: [models.Station]
            }]})
            .then(route => res.json(route))
        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
})

router.get('/routes/:search', function (req, res, next) {
  console.log(JSON.parse(req.params.search));
  /*
  models.RouteModel.findAll()
    .then(function (admin-routes) {
      res.json(admin-routes);
    });*/
  res.send("Sent");
});

module.exports = router;
