import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';

const EmpezarReunion = () => {
  const [redirect, setRedirect] = useState(false);
  const handleEmpezarReunion = () => backend.empezarReunion().then(() => setRedirect(true));

  if (redirect) return <Redirect to="/reunionDeRoots" />;

  return (
    <EmpezarRootsContainer>
      <Title> Aplicacion para moderar la Reunion de Roots</Title>
      <Button onClick={handleEmpezarReunion}> Empezar reunión </Button>
    </EmpezarRootsContainer>
  );
};

export default EmpezarReunion;
