import React from 'react';
import { DescripcionTemaContainer, Titulo } from '../descripcion-tipo-tema/DescripcionTema.styled';

const HandlerRepasarActionItems = {
  canHandle(tipoTema) {
    return tipoTema === 'repasarActionItems';
  },
  handleTema(tema) {
    return (
      <DescripcionTemaContainer>
        <Titulo>Repasar Action Items</Titulo>
      </DescripcionTemaContainer>
    );
  },
};

export default HandlerRepasarActionItems;
