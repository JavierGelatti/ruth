import React from 'react';
import Temario from '../temario/Temario';
import { ReunionContainer } from './Reunion.styled';
import { Button } from '../components/Button.styled';

const Reunion = ({ temas = {}, indexTemaActual = 0 }) => {
  if (!temas) return null;

  return (
    <ReunionContainer>
      <Temario indexTemaActual={indexTemaActual} temario={temas} handleClickDeTema={() => {}}/>
      Tema actual: {temas[indexTemaActual].titulo}
      <Button onClick={() => {}}> Cerrar reunion </Button>
    </ReunionContainer>);
};

export default Reunion;
