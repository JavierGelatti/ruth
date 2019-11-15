import React from 'react';
import { Redirect } from 'react-router-dom';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { Button } from '../components/Button.styled';
import backend from '../api/backend';

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
      <EmpezarRootsContainer>
        <Title> Aplicacion para moderar la Reunion de Roots</Title>
        <Button onClick={this.handleEmpezarReunion}> Empezar reunión </Button>
      </EmpezarRootsContainer>
    );
  }
}

export default EmpezarReunion;
