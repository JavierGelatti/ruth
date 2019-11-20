import models from '~/database/models';

export default class TemasRepo {
    
  findAll() {
    return models.Tema.findAll();
  }

  findOneById(id) {
    return models.Tema.findByPk(id);
  }

  create(tema) {
    return models.Tema.create({ 
        tipo: tema.tipo,
        titulo: tema.titulo,
        descripcion: tema.descripcion,
        duracion: tema.duracion,
        autor: tema.autor,
        obligatoriedad: tema.obligatoriedad,
        linkDePresentacion: tema.linkDePresentacion,
        propuestas: tema.propuestas,
        temasParaRepasar: tema.temasParaRepasar
    });
  }

}
