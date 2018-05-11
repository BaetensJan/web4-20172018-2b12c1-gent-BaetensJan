'use strict';
module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('Station', {
    naam: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  });

  Station.associate = function (models) {
    models.Station.belongsToMany(models.StopPlaats, {through: models.StopPlaatsStation});
  };

  return Station;
};
