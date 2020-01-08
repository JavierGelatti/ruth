
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Eventos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    temaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Temas',
        key: 'id',
      },
    },
    evento: {
      type: Sequelize.JSON,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Eventos'),
};
