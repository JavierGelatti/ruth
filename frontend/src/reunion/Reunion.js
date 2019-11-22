import React from 'react';
import { Redirect } from 'react-router-dom';
import { ReunionContainer } from './Reunion.styled';
import InfoTema from '../temario/InfoTema';
import DescripcionTema from '../temario/DescripcionTema';
import SideBarIzquierda from '../temario/SideBarIzquierda';

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

  render() {
    return (
      <ReunionContainer>
        <InfoTema autor={this.state.autor} duracion={this.state.duracion} tipo={this.state.tipo}/>
        <DescripcionTema titulo={this.state.titulo} descripcion={this.state.descripcion}/>
        <SideBarIzquierda/>
      </ReunionContainer>);
  }
}

export default Reunion;
