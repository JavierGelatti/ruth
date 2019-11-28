import React from 'react';
import DescripcionPropuestaPinos from '../descripcion-tipo-tema/DescripcionPropuestaPinos';

const HandlerPropuestaPinos = {
  canHandle(tipoTema) {
    return tipoTema === 'proponerPinos';
  },
  handleTema(tema) {
    return <DescripcionPropuestaPinos tema={tema}/>;
  },
};

export default HandlerPropuestaPinos;
