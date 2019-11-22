import {respondWithSuccess, respondWithError} from '../sarasa'
import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';

const TemaController = ({temasRepo: repo}) => ({
  obtener: (req, res) => {
    repo.findAll().then(temas => respondWithSuccess(res, temas))
    .catch(error => respondWithError(res, error));
  },

  guardar: (req, res) => {
    VotacionDeRoots.getTemasRoots().then(temas => 
      Promise.all(temas.map(tema => repo.create(tema))))
      .then(temas => respondWithSuccess(res))
      .catch(error => respondWithError(res, error));
  },

});

export default TemaController;
