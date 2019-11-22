import {respondWithSuccess, respondWithError} from '../responses'

const PruebasController = ({buscarTemasVotacionRoots}) => ({
  temas: (req, res) => {
    buscarTemasVotacionRoots().then(temas => respondWithSuccess(res, temas))
    .catch(error => respondWithError(res, error));
  }
});

export default PruebasController;
