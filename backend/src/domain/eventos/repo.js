import models from '~/database/models';

export default class EventosRepo {
  findEventosDeTema(id) {
    return models.Evento.findAll({
      where: {
        temaId: id,
      },
    });
  }

  guardarEvento(evento, temaId) {
    return models.Evento.create({ evento, temaId });
  }
}
