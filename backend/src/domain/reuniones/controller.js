import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';

const ReunionController = ({ reunionesRepo: repoReuniones, temasRepo: repoTemas }) => ({
  reunion: () => repoReuniones.findLastCreated(),

  crear: (req) => {
    const { abierta } = req.body;

    return repoReuniones.create({ abierta })
      .then((nuevaReunion) => {
        return VotacionDeRoots.getTemasRoots()
          .then((temas) => repoTemas.guardarTemas(nuevaReunion, temas));
      })
  },

  actualizar: (req) => {
    const { abierta } = req.body;

    return repoReuniones.findLastCreated()
      .then((reunionAActualizar) => reunionAActualizar.update({ abierta }));
  },

});

export default ReunionController;
