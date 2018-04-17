module.exports = function(sequelize, DataTypes) {
  const Route = sequelize.model("route");
  const StopPlaatsRoute = sequelize.model("stopPlaatsRoute");
  const StopPlaats = sequelize.define('stopPlaats', {
    uur: DataTypes.STRING,
  });
  StopPlaats.belongsToMany(Route, {through: StopPlaatsRoute});
  return StopPlaats;
};
