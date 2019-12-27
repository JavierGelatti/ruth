import React from 'react';
import Vista from './vista';

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
  }

  dispatch = (tipo) => {
    const evento = {
      nombreAutor: this.props.orador,
      tipo,
    };
    console.log(evento);
    this.socket.send(JSON.stringify(evento));
  }

  render() {
    return (
      <>
        <Vista dispatch={this.dispatch} />
      </>
    );
  }

}


export default Mobile;
