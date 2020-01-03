import React from 'react';
import { TextField } from '@material-ui/core';
import Vista from './vista';

class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.socket = new WebSocket('ws://localhost:8760/ws');
  }

    dispatch = (tipo) => {
      const evento = {
        autor: this.state.nombre,
        tipo,
      };
      console.log(evento);
      this.socket.send(JSON.stringify(evento));
    }

    state = {
      nombre: '',
    }

    handleNameChange = (event) => {
      this.setState({ nombre: event.target.value });
    }

    render() {
      return (
        <>
                <TextField value={this.state.nombre} onChange={this.handleNameChange} />
                <Vista dispatch={this.dispatch} />
        </>
      );
    }
}


export default Mobile;
