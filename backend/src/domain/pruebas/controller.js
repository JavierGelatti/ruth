import models from '~/database/models';

const PruebasController = ({buscarTemasVotacionRoots, buscarTemasGuardados, guardarTemasVotacionRoots}) => ({
  temas: (req, res) => {
    buscarTemasVotacionRoots().then(temas => {
        res.status(200).send(temas);
    });
  },

  guardarTemas: (req, res) => {
    guardarTemasVotacionRoots().then(temas => {
        res.status(200).send();
    });
  },

  devolverTemasGuardados: (req, res) => {
    buscarTemasGuardados().then(temas =>
      res.status(200).send(temas)
      );
  }

});

export default PruebasController;
