import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';

const ReunionController = ({ reunionesRepo: repoReuniones, temasRepo: repoTemas }) => ({
  reunion: () => repoReuniones.findLastCreated(),

  crear: async (req) => {
    const { abierta } = req.body;
    const temas = await VotacionDeRoots.getTemasRoots();
    const reunion = await repoReuniones.create({ abierta });
    await repoTemas.guardarTemas(reunion, temas);
  },

  actualizar: async (req) => {
    const { abierta } = req.body;

    const reunionAActualizar = await repoReuniones.findLastCreated();
    await reunionAActualizar.update({ abierta });
  },

});

export default ReunionController;
