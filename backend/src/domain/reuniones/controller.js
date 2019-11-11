import temas from "./mockTemas";

const ReunionController = ({ reunionesRepo: repo }) => ({
  reunion: (req, res) => {
    repo.findLastCreated()
      .then(reunion =>
        res.status(200).send(reunion));
  },

  temas: (req, res) => {
    res.status(200).send(temas);
  },

  estadoDeReunion: (req, res) => {
    repo.findLastCreated()
      .then(({ abierta }) =>
        res.status(200).send(abierta));
  },

  crear: (req, res) => {
    const { abierta } = req.body;
    repo.create({ abierta })
      .then(nuevaReunion =>
        res.status(201).send(nuevaReunion));
  },

  actualizar: (req, res) => {
    const { abierta } = req.body;

    repo.findLastCreated()
      .then(reunionAActualizar =>
        reunionAActualizar.update({ abierta }))
      .then(() =>
        res.status(200).send());
  },

});

export default ReunionController;
