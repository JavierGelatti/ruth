import { pick } from 'lodash';
import models from '~/database/models';

export default class TemasRepo {
  findAll() {
    return models.Tema.findAll();
  }

  findOneById(id) {
    return models.Tema.findByPk(id);
  }

  guardarTemas(reunion, temas) {
    return models.Tema.bulkCreate(temas.map((tema) => {
      const temaSanitizado = pick(tema, ['tipo', 'titulo', 'descripcion', 'duracion', 'autor', 'obligatoriedad',
        'linkDePresentacion', 'propuestas', 'temasParaRepasar']);

      return { ...temaSanitizado, reunionId: reunion.id };
    }));
  }
}
