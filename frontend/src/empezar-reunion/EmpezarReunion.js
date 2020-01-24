import React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  EmpezarRootsContainer, Title, TitleAndButton, HomeImage, FlexContainer,
} from './EmpezarReunion.styled';
import backend from '../api/backend';
import BotonParaIniciarReunion from './BotonParaIniciarReunion';

class EmpezarReunion extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket(`ws://${process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8760'}/ws`);
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      if (this.seCreoReunion(listaEventos)) {
        // TODO: Acá idealmente habría un toast de reunión iniciada pero por
        // alguna razón se ejecuta más de una vez cuando abrís y cerrás reuniones
        this.setState({ redirect: true });
      }
    };
    this.state = {
      redirect: false,
      cargando: false,
    };
  }

  seCreoReunion(listaEventos) {
    return listaEventos.length === 1 && ['Crear Reunion'].includes(JSON.parse(listaEventos[listaEventos.length - 1]).data.tipo);
  }

  dispatchReunion = (data) => {
    const evento = {
      autor: 'PRESENTADOR',
      fecha: Date.now(),
      data: { tipo: data.tipo },
    };
    this.socket.send(JSON.stringify(evento));
  }

  handleEmpezarReunion = () => {
    this.setState({ cargando: true });
    this.requestEmpezarReunion();
  };

  requestEmpezarReunion = () => {
    backend.empezarReunion().then(() => {
      this.setState({ redirect: true });
      this.dispatchReunion({ tipo: 'Crear Reunion' });
      toast.success('Reunión iniciada');
    })
      .catch(() => {
        this.setState({ cargando: false });
        toast.error('Error al iniciar la reunión');
        return <Redirect to="/" />;
      });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/reunionDeRoots" />;

    return (
      <FlexContainer>
        <EmpezarRootsContainer>
            <TitleAndButton>
              <Title>No hay ninguna reunión activa</Title>
              <BotonParaIniciarReunion cargando={this.state.cargando}
              handleEmpezarReunion={this.handleEmpezarReunion}/>
            </TitleAndButton>
            <HomeImage src="./home.svg" alt="Home"/>
        </EmpezarRootsContainer>
      </FlexContainer>
    );
  }
}

export default EmpezarReunion;
