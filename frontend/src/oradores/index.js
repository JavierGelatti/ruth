import React from 'react';
import OradoresVista from './OradoresVista';
import { colors } from '../styles/theme';
import ChartBar from '../chart/chartBar';


function oradores(state, evento) {
    switch (evento.data.tipo) {
      case 'Quiero Hablar':
        return state.concat([evento.autor]);
      case 'No Quiero Hablar':
        return state.filter((orador) => orador !== evento.autor);
      default: return state;
    }
}

function reacciones(state, evento){
  switch (evento.data.tipo) {
    case 'Reiniciar reacciones':
        return [];
    case 'Reaccionar':
      const { reaccion: eventReaction } = evento.data;
        if(state.some(stateReaction => stateReaction.name === eventReaction)){
          return state.map(stateReaction => {
            if(stateReaction.name === eventReaction) {
              return { ...stateReaction, value: stateReaction.value+1 }
            }
            return stateReaction;
          })
        } else {
          return state.concat([{ name: eventReaction, value: 1 }]);
        }
    default: return state;
  }
}

class Oradores extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8760/ws');
    this.socket.onmessage = (mensaje) => {
      const listaEventos = JSON.parse(mensaje.data);
      this.setState(state => ({ eventos: state.eventos.concat(listaEventos.map(evento => JSON.parse(evento)))}));
    };

    this.state = {
      eventos: [],
    };
  }

  dataBar = () => {
    return {
      data: this.state.eventos.reduce(reacciones, []),
      color: colors.primary,
    }
  }

  render() {
    return (
      <>
            <h1>Oradores</h1>
            <OradoresVista oradores={this.state.eventos.reduce(oradores, [])}/>
            <h1>Reacciones</h1>
            <ChartBar data={this.dataBar()}/>
      </>
    );
  }
}


export default Oradores;
