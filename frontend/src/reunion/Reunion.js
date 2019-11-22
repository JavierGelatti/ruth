import React from 'react';
import { Redirect } from 'react-router-dom';
import { ReunionContainer } from './Reunion.styled';
import InfoTema from '../temario/InfoTema';
import DescripcionTema from '../temario/DescripcionTema';
import SidebarVistas from '../temario/SidebarVistas';
import backend from '../api/backend';
import { Button } from '../components/Button.styled';

class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: 'Caro',
      duracion: '60 mins',
      tipo: 'Obligatorio',
      titulo: 'Título Tema',
      descripcion: 'Descripción Tema',
      redirect: false,
    };
  }

  handleCerrarReunion = () => backend.cerrarReunion().then(() => this.setState({ redirect: true }));

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <ReunionContainer>
        <InfoTema autor={this.state.autor} duracion={this.state.duracion} tipo={this.state.tipo}/>
        <DescripcionTema titulo={this.state.titulo} descripcion={this.state.descripcion}/>
        <SidebarVistas/>
        <Button onClick={this.handleCerrarReunion}> Cerrar reunion </Button>
      </ReunionContainer>);
  }
}

export default Reunion;
