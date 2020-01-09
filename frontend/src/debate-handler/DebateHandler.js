import React from 'react';
import DebateView from './DebateView';
import { colors } from '../styles/theme';

const dataLine = {
  horarios: ['11:00', '12:00', '13:00', '14:00'],
  data: [
    {
      name: '+1',
      color: colors.primary,
      data: [2, 5, 16, 42],
    },
    {
      name: '-1',
      color: 'red',
      data: [0, 2, 3, 4],
    },
    {
      name: 'redondear',
      color: 'blue',
      data: [0, 0, 2, 35],
    },
  ],
};

const pines = [
  {
    inicio: Date.now() - 120000,
    fin: Date.now() - 110000,
    nombre: 'Ailén Muñoz',
  },
  {
    inicio: Date.now() - 110000,
    fin: Date.now() - 10000,
    nombre: 'Ariel Umansky',
  },
  {
    inicio: Date.now() - 10000,
    fin: null,
    nombre: 'Joaquín Azcarate',
  },
  {
    inicio: null,
    fin: null,
    nombre: 'Ornella Mosca',
  },
  {
    inicio: null,
    fin: null,
    nombre: 'Federico Martinez Fonseca',
  },
  {
    inicio: null,
    fin: null,
    nombre: 'Carolina Destuet',
  },
];

function oradores(state, evento) {
  // TODO: Ver qué hacer cuando se vuelve a encolar una misma persona
  // TODO: Ver qué hacer cuando se trata de la ultima persona
  switch (evento.data.tipo) {
    case 'Quiero Hablar':
      if(state.length === 0){
        return [...state, {nombre: evento.autor, inicio: evento.fecha, fin: null}];
      } else {
        return [...state, {nombre: evento.autor, inicio: null, fin: null}];
      }
    case 'Quiero Desencolarme':
      if(state.some(orador => orador.nombre === evento.autor && orador.inicio != null)) return state;
      return state.filter((orador) => orador.nombre !== evento.autor);
    case 'Quiero Dejar de Hablar':
      let proximoOrador = null;
      return state.map((orador, index) => {
        if(index === proximoOrador){
          return { ...orador, inicio: evento.fecha }
        }
        if(orador.nombre === evento.autor) {
          proximoOrador = index + 1;
          return { ...orador, fin: evento.fecha }
        }
        return orador;
      });
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

class DebateHandler extends React.Component {

  dataBar = () => {
    return {
      data: this.props.eventos.reduce(reacciones, []),
      color: colors.primary,
    }
  }

  debateData() {
    return { 
      participants: this.props.eventos.reduce(oradores, []),
      dataBar: this.dataBar(),
      dataLine: { data: [] },
    };
  }

  isTalking(participant) {
    return participant.inicio !== null && participant.fin === null;
  }

  render() {
    return (
        <DebateView 
          debateData={this.debateData()}
          segundosRestantes={this.props.segundosRestantes}
          temaActivo={this.props.temaActivo}
          tema={this.props.tema}
          isTalking={this.isTalking}/>
    )}
}

export default DebateHandler;
