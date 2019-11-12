var fetch = require('node-fetch');

const getTemasRoots = () => {
  const temasRootsHost = process.env.TEMAS_ROOTS_HOST;
  const temasRootsApiKey = process.env.TEMAS_ROOTS_API_KEY;

  return fetch(`${temasRootsHost}/api/v2/temas?apiKey=${temasRootsApiKey}`)
};

const ReunionController = ({reunionesRepo: repo}) => ({
  reunion: (req, res) => {
    repo.findLastCreated().then(reunion =>
      res.status(200).send(reunion));
  },

  crear: (req, res) => {
    const {abierta} = req.body;
    repo.create({abierta})
      .then(nuevaReunion =>
        res.status(201).send(nuevaReunion));
  },

  actualizar: (req, res) => {
    const {abierta} = req.body;

    repo.findLastCreated()
      .then(reunionAActualizar =>
        reunionAActualizar.update({abierta}))
      .then(() =>
        res.status(200).send());
  },

});

export default ReunionController;
