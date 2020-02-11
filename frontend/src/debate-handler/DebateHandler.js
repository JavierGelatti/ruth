import React from 'react';
import { connect } from 'react-redux';
import DebateView from './DebateView';
import { colors } from '../styles/theme';

const isTalking = (participant) => participant.inicio !== null && participant.fin === null;

class DebateHandler extends React.Component {
  render() {
    return (
        <DebateView
          debateData={this.props.debateData}
          segundosRestantes={this.props.segundosRestantes}
          temaActivo={this.props.temaActivo}
          tema={this.props.tema}
          isTalking={isTalking}/>
    );
  }
}

const mapStateToProps = (state) => {
  let temaActual = null;
  temaActual = state.temas.find((tema) => tema.fin === null && tema.inicio !== null);
  if (!temaActual) {
    const temasTratados = state.temas.filter((tema) => tema.fin !== null && tema.inicio !== null);
    temasTratados.sort((t1, t2) => t1.fin.localeCompare(t2.fin));
    temaActual = temasTratados[0];
  }

  if (!temaActual) {
    temaActual = {};
  }

  return ({
    debateData: {
      participants: temaActual.oradores,
      dataBar: {
        data: temaActual.reacciones,
        color: colors.primary,
      },
      dataLine: { data: [] },
    },
  });
};

export default connect(mapStateToProps)(DebateHandler);
