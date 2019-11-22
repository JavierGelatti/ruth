import React from 'react';
import { Redirect } from 'react-router-dom';
import { ReunionContainer } from './Reunion.styled';
import InfoTema from '../temario/InfoTema';
import SidebarVistas from '../temario/SidebarVistas';
import backend from '../api/backend';
import { Button } from '../components/Button.styled';
import HandlerTipoTema from '../temario/handler-temas/HandlerTipoTema';

class Reunion extends React.Component {
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
      redirect: false,
    };
  }

  handleCerrarReunion = () => backend.cerrarReunion().then(() => this.setState({ redirect: true }));

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <ReunionContainer>
        <InfoTema autor={this.state.autor} duracion={this.state.duracion} tipo={this.state.tipo}/>
        {(new HandlerTipoTema()).handleTipoTema(this.state)}
        {/* <DescripcionTema tema={this.state}/> */}
        <SidebarVistas/>
        <Button onClick={this.handleCerrarReunion}> Cerrar reunion </Button>
      </ReunionContainer>);
  }
}

export default Reunion;
