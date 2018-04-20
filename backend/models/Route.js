'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    naam: DataTypes.STRING,
    datum: DataTypes.DATEONLY
  });

  return Route;
};
