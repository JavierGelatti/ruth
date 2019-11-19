'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Temas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      obligatoriedad: {
        type: Sequelize.STRING
      },
      linkDePresentacion: {
        type: Sequelize.STRING
      },
      propuestas: {
        type: Sequelize.JSON
      },
      temasParaRepasar: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Temas');
  }
};