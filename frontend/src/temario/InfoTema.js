import React from 'react';
import { InfoTemaContainer } from './InfoTema.styled';
import InfoItem from './InfoItem';

class InfoTema extends React.Component {
  render() {
    return (
      <InfoTemaContainer>
        <InfoItem src="./usuarie.svg" altText="Usuarie" descripcion={this.props.autor} position="20px 20px" size="80%"/>
        <InfoItem src="./pino.png" altText="Pino" descripcion={duracion[this.props.duracion]} position="8px" size="90%"/>
        <InfoItem src="./tema-obligatorio.svg" altText="Obligatorio" descripcion={obligatoriedad[this.props.obligatoriedad]} position="35px" size="45%"/>
      </InfoTemaContainer>
    );
  }
}

const duracion = {
  CORTO: '30 min.',
  MEDIO: '60 min.',
  LARGO: '90 min.',
};

const obligatoriedad = {
  OBLIGATORIO: 'Obligatorio',
  NO_OBLIGATORIO: 'No obligatorio',
};

export default InfoTema;
