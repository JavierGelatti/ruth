
export default (sequelize, DataTypes) => {
  const Reunion = sequelize.define('Reunion', {
    abierta: DataTypes.BOOLEAN,
  }, {});
  Reunion.associate = () => {
    // associations can be defined here
  };
  return Reunion;
};
