import React from 'react';

const HandlerRepasarActionItems = {
  canHandle(tipoTema) {
    return tipoTema === 'repasarActionItems';
  },
  handleTema(tema) {
    return <h1>Falta implementar</h1>;
  },
};

export default HandlerRepasarActionItems;
