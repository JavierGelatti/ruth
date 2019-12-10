import React from 'react';
import { Redirect } from 'react-router-dom';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  TemaActualContainer, VistaDelMedioContainer, Botonera,
  BotoneraNavegacionTemas, BotoneraCerrarReunion,
} from './TemaActual.styled';
import InfoTema from '../temario/InfoTema';
import HandlerTipoTema from '../temario/handler-temas/HandlerTipoTema';
import backend from '../api/backend';
import { Button, SecondaryButton } from '../components/Button.styled';
import Countdown from '../reunion/Countdown';

class TemaActual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  static canHandleView = (view) => view === 'Tema Actual'

  handleCerrarReunion = () => {
    if (this.props.temaActivo) {
      this.handleTerminarTema();
    }
    backend.cerrarReunion()
      .then(() => this.setState({ redirect: true }));
  }

  handleEmpezarTema = () => {
    this.props.empezarTema();
  }

  handleTerminarTema = () => {
    this.props.terminarTema();
  }

  render() {
    const { tema } = this.props;
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema tema = {tema}/>
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(tema)}
          <Botonera>
            <Countdown activo={this.props.temaActivo}
                        segundos={this.props.segundosRestantes}/>
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon icon={faCaretLeft} size="4x"/>
              <Button disabled={this.props.tema.inicio} onClick={this.handleEmpezarTema}>Empezar Tema</Button>
              <Button disabled={!this.props.temaActivo} onClick={this.handleTerminarTema}>Terminar Tema</Button>
              <FontAwesomeIcon icon={faCaretRight} size="4x"/>
            </BotoneraNavegacionTemas>
            <BotoneraCerrarReunion>
              <SecondaryButton disabled={false} onClick={this.handleCerrarReunion}>Cerrar Reunión</SecondaryButton>
            </BotoneraCerrarReunion>
          </Botonera>
        </VistaDelMedioContainer>
      </TemaActualContainer>
    );
  }
}

export default TemaActual;
