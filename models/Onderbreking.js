'use strict';
module.exports = (sequelize, DataTypes) => {
  const Onderbreking = sequelize.define('Onderbreking', {
    titel: DataTypes.STRING,
    bericht: DataTypes.STRING,
    datumtijd: DataTypes.DATE
  });
  return Onderbreking;
};
