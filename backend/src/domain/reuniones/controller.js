const ReunionController = ({ reunionesRepo: repo }) => ({
  reunion: async (req, res) => {
    const reunion = await repo.findLastCreated();
    res.status(200).send(reunion);
  },

  crear: async (req, res) => {
    const { abierta } = req.body;
    const nuevaReunion = await repo.create({ abierta });

    res.status(201).send(nuevaReunion);
  },

  actualizar: async (req, res) => {
    const { abierta } = req.body;

    const reunionAActualizar = await repo.findLastCreated();
    await reunionAActualizar.update({ abierta });
    res.status(200).send();
  },

});

export default ReunionController;
