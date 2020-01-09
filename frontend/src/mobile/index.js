import React from 'react';
import { TextField } from '@material-ui/core';
import Vista from './vista';

function temas(state, evento){
  switch (evento.data.tipo) {
    case 'Empezar Tema':
      return evento.data.idTema;
    case 'Terminar Tema':
      return null;
    default: return state;
  }
}

class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data).map(evento => JSON.parse(evento));
      this.setState({ tema: listaEventos.reduce(temas, null) });
    };
  }

  dispatch = (data) => {
    const evento = {
      autor: this.state.nombre,
      fecha: Date.now(),
      data,
    };
    console.log(evento);
    this.socket.send(JSON.stringify(evento));
    this.setState({ nombre: '' });
  }

  state = {
    nombre: '',
    tema: null,
  }

  handleNameChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  render() {
    return (
      <>
              <TextField value={this.state.nombre} onChange={this.handleNameChange} />
              <div> <br></br> Tema actual: {this.state.tema}</div>
              <Vista dispatch={this.dispatch}/>
      </>
    );
  }
}


export default Mobile;
