import React from 'react';
import { InfoTemaContainer } from './InfoTema.styled';
import InfoItem from './InfoItem';

class InfoTema extends React.Component {
  render() {
    return (
      <InfoTemaContainer>
        <InfoItem src="./usuarie.png" altText="Usuarie" descripcion={this.props.autor} position="20px 20px" size="80%"/>
        <InfoItem src="./tema-corto.svg" altText="Pino" descripcion={`${this.props.duracion} min.`} position="8px" size="90%"/>
        <InfoItem src="./tema-no-obligatorio.svg" altText="Obligatorio" descripcion={obligatoriedad[this.props.obligatoriedad]} position="35px" size="45%"/>
      </InfoTemaContainer>
    );
  }
}

const obligatoriedad = {
  OBLIGATORIO: 'Obligatorio',
  NO_OBLIGATORIO: 'No obligatorio',
};

export default InfoTema;
