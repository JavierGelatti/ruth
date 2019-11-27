
export default (sequelize, DataTypes) => {
  const Reunion = sequelize.define('Reunion', {
    abierta: DataTypes.BOOLEAN,
  }, {});
  Reunion.associate = (models) => {
  };
  return Reunion;
};
