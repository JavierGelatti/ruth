
export default (sequelize, DataTypes) => {
  const Reunion = sequelize.define('Reunion', {
    abierta: DataTypes.BOOLEAN,
  }, {});

  Reunion.associate = (models) => {
    Reunion.Tema = Reunion.hasMany(models.Tema, { foreignKey: 'reunionId' });
    Reunion.Evento = Reunion.hasMany(models.Evento, { foreignKey: 'reunionId' });
  };

  return Reunion;
};
