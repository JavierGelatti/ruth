
const TemaController = ({ temasRepo: repo }) => ({
  obtener: () => {
    return repo.findAll();
  }
});

export default TemaController;
