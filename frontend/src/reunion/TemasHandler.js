import React from 'react';
import backend from '../api/backend';
import VistaTemas from './VistaTemas';
import { toast } from 'react-toastify';

class TemasHandler extends React.Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      if(listaEventos.length === 1 && this.cambioElTema(listaEventos)){
        this.obtenerTemas();
      }
    };
    this.state = {
      temas: [],
      estadoDeTemas: 'cargando',
    };
  }

  dispatch = (data) => {
    const evento = {
      autor: "PRESENTADOR",
      fecha: Date.now(),
      data,
    };
    console.log(evento);
    this.socket.send(JSON.stringify(evento));
  }

  cambioElTema(listaEventos) {
    return ["Empezar Tema", "Terminar Tema"].includes(JSON.parse(listaEventos[0]).data.tipo);
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
        this.dispatch( { tipo: datosTema.fin ? 'Terminar Tema' : 'Empezar Tema', idTema: datosTema.id })
      })
      .catch(() => {
        toast.error('No se pudo actualizar el tema');
      });
  }

  render() {
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    switch (this.state.estadoDeTemas) {
      case ('cargando'): return <h1>Loading...</h1>;
      case ('error'): return <h1>Error!</h1>;
      case ('ok'): return (
          <VistaTemas temas={this.state.temas}
          actualizarTema={this.requestActualizarTema}/>
      );
      default: return null;
    }
  }

}

export default TemasHandler;