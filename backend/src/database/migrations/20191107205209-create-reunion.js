
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Reunions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    abierta: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

export function down(queryInterface) { return queryInterface.dropTable('Reunions'); }
