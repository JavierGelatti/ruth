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
      tema: {
        autor: 'Loading...',
        tipo: 'conDescripcion',
        titulo: 'Loading...',
        obligatoriedad: 'Loading...',
        propuestas: [
          {
            pino: 'Loading...',
            sponsor: {
              name: 'Loading...',
            },
          },
        ],
        inicio: null,
        cantidadDeMinutos: 2,
      },
      redirect: false,
    };
  }

  componentDidMount() {
    backend.getTemas().then((temas) => {
      this.setState(
        { tema: { ...temas[2], cantidadDeMinutos: 2, inicio: null } },
      );
    });
  }

  static canHandleView = (view) => view === 'Tema Actual'

  handleCerrarReunion = () => backend.cerrarReunion()
    .then(() => this.setState({ redirect: true }));

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

  mostrarCountdown = () => <Countdown inicio={this.state.tema.inicio}
                                      duracion={this.state.tema.cantidadDeMinutos}/>

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema autor={this.state.tema.autor}
                  duracion={this.state.tema.cantidadDeMinutos}
                  obligatoriedad={this.state.tema.obligatoriedad}/>
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(this.state.tema)}
          <Botonera>
            {this.mostrarCountdown()}
            <BotoneraNavegacionTemas>
              <FontAwesomeIcon icon={faCaretLeft} size="4x"/>
              <Button onClick={this.handleEmpezarTema}>Empezar Tema</Button>
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
