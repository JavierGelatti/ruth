import React from 'react';
import { TemaActualContainer } from './TemaActual.styled';
import InfoTema from '../temario/InfoTema';
import HandlerTipoTema from '../temario/handler-temas/HandlerTipoTema';
import { Redirect } from 'react-router-dom';
import backend from '../api/backend';
import { Button } from '../components/Button.styled';

class TemaActual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: 'Joaco',
      duracion: '60 mins',
      tipo: 'proponerPinos',
      titulo: 'Título',
      propuestas: [
        {
          pino: 'Caro',
          sponsor: {
            name: 'Joaco',
          },
        },
      ],
      redirect:false,
    };
  }

  static canHandleView = (view) => view === 'Tema Actual'
  handleCerrarReunion = () => backend.cerrarReunion().then(() => this.setState({ redirect: true }));

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <TemaActualContainer>
        <InfoTema autor={this.state.autor} duracion={this.state.duracion} tipo={this.state.tipo} />
        {(new HandlerTipoTema()).handleTipoTema(this.state)}
        <Button onClick={this.handleCerrarReunion}>Cerrar Reunión</Button>
      </TemaActualContainer>
    );
  }
}

export default TemaActual;