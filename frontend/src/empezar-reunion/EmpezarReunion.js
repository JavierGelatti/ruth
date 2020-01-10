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
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      debugger;
      // TODO: Existen condiciones de carrera que podrían hacer que no se ejecuten las tareas correspondientes
      if(this.seCreoReunion(listaEventos)){
        this.setState({ redirect: true });
      }
    };
    this.state = {
      redirect: false,
      cargando: false,
    };
  }

  seCreoReunion(listaEventos){
    return listaEventos.length === 1 && ['Crear Reunion'].includes(JSON.parse(listaEventos[0]).data.tipo);
  }

  dispatchReunion = (data) => {
    const evento = {
      autor: "PRESENTADOR",
      fecha: Date.now(),
      data: {tipo: data.tipo},
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
      this.dispatchReunion({ tipo:'Crear Reunion' });
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
