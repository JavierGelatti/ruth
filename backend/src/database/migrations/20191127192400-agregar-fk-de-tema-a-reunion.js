
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Temas',
    'reunionId',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Reunions', // name of Source model
        key: 'id',
      },
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Temas', 'reunionId'),
};
