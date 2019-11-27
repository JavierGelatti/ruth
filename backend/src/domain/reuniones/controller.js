import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';

const ReunionController = ({ reunionesRepo: repoReuniones, temasRepo: repoTemas }) => ({
  reunion: () => repoReuniones.findLastCreated(),

  crear: (req, res) => {
    const { abierta } = req.body;

    repoReuniones.create({ abierta })
      .then((nuevaReunion) => {
        VotacionDeRoots.getTemasRoots()
          .then((temas) => repoTemas.guardarTemas(nuevaReunion, temas));
      })
      .then((nuevaReunion) => res.status(201).send(nuevaReunion));
  },

  actualizar: (req) => {
    const { abierta } = req.body;

    return repoReuniones.findLastCreated()
      .then((reunionAActualizar) => reunionAActualizar.update({ abierta }));
  },

});

export default ReunionController;
