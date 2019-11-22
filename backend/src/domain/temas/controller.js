import VotacionDeRoots from '../votacionDeRoots/votacionDeRoots';

const TemaController = ({temasRepo: repo}) => ({
  obtener: () => {
    return repo.findAll()
  },

  guardar: () => {
    return VotacionDeRoots.getTemasRoots()
      .then(temas => 
        repo.guardarTemas(temas))
      .then(() => {});
  }

});

export default TemaController;
