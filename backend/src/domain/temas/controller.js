
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
        if((fin === null && temaAActualizar.inicio === null) || 
        (fin !== null && temaAActualizar.fin === null)){
          return temaAActualizar.update({ inicio, fin });
        } else {
          return temaAActualizar;
        }
      });
  }
});

export default TemaController;

