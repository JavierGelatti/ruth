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
      <Title>No hay ninguna reunión activa</Title>
      <Button onClick={handleEmpezarReunion}>Texto botón</Button>
    </EmpezarRootsContainer>
  );
};

export default EmpezarReunion;
