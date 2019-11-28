
const TemaController = ({ reunionesRepo, temasRepo }) => ({
  obtener: () => {
    return reunionesRepo.findLastCreated()
      .then(reunion => temasRepo.findTemasDeReunion(reunion.id))
  },

  actualizar: (req) => {
    return null
  }
});

export default TemaController;

