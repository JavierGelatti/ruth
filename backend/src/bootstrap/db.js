import db from '~/database/models';

db.sequelize.sync();

// eslint-disable-next-line no-console
console.log('Conectado a la DB 🙊');
