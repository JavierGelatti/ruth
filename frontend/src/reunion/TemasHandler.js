import React from 'react';
import backend from '../api/backend';
import VistaTemas from './VistaTemas';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

class TemasHandler extends React.Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      // TODO: Existen condiciones de carrera que podrían hacer que no se ejecuten las tareas correspondientes
      if(this.seCerroReunion(listaEventos)){
        this.setState({ redirect: true });
      }
      if(this.cambioElTema(listaEventos)){
        this.obtenerTemas();
      }
    };
    this.state = {
      temas: [],
      estadoDeTemas: 'cargando',
      redirect: false,
    };
  }

  dispatchTema = (data) => {
    const evento = {
      autor: "PRESENTADOR",
      fecha: Date.now(),
      idTema: data.idTema,
      data: {tipo: data.tipo},
    };
    this.socket.send(JSON.stringify(evento));
  }

  dispatchReunion = (data) => {
    const evento = {
      autor: "PRESENTADOR",
      fecha: Date.now(),
      data: {tipo: data.tipo},
    };
    this.socket.send(JSON.stringify(evento));
  }

  seCerroReunion(listaEventos){
    return listaEventos.length === 1 && ['Cerrar Reunion'].includes(JSON.parse(listaEventos[0]).data.tipo);
  }

  cambioElTema(listaEventos) {
    return listaEventos.length === 1 && ['Empezar Tema', 'Terminar Tema'].includes(JSON.parse(listaEventos[0]).data.tipo);
  }

  componentDidMount() {
    this.obtenerTemas();
  }

  obtenerTemas() {
    return backend.getTemas().then((temas) => {
      this.setState({
        temas: temas.sort((tema1, tema2) => tema1.prioridad - tema2.prioridad),
        estadoDeTemas: 'ok',
      });
    })
      .catch(() => this.setState({ estadoDeTemas: 'error' }));
  }

  requestActualizarTema = (datosTema) => {
    backend.actualizarTema(datosTema)
      .then(() => {
        this.obtenerTemas();
        this.dispatchTema( { tipo: datosTema.fin ? 'Terminar Tema' : 'Empezar Tema', idTema: datosTema.id })
      })
      .catch(() => {
        toast.error('No se pudo actualizar el tema');
      });
  }

  cerrarReunion = () => {
    backend.cerrarReunion()
      .then(() => toast.success('Reunión finalizada'))
      .then(() => {
        this.setState({ redirect: true });
        this.dispatchReunion({ tipo: 'Cerrar Reunion' });
      })
      .catch(() => toast.error('No se pudo finalizar la reunión'));
  }

  render() {
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    if (this.state.redirect) return <Redirect to="/" />;
    switch (this.state.estadoDeTemas) {
      case ('cargando'): return <h1>Loading...</h1>;
      case ('error'): return <h1>Error!</h1>;
      case ('ok'): return (
          <VistaTemas temas={this.state.temas}
          actualizarTema={this.requestActualizarTema}
          cerrarReunion={this.cerrarReunion}/>
      );
      default: return null;
    }
  }

}

export default TemasHandler;