
const TemaController = ({ reunionesRepo, temasRepo }) => ({
  obtener: () => {
    return reunionesRepo.findLastCreated()
      .then(reunion => temasRepo.findTemasDeReunion(reunion.id))
  },

  actualizar: (req) => {

    const id = req.body.id
    const inicio = req.body.inicio
    const fin = req.body.fin

    return temasRepo.findOneById(id)
      .then((temaAActualizar) => temaAActualizar.update({ inicio, fin }));
  }

});

export default TemaController;

