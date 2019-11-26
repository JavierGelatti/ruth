import React from 'react';
import { Redirect } from 'react-router-dom';
import { TemaActualContainer, VistaDelMedioContainer, Botonera } from './TemaActual.styled';
import InfoTema from '../temario/InfoTema';
import HandlerTipoTema from '../temario/handler-temas/HandlerTipoTema';
import backend from '../api/backend';
import { Button } from '../components/Button.styled';

class TemaActual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: {
        autor: 'Loading...',
        duracion: 'Loading... ',
        tipo: 'conDescripcion',
        titulo: 'Loading...',
        propuestas: [
          {
            pino: 'Loading...',
            sponsor: {
              name: 'Loading...',
            },
          },
        ],
      },
      redirect: false,
    };
  }

  componentDidMount() {
    backend.getTemas().then((temas) => {
      this.setState(
        { tema: temas[0] },
      );
    });
  }

  static canHandleView = (view) => view === 'Tema Actual'

  handleCerrarReunion = () => backend.cerrarReunion().then(() => this.setState({ redirect: true }));

  handleEmpezarTema = () => { };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema autor={this.state.tema.autor} duracion={this.state.tema.duracion} tipo={this.state.tema.tipo} />
        <VistaDelMedioContainer>
          {(new HandlerTipoTema()).handleTipoTema(this.state.tema)}
          <Botonera>
            <Button onClick={this.handleEmpezarTema}>Empezar Tema</Button>
            <Button onClick={this.handleCerrarReunion}>Cerrar Reunión</Button>
          </Botonera>
        </VistaDelMedioContainer>
      </TemaActualContainer>
    );
  }
}

export default TemaActual;
