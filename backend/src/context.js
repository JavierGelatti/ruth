import ReunionesRepo from '~/domain/reuniones/repo';
import TemasRepo from '~/domain/temas/repo';

export default {
  reunionesRepo: new ReunionesRepo(),
  temasRepo: new TemasRepo(),
};
