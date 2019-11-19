import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  EmpezarRootsContainer, Title, TitleAndButton, HomeImage, FlexContainer,
} from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';
import RuthHeader from '../Header/Header';

class EmpezarReunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleEmpezarReunion = () => {
    backend.empezarReunion().then(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/reunionDeRoots" />;

    return (
      <FlexContainer>
        <EmpezarRootsContainer>
            <TitleAndButton>
              <Title>No hay ninguna reunión activa</Title>
              <Button onClick={this.handleEmpezarReunion}>Empezar Reunión</Button>
            </TitleAndButton>
            <HomeImage src="./home.svg" alt="Home"/>
        </EmpezarRootsContainer>
      </FlexContainer>
    );
  }
}

export default EmpezarReunion;
