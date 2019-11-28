import React from 'react';
import DescripcionTemaComun from '../descripcion-tipo-tema/DescripcionTemaComun';

const HandlerTemaComun = {
  canHandle(tipoTema) {
    return tipoTema === 'conDescripcion';
  },
  handleTema(tema) {
    return <DescripcionTemaComun tema={tema}/>;
  },
};

export default HandlerTemaComun;
