/* eslint-disable class-methods-use-this */
import models from '~/database/models';


export default class ReunionesRepo {
  findAll() {
    return models.Reunion.findAll();
  }

  findOneById(id) {
    return models.Reunion.findByPk(id);
  }

  create({ abierta }) {
    return models.Reunion.create({ abierta });
  }

  save(reunion) {
    models.Reunion.update(reunion);
  }

  findLastCreated() {
    return models.Reunion.findAll().then((reuniones) => reuniones[reuniones.length - 1]);
  }
}
