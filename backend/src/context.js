import ReunionesRepo from '~/domain/reuniones/repo';
import TemasRepo from '~/domain/temas/repo';
import EventosRepo from './domain/eventos/repo';

export default {
  reunionesRepo: new ReunionesRepo(),
  temasRepo: new TemasRepo(),
  eventosRepo: new EventosRepo(),
};
