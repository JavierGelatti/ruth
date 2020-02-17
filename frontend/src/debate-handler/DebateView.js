import React from 'react';
import {GraphsContainer, ParticipantsContainer, SubDebateContainer, TitleContainer, Titulo,} from './Debate.styled';
import Countdown from '../reunion/Countdown';
import ChartLine from '../chart/chartLine';
import ChartBar from '../chart/chartBar';
import ParticipantsQueue from '../cola-de-participantes/ParticipantsQueue';
import {useSpring} from 'react-spring'

const DebateView = (props) => {
  const fade = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <SubDebateContainer style={fade}>
      <TitleContainer>
        <Titulo>{props.tema.titulo}</Titulo>
      </TitleContainer>
      <GraphsContainer>
        <ChartLine data={props.debateData.dataLine}/>
        <ChartBar data={props.debateData.dataBar}/>
      </GraphsContainer>
      <ParticipantsContainer>
        <Countdown activo={props.temaActivo}
                   segundos={props.segundosRestantes}/>
        <ParticipantsQueue participants={props.debateData.participants} isTalking={props.isTalking}/>
      </ParticipantsContainer>
    </SubDebateContainer>
  );
}

export default DebateView;
