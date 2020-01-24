import React from 'react';
import Vista from './vista';

function temas(state, evento) {
  switch (evento.data.tipo) {
    case 'Empezar Tema':
      return evento.idTema;
    case 'Terminar Tema':
      return null;
    default: return state;
  }
}

class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.socket = new WebSocket(`ws://${process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8760'}/ws`);
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data).map((evento) => JSON.parse(evento));
      this.setState((state) => ({ tema: listaEventos.reduce(temas, state.tema) }));
    };
  }

  dispatch = (data) => {
    const evento = {
      autor: this.state.orador,
      fecha: Date.now(),
      idTema: this.state.tema,
      data,
    };
    this.socket.send(JSON.stringify(evento));
    this.setState({ orador: '' });
  };

  state = {
    orador: '',
    tema: null,
  };

  onOradorChange = (event) => {
    this.setState({ orador: event.target.value });
  };

  render() {
    return (
      <>
        <Vista dispatch={this.dispatch} tema={this.state.tema} onOradorChange={this.onOradorChange} orador={this.state.orador}/>
      </>
    );
  }
}


export default Mobile;
