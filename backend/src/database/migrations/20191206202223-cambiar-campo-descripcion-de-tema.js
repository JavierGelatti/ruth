
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Temas',
      'descripcion',
      {
        type: Sequelize.TEXT,
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Temas',
      'descripcion',
      {
        type: Sequelize.STRING,
      },
    )
  }
};
