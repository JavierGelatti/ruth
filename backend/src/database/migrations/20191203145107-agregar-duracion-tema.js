
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Temas',
    'cantidadDeMinutosDelTema',
    {
      type: Sequelize.INTEGER,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Temas', 'cantidadDeMinutosDelTema'),
};
