import React from 'react';
import { Titulo } from '../descripcion-tipo-tema/DescripcionTema.styled';

const HandlerRepasarActionItems = {
  canHandle(tipoTema) {
    return tipoTema === 'repasarActionItems';
  },
  handleTema(tema) {
    return <Titulo>Repasar Action Items</Titulo>;
  },
};

export default HandlerRepasarActionItems;
