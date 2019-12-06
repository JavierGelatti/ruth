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
import { Button } from '../components/Button.styled';
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
    backend.cerrarReunion()
      .then(() => this.setState({ redirect: true }));
  }

  handleEmpezarTema = () => {
    this.props.empezarTema();
  }

  handleTerminarTema = () => {
    this.props.terminarTema();
  }

  segundosRestantes = () => {
    const { tema } = this.props;
    if (tema.inicio === null) {
      return tema.cantidadDeMinutosDelTema * 60;
    }
    let tiempo = Date.now();
    if (tema.fin !== null) tiempo = Date.parse(tema.fin);
    return Math.round(tema.cantidadDeMinutosDelTema * 60
        - (tiempo - Date.parse(tema.inicio)) / 1000);
  }

  temaActivo = () => {
    const { inicio, fin } = this.props.tema;
    return inicio !== null && fin === null;
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
            <Countdown activo={this.temaActivo()}
                        segundos={this.segundosRestantes()}/>
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon icon={faCaretLeft} size="4x"/>
              <Button disabled={this.props.tema.inicio} onClick={this.handleEmpezarTema}>Empezar Tema</Button>
              <Button disabled={!this.temaActivo()} onClick={this.handleTerminarTema}>Terminar Tema</Button>
              <FontAwesomeIcon icon={faCaretRight} size="4x"/>
            </BotoneraNavegacionTemas>
            <BotoneraCerrarReunion>
              <Button onClick={this.handleCerrarReunion}>Cerrar Reunión</Button>
            </BotoneraCerrarReunion>
          </Botonera>
        </VistaDelMedioContainer>
      </TemaActualContainer>
    );
  }
}

export default TemaActual;
