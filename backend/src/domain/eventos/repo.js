import models from '~/database/models';

export default class EventosRepo {
  findEventosDeTema(id) {
    return models.Evento.findAll({
      where: {
        temaId: id,
      },
    });
  }

  findAllEventos() {
    return models.Evento.findAll();
  }

  guardarEvento(evento, temaId) {
    return models.Evento.create({ evento, temaId });
  }
}
