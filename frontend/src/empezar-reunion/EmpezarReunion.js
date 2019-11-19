import React from 'react';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
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
      cargando: false,
    };
  }

  handleEmpezarReunion = () => {
    this.setState({ cargando: true });
    setTimeout(this.requestEmpezarReunion, 3000);
  };

  requestEmpezarReunion = () => {
    backend.empezarReunion().then(() => { this.setState({ redirect: true }); })
      .catch(() => {
        this.setState({ cargando: false });
        alert('Error al iniciar reunión!');
        return <Redirect to="/" />;
      });
  }

  iniciarReunion = () => {
    if (this.state.cargando) {
      return (
       <CircularProgress/>
      );
    }
    return (<Button onClick={this.handleEmpezarReunion}>Empezar Reunión</Button>);
  }

  render() {
    if (this.state.redirect) return <Redirect to="/reunionDeRoots" />;

    return (
      <FlexContainer>
        <EmpezarRootsContainer>
            <TitleAndButton>
              <Title>No hay ninguna reunión activa</Title>
              {this.iniciarReunion()}
            </TitleAndButton>
            <HomeImage src="./home.svg" alt="Home"/>
        </EmpezarRootsContainer>
      </FlexContainer>
    );
  }
}

export default EmpezarReunion;
