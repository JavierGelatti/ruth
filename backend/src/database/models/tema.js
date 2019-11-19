'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tema = sequelize.define('Tema', {
    tipo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    duracion: DataTypes.STRING,
    autor: DataTypes.STRING,
    obligatoriedad: DataTypes.STRING,
    linkDePresentacion: DataTypes.STRING,
    propuestas: DataTypes.JSON,
    temasParaRepasar: DataTypes.JSON
  }, {});
  Tema.associate = function(models) {
    // associations can be defined here
  };
  return Tema;
};