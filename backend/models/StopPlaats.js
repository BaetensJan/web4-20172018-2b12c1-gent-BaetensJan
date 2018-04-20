'use strict';
module.exports = (sequelize, DataTypes) => {
  const StopPlaats = sequelize.define('StopPlaats', {
    uur: DataTypes.STRING,
  });

  StopPlaats.associate = function (models) {
    models.StopPlaats.belongsToMany(models.Route, {through: models.StopPlaatsRoute});
  };

  return StopPlaats;
};
