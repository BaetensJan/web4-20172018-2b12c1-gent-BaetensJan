module.exports = function(sequelize, DataTypes) {

  const StopPlaats = sequelize.model("stopPlaats");
  const StopPlaatsStation = sequelize.model("stopPlaatsStation");
  const Station = sequelize.define('station', {
    naam: DataTypes.STRING
  });
  Station.belongsToMany(StopPlaats, {through : StopPlaatsStation});
  return Station;
};
