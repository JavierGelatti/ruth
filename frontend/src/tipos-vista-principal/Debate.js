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
    secondsElapsed: 0,
    isTalking: false,
    nombre: 'Ailén Muñoz',
  },
  {
    secondsElapsed: 0,
    isTalking: false,
    nombre: 'Ariel Umansky',
  },
  {
    secondsElapsed: 0,
    isTalking: false,
    nombre: 'Joaquín Azcarate',
  },
  {
    secondsElapsed: 110,
    isTalking: true,
    nombre: 'Ornella Mosca',
  },
  {
    secondsElapsed: 230,
    isTalking: false,
    nombre: 'Federico Martinez Fonseca',
  },
  {
    secondsElapsed: 154,
    isTalking: false,
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

    findTalkingParticipantIndex = () => this.state.participants.findIndex((participant) => participant.isTalking);

    onNextParticipant = () => {
      const talkingParticipantIndex = this.findTalkingParticipantIndex();
      this.replaceParticipantByIndex({ ...this.state.participants[talkingParticipantIndex], isTalking: false }, talkingParticipantIndex);
      this.replaceParticipantByIndex({ ...this.state.participants[talkingParticipantIndex + 1], isTalking: true }, talkingParticipantIndex + 1);
    };

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
                <ParticipantsQueue participants={this.state.participants} onNext={this.onNextParticipant}/>
              </ParticipantsContainer>
            </SubDebateContainer>
          </DebateContainer>
      );
    }
}

export default Debate;
