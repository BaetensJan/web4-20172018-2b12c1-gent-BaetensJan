module.exports = function(sequelize, DataTypes) {
  const Route = sequelize.define('route', {
    naam: DataTypes.STRING,
    datum: DataTypes.DATEONLY
  });
  return Route;
};
