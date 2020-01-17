import React from 'react';
import {
  DebateContainer, SidebarIzquierdo, WorkInProgressContainer, Titulo, ImagenContainer,
  TitleContainer, SubDebateContainer, GraphsContainer, ParticipantsContainer,
} from './Debate.styled';
import Countdown from '../reunion/Countdown';
import ChartLine from '../chart/chartLine';
import ChartBar from '../chart/chartBar';
import { colors } from '../styles/theme';
import ParticipantsQueue from '../cola-de-participantes/ParticipantsQueue';

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

const dataBar = {
  data: [
    {
      name: '+1',
      value: 42,
    },
    {
      name: '-1',
      value: 4,
    },
    {
      name: 'redondear',
      value: 35,
    },
    {
      name: 'slack',
      value: 2,
    },
  ],
  color: colors.primary,
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


class Debate extends React.Component {
    state = { participants: pines };

    static canHandleView = (view) => view === 'Debate'

    mensaje = 'Pagina en desarrollo';

    replaceParticipantByIndex = (participant, index) => {
      const updatedParticipants = this.state.participants;
      updatedParticipants[index] = participant;
      this.setState({ participants: updatedParticipants });
    };

    findTalkingParticipantIndex = () => this.state.participants.findIndex((participant) => this.isTalking(participant));

    onNextParticipant = () => {
      const talkingParticipantIndex = this.findTalkingParticipantIndex();
      // TODO: Ver qué hacer cuando se trata del último en hablar
      if(talkingParticipantIndex === this.state.participants.length - 1){
        return;
      }
      this.replaceParticipantByIndex({ ...this.state.participants[talkingParticipantIndex], fin: Date.now() }, talkingParticipantIndex);
      this.replaceParticipantByIndex({ ...this.state.participants[talkingParticipantIndex + 1], inicio: Date.now() }, talkingParticipantIndex + 1);
    };

    isTalking(participant) {
      return participant.inicio !== null && participant.fin === null;
    }

    render() {
      if (process.env.NODE_ENV === 'production') {
        return (
          <DebateContainer>
            <SidebarIzquierdo/>
            <WorkInProgressContainer>
              <Titulo>{this.mensaje}</Titulo>
              <ImagenContainer src='./working.png'/>
            </WorkInProgressContainer>
          </DebateContainer>
        );
      }
      return (
          <DebateContainer>
            <SubDebateContainer>
              <TitleContainer>
                <Titulo>{this.props.tema.titulo}</Titulo>
              </TitleContainer>
              <GraphsContainer>
                <ChartLine data={dataLine}/>
                <ChartBar data={dataBar}/>
              </GraphsContainer>
              <ParticipantsContainer>
                <Countdown activo={this.props.temaActivo}
                      segundos={this.props.segundosRestantes}/>
                <ParticipantsQueue participants={this.state.participants} onNext={this.onNextParticipant} isTalking={this.isTalking}/>
              </ParticipantsContainer>
            </SubDebateContainer>
          </DebateContainer>
      );
    }
}

export default Debate;
