import React from 'react';
import { DescripcionTemaContainer, Titulo, Descripcion } from './DescripcionTema.styled';

class DescripcionPropuestaPinos extends React.Component {
  render() {
    return (
            <DescripcionTemaContainer>
                <Titulo>{this.props.tema.titulo}</Titulo>
                <Descripcion>
                    <ul>
                        {this.props.tema.propuestas.map((propuesta, index) => <li key={`propuesta-${index}`}><b>Pino propuesto:</b> {propuesta.pino}, <b>Sponsor de pino:</b> {propuesta.sponsor.name}</li>)}
                    </ul>
                </Descripcion>
            </DescripcionTemaContainer>
    );
  }
}

export default DescripcionPropuestaPinos;
