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
      tema: { ...this.props.tema, cantidadDeMinutosDeTema: 30, inicio: null },
    };
  }

  static canHandleView = (view) => view === 'Tema Actual'

  componentDidUpdate(prevProps) {
    if (this.props.tema.id !== prevProps.tema.id) {
      this.setState({
        tema: { ...this.props.tema, cantidadDeMinutosDeTema: 40, inicio: null },
      });
    }
  }

  handleCerrarReunion = () => {
    backend.cerrarReunion()
      .then(() => this.setState({ redirect: true }));
  }

  handleTerminarTema = () => {
    if (this.state.tema.inicio === null) {
      alert('El tema no se encuentra iniciado.');
    } else {
      // TO DO: persistir el fin del tema
      this.props.avanzar();
    }
  }

  handleEmpezarTema = () => {
    if (this.state.tema.inicio !== null) {
      return;
    }
    // TO DO: persistir inicio del tema
    this.setState({
      tema: {
        ...this.state.tema,
        inicio: Date.now(),
      },
    });
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
            <Countdown inicio={this.state.tema.inicio}
                        duracion={this.state.tema.cantidadDeMinutosDeTema}/>
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon icon={faCaretLeft} size="4x"/>
              <Button onClick={this.handleEmpezarTema}>Empezar Tema</Button>
              <Button onClick={this.handleTerminarTema}>Terminar Tema</Button>
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
