import React from 'react';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring } from 'react-spring';
import {
  Botonera, BotoneraCerrarReunion, BotoneraNavegacionTemas, VistaDelMedioContainer,
} from './TemaActual.styled';
import InfoTema from '../temario/InfoTema';
import HandlerTipoTema from '../temario/handler-temas/HandlerTipoTema';
import { Button, SecondaryButton } from '../components/Button.styled';
import Countdown from '../reunion/Countdown';
import { AnimatedContainer } from '../reunion/Reunion.styled';

const TemaActual = (props) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { tema } = props;
  return (
      <AnimatedContainer style={fade}>
        <InfoTema tema={tema} />
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(tema)}
          <Botonera>
            <Countdown activo={props.temaActivo}
                        segundos={props.segundosRestantes}/>
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon
              icon={faCaretLeft}
              size="4x"
              cursor={'pointer'}
              onClick={props.retrocederTema}/>
              <Button disabled={props.tema.inicio || !props.temaATratar}
              onClick={props.empezarTema}>Empezar Tema</Button>
              <Button disabled={!props.temaActivo} onClick={props.terminarTema}>Terminar Tema</Button>
              <FontAwesomeIcon
              icon={faCaretRight}
              size="4x"
              onClick={props.avanzarTema}
              cursor={'pointer'}/>
            </BotoneraNavegacionTemas>
            <BotoneraCerrarReunion>
              <SecondaryButton disabled={false} onClick={props.handleCerrarReunion}>Cerrar Reunión</SecondaryButton>
            </BotoneraCerrarReunion>
          </Botonera>
        </VistaDelMedioContainer>
      </AnimatedContainer>
  );
};

export default TemaActual;
