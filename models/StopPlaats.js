'use strict';
module.exports = (sequelize, DataTypes) => {
  const StopPlaats = sequelize.define('StopPlaats', {
    uur: DataTypes.STRING,
  });

  StopPlaats.associate = function (models) {
    models.StopPlaats.belongsToMany(models.Station, {through: models.StopPlaatsStation});
  };

  return StopPlaats;
};
