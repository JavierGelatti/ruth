'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Temas',
      'inicio',
      {
        type: Sequelize.DATE
      },
    ),
    queryInterface.addColumn(
      'Temas',
      'fin',
      {
        type: Sequelize.DATE
      },
    ) ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('Temas', 'inicio'),
    queryInterface.removeColumn('Temas', 'fin')];
  }
};
