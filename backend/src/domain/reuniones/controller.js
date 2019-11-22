const ReunionController = ({reunionesRepo: repo}) => ({
  reunion: () => {
    return repo.findLastCreated();
  },

  crear: (req, res) => {
    const {abierta} = req.body;

    repo.create({abierta})
      .then(nuevaReunion =>
        res.status(201).send(nuevaReunion));
  },

  actualizar: (req) => {
    const {abierta} = req.body;

    return repo.findLastCreated()
      .then(reunionAActualizar =>
        reunionAActualizar.update({abierta}))
  },

});

export default ReunionController;
