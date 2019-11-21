import React from 'react';
import { DescripcionTemaContainer } from './DescripcionTema.styled';

class DescripcionTema extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <DescripcionTemaContainer>
          <h1>{this.props.titulo}</h1>
          <p>{this.props.descripcion}</p>
      </DescripcionTemaContainer>
    );
  }
}

export default DescripcionTema;
