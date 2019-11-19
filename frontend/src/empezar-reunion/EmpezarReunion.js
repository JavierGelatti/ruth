import React from 'react';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';


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
    return (<Button onClick={this.handleEmpezarReunion}> Empezar reunión </Button>);
  }

  render() {
    if (this.state.redirect) return <Redirect to="/reunionDeRoots" />;

    return (
      <EmpezarRootsContainer>
        <Title> Aplicacion para moderar la Reunion de Roots</Title>
        {this.iniciarReunion()}
      </EmpezarRootsContainer>
    );
  }
}

export default EmpezarReunion;
