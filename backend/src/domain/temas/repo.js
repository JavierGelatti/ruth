import models from '~/database/models';
var pick = require('lodash.pick');

export default class TemasRepo {
    
  findAll() {
    return models.Tema.findAll();
  }

  findOneById(id) {
    return models.Tema.findByPk(id);
  }

  create(tema) {
    return models.Tema.create(
      pick(tema, ['tipo', 'titulo', 'descripcion', 'duracion', 'autor', 'obligatoriedad',
       'linkDePresentacion', 'propuestas', 'temasParaRepasar']));
  }
}
