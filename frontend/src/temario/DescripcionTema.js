import React from 'react';
import { DescripcionTemaContainer, Titulo, Descripcion } from './DescripcionTema.styled';

class DescripcionTema extends React.Component {
  render() {
    return (
      <DescripcionTemaContainer>
          <Titulo>{this.props.titulo}</Titulo>
          <Descripcion>{this.props.descripcion}</Descripcion>
      </DescripcionTemaContainer>
    );
  }
}

export default DescripcionTema;
