import React from 'react';
import Vista from './vista';

class Oradores extends React.Component {
  constructor(props) {
    super(props);

    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const evento = JSON.parse(mensaje.data);
      console.log(evento);
      switch (evento.tipo) {
        case 'Quiero Hablar':
          this.setState(({ oradores }) => ({ oradores: oradores.concat([evento.nombreAutor + ' ' + evento.apellidoAutor]) }));
          break;
        case 'No Quiero Hablar':
          this.setState(({ oradores }) => ({ oradores: oradores.filter((orador) => orador !== evento.nombreAutor + ' ' + evento.apellidoAutor) }));
          break;
        default: console.error('No entiendo el evento', evento);
      }
    };

    this.state = {
      oradores: [],
    };
  }

  render() {
    return (
      <>
            <h1>Oradores</h1>
            <Vista oradores={this.state.oradores}/>
      </>
    );
  }
}


export default Oradores;
