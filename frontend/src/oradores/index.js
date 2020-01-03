import React from 'react';
import OradoresVista from './OradoresVista';
import { colors } from '../styles/theme';
import ChartBar from '../chart/chartBar';

class Oradores extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      console.log(listaEventos);
      listaEventos.map(evento => {
        evento = JSON.parse(evento);
        switch (evento.tipo) {
          case 'Quiero Hablar':
            this.setState(({ oradores }) => ({ oradores: oradores.concat([evento.autor]) }));
            break;
          case 'No Quiero Hablar':
            this.setState(({ oradores }) => ({ oradores: oradores.filter((orador) => orador !== evento.autor) }));
            break;
          case 'Up':
            this.setState({ up: this.state.up+1 });
            break;
          case 'Down':
            this.setState({ down: this.state.down+1 });
            break;
          default: console.error('No entiendo el evento', evento);
        }
      })
    };

    this.state = {
      oradores: [],
      up: 0,
      down: 0,
    };
  }

  dataBar = () => {
    return {
      data: [
        {
          name: '+1',
          value: this.state.up,
        },
        {
          name: '-1',
          value: this.state.down,
        },
      ],
      color: colors.primary,
    }
  }

  render() {
    return (
      <>
            <h1>Oradores</h1>
            <OradoresVista oradores={this.state.oradores}/>
            <h1>Reacciones</h1>
            <ChartBar data={this.dataBar()}/>
      </>
    );
  }
}


export default Oradores;
