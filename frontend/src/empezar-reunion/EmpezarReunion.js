import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  EmpezarRootsContainer, Title, TitleAndButton, HomeImage, FlexContainer,
} from './EmpezarReunion.styled';
import backend from '../api/backend';
import BotonParaIniciarReunion from './BotonParaIniciarReunion';

class EmpezarReunion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cargando: false,
    };
  }

  dispatchReunion = (data) => {
    const evento = {
      autor: 'PRESENTADOR',
      fecha: Date.now(),
      data: { tipo: data.tipo },
    };
    this.socket.send(JSON.stringify(evento));
  };

  handleEmpezarReunion = () => {
    this.setState({ cargando: true });
    this.requestEmpezarReunion();
  };

  requestEmpezarReunion = () => {
    backend.empezarReunion().then(() => {
      toast.success('Reunión iniciada');
      this.setState({ redirect: true });
      this.props.history.push('/reunionDeRoots');
    })
      .catch(() => {
        this.setState({ cargando: false });
        toast.error('Error al iniciar la reunión');
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <FlexContainer>
        <EmpezarRootsContainer>
          <TitleAndButton>
            <Title>No hay ninguna reunión activa</Title>
            <BotonParaIniciarReunion
              cargando={this.state.cargando}
              handleEmpezarReunion={this.handleEmpezarReunion}/>
          </TitleAndButton>
          <HomeImage src="./home.svg" alt="Home"/>
        </EmpezarRootsContainer>
      </FlexContainer>
    );
  }
}

export default withRouter(EmpezarReunion);
