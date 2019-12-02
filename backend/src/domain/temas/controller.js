
const TemaController = ({ reunionesRepo, temasRepo }) => ({
  obtener: () => {
    return reunionesRepo.findLastCreated()
      .then(reunion => temasRepo.findTemasDeReunion(reunion.id))
  },

  actualizar: (req) => {

    const { id, inicio, fin } = req.body;
    if(fin !== null && inicio === null){
      return Promise.reject(new Error('Datos inválidos de tema'));
    } 

    return temasRepo.findOneById(id)
      .then((temaAActualizar) => {
        return temaAActualizar.update({ inicio, fin })
        .then( (temaActualizado) => temaActualizado);
      });
  }
});

export default TemaController;

