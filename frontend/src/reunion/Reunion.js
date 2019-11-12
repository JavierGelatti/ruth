import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Temario from '../temario/Temario';
import { ReunionContainer } from './Reunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';

const Reunion = () => {
  const [redirect, setRedirect] = useState(false);
  const handleCerrarReunion = () => backend.cerrarReunion().then(() => setRedirect(true));

  if (redirect) return <Redirect to="/"/>;

  return (
    <ReunionContainer>
      <Temario/>
      Tema actual
      <Button onClick={handleCerrarReunion}> Cerrar reunion </Button>
    </ReunionContainer>);
};

export default Reunion;
