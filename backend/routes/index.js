let express = require('express');
let router = express.Router();
let models = require('../models');

/* GET home page. */
router.get('/API/stations', function (req, res, next) {
  models.Station.findAll()
    .then(function (users) {
      res.json(users);
    });
});

module.exports = router;
