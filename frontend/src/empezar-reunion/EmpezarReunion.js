import React from 'react';
import { Redirect } from 'react-router-dom';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
// import { Spinner } from '../components/Spinner';
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
    backend.empezarReunion().then(() => {
      this.setState({ redirect: true });
    });
  };

  iniciarReunion = () => {
    if (this.state.cargando) {
      return (
        <div>hola</div>
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
