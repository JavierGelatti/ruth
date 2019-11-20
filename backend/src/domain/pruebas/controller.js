import models from '~/database/models';

const PruebasController = ({buscarTemasVotacionRoots, buscarTemasGuardados, guardarTemasVotacionRoots}) => ({
  temas: (req, res) => {
    buscarTemasVotacionRoots().then(temas => {
        res.status(200).send(temas);
    }).catch(error => res.status(500).send(error));
  },

  guardarTemas: (req, res) => {
    guardarTemasVotacionRoots().then(temas => {
        res.status(200).send();
    }).catch(error => res.status(500).send(error));
  },

  devolverTemasGuardados: (req, res) => {
    buscarTemasGuardados().then(temas =>
      res.status(200).send(temas)
    ).catch(error => res.status(500).send(error));
  }

});

export default PruebasController;
