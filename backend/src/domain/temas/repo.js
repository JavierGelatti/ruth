import models from '~/database/models';
import {pick} from 'lodash';

export default class TemasRepo {
    
  findAll() {
    return models.Tema.findAll();
  }

  findOneById(id) {
    return models.Tema.findByPk(id);
  }

  guardarTemas(temas) {
    return models.Tema.bulkCreate(temas.map(tema => 
      pick(tema, ['tipo', 'titulo', 'descripcion', 'duracion', 'autor', 'obligatoriedad',
      'linkDePresentacion', 'propuestas', 'temasParaRepasar'])))
  }
  
}
