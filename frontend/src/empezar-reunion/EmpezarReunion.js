import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  EmpezarRootsContainer, Title, TitleAndButton, HomeImage, FlexContainer,
} from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';
import RuthHeader from '../Header/Header';

const EmpezarReunion = () => {
  const [redirect, setRedirect] = useState(false);
  const handleEmpezarReunion = () => backend.empezarReunion().then(() => setRedirect(true));

  if (redirect) return <Redirect to="/reunionDeRoots" />;

  return (
    <FlexContainer>
      <EmpezarRootsContainer>
          <TitleAndButton>
            <Title>No hay ninguna reunión activa</Title>
            <Button onClick={handleEmpezarReunion}>Empezar Reunión</Button>
          </TitleAndButton>
          <HomeImage src="./home.svg" alt="Home"/>
      </EmpezarRootsContainer>
    </FlexContainer>
  );
};

export default EmpezarReunion;
