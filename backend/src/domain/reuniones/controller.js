import logger from '~/logger';

const ReunionController = ({ reunionesRepo: repo }) => ({
  reuniones: async (req, res) => {
    const reuniones = await repo.findAll();

    res.send(reuniones);
  },
  crear: async (req, res) => {
    const { abierta } = req.body;
    const nuevaReunion = await repo.create({ abierta });

    res.status(201).send(nuevaReunion);
  },
  actualizar: async (req, res) => {
    const { reunionId } = req.params;
    const { abierta } = req.body;

    const reunionAActualizar = await repo.findOneById(reunionId);
    await reunionAActualizar.update({ abierta });

    logger.info('Listorti!', reunionAActualizar.id);

    res.status(204).send();
  },
});

export default ReunionController;
