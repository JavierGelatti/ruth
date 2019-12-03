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
    // TO DO: Que el estado del tema llegue de manera completa de la base de datos
    this.state = {
      tema: {
        ...this.props.tema, cantidadDeMinutosDeTema: 30,
      },
    };
  }

  static canHandleView = (view) => view === 'Tema Actual'

  componentDidUpdate(prevProps) {
    if (this.props.tema !== prevProps.tema) {
      this.setState({
        tema: {
          ...this.props.tema, cantidadDeMinutosDeTema: 30,
        },
      });
    }
  }

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
    if (this.state.tema.inicio === null) {
      return this.state.tema.cantidadDeMinutosDeTema * 60;
    }
    let tiempo = Date.now();
    if (this.state.tema.fin !== null) tiempo = Date.parse(this.state.tema.fin);
    return Math.round(this.state.tema.cantidadDeMinutosDeTema * 60
        - (tiempo - Date.parse(this.state.tema.inicio)) / 1000);
  }

  temaActivo = () => {
    if (this.state.tema.inicio !== null && this.state.tema.fin === null) return true;
    return false;
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema autor={this.state.tema.autor}
                  duracion={this.state.tema.cantidadDeMinutosDeTema}
                  obligatoriedad={this.state.tema.obligatoriedad}/>
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(this.state.tema)}
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
