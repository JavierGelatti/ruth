import React from 'react';
import {
  DescripcionTemaContainer, Titulo, Descripcion, ListaPinosPropuestos,
} from './DescripcionTema.styled';

class DescripcionPropuestaPinos extends React.Component {
  render() {
    return (
            <DescripcionTemaContainer>
                <Titulo>{this.props.tema.titulo}</Titulo>
                <Descripcion>
                    <ListaPinosPropuestos>
                        {this.props.tema.propuestas.map((propuesta, index) => <li key={`propuesta-${index}`}><b>Pino propuesto:</b> {propuesta.pino}, <b>Sponsor de pino:</b> {propuesta.sponsor.name}</li>)}
                    </ListaPinosPropuestos>
                </Descripcion>
            </DescripcionTemaContainer>
    );
  }
}

export default DescripcionPropuestaPinos;
