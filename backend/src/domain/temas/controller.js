
const TemaController = ({ reunionesRepo, temasRepo }) => ({
  obtener: () => {
    return reunionesRepo.findLastCreated()
      .then(reunion => temasRepo.findTemasDeReunion(obtenerId(reunion)))
  }
});

export default TemaController;


function obtenerId(reunion) {
  return JSON.stringify(reunion.id);
}

