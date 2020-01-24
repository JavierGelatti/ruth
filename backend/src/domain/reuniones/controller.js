import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';
import logger from '~/logger';

const ReunionController = ({ reunionesRepo: repoReuniones, temasRepo: repoTemas }) => ({
  reunion: () => repoReuniones.findLastCreated(),

  crear: (req) => {
    const { abierta } = req.body;

    return VotacionDeRoots.getTemasRoots()
      .then((temas) => repoReuniones.create({ abierta })
        .then((reunion) => repoTemas.guardarTemas(reunion, temas))
        .catch((error) => {
          logger.error('Error al guardar los temas', error);
          return Promise.reject(error);
        }))
      .catch((error) => {
        logger.error('Fallo la creacion de la reunion', error);
        return error;
      });
  },

  actualizar: (req) => {
    const { abierta } = req.body;

    return repoReuniones.findLastCreated()
      .then((reunionAActualizar) => reunionAActualizar.update({ abierta }));
  },

});

export default ReunionController;
