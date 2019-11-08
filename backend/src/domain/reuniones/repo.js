/* eslint-disable class-methods-use-this */
import models from '~/database/models';


export default class ReunionesRepo {
  async findAll() {
    return models.Reunion.findAll();
  }

  async findOneById(id) {
    return models.Reunion.findByPk(id);
  }

  async create({ abierta }) {
    return models.Reunion.create({ abierta });
  }

  async save(reunion) {
    models.Reunion.update(reunion);
  }
}
