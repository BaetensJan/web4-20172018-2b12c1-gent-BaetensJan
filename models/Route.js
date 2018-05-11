'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    naam: DataTypes.STRING,
    datum: DataTypes.DATEONLY
  });

  Route.associate = function (models) {
    models.Route.belongsToMany(models.StopPlaats, {through: models.StopPlaatsRoute});
  };

  return Route;
};
