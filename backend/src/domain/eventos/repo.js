import models from '~/database/models';
import { getLastElement } from '../helpers/listHelper';

export default class EventosRepo {
  findEventosDeTema(id) {
    return models.Evento.findAll({
      where: {
        temaId: id,
      },
    });
  }

  findEventosUltimaReunion(){
    return models.Reunion.findAll()
      .then((reuniones) => getLastElement(reuniones))
      .then(reunion => {
        return models.Evento.findAll({
          include: [{
            model: models.Tema,
            as: 'tema',
            where: {reunionId: reunion.id}
           }]
        });
      }
      );
  }

  findAllEventos() {
    return models.Evento.findAll();
  }

  guardarEvento(evento, temaId) {
    return models.Evento.create({ evento, temaId });
  }
}
