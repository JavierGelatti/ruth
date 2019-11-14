const PruebasController = ({buscarTemasVotacionRoots}) => ({
  temas: (req, res) => {
    buscarTemasVotacionRoots().then(temas =>
        res.status(200).send(temas)
      );
  },

});

export default PruebasController;
