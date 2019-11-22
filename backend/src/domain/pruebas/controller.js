import {respondWithSuccess, respondWithError} from '../sarasa'

const PruebasController = ({buscarTemasVotacionRoots, buscarTemasGuardados, guardarTemasVotacionRoots}) => ({
  temas: (req, res) => {
    buscarTemasVotacionRoots().then(temas => respondWithSuccess(res, temas))
    .catch(error => respondWithError(res, error));
  },

  guardarTemas: (req, res) => {
    guardarTemasVotacionRoots().then(temas => respondWithSuccess(res))
    .catch(error => respondWithError(res, error));
  },

  devolverTemasGuardados: (req, res) => {
    buscarTemasGuardados().then(temas => respondWithSuccess(res, temas))
    .catch(error => respondWithError(res, error));
  }

});

export default PruebasController;
