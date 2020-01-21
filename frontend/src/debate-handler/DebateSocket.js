import React from 'react';
import DebateHandler from './DebateHandler';

class DebateSocket extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      this.setState((state) => ({ eventos: state.eventos.concat(listaEventos.map((evento) => JSON.parse(evento))) }));
    };

    this.state = {
      eventos: [],
    };
  }

  render() {
    return (
        <DebateHandler
          eventos={this.state.eventos.filter((evento) => evento.idTema === this.props.tema.id)}
          segundosRestantes={this.props.segundosRestantes}
          temaActivo={this.props.temaActivo}
          tema={this.props.tema}/>
    );
  }
}

export default DebateSocket;
