module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    evento: DataTypes.JSON,
  }, {});
  Evento.associate = function (models) {
    Evento.Tema = Evento.belongsTo(models.Tema, { as: 'tema' });
  };
  return Evento;
};
