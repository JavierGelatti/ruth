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
    if (this.props.tema.inicio === null) {
      return this.props.tema.cantidadDeMinutosDelTema * 60;
    }
    let tiempo = Date.now();
    if (this.props.tema.fin !== null) tiempo = Date.parse(this.props.tema.fin);
    return Math.round(this.props.tema.cantidadDeMinutosDelTema * 60
        - (tiempo - Date.parse(this.props.tema.inicio)) / 1000);
  }

  temaActivo = () => {
    if (this.props.tema.inicio !== null && this.props.tema.fin === null) return true;
    return false;
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema autor={this.props.tema.autor}
                  duracion={this.props.tema.cantidadDeMinutosDelTema}
                  obligatoriedad={this.props.tema.obligatoriedad}/>
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(this.props.tema)}
          <Botonera>
            <Countdown activo={this.temaActivo()}
                        segundos={this.segundosRestantes()}/>
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon icon={faCaretLeft} size="4x"/>
              <Button onClick={this.handleEmpezarTema}>Empezar Tema</Button>
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
