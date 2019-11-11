import React from 'react';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';

const EmpezarReunion = () => (
  <EmpezarRootsContainer>
    <Title> Aplicacion para moderar la Reunion de Roots</Title>
    <Button onClick={() => {
    }}> Empezar reunión </Button>
  </EmpezarRootsContainer>
);

export default EmpezarReunion;
