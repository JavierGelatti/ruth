import React from 'react';
import { InfoTemaContainer } from './InfoTema.styled';
import InfoItem from './InfoItem';

class InfoTema extends React.Component {
  render() {
    return (
      <InfoTemaContainer>
        <InfoItem src="./usuarie.svg" altText="Usuarie" descripcion={this.props.autor} position="20px 20px" size="80%"/>
        <InfoItem src={diccDuracionTema[this.props.duracion]} altText="Pino" descripcion={`${this.props.duracion} min.`} position="8px" size="90%"/>
        <InfoItem src={diccObligatoriedad[this.props.obligatoriedad]} descripcion={obligatoriedad[this.props.obligatoriedad]} position="35px" size="45%"/>
      </InfoTemaContainer>
    );
  }
}

const obligatoriedad = {
  OBLIGATORIO: 'Obligatorio',
  NO_OBLIGATORIO: 'No obligatorio',
};

const diccDuracionTema = {
  30: './tema-corto.svg',
  60: './tema-mediano.svg',
  90: './tema-largo.svg',
};

const diccObligatoriedad = {
  OBLIGATORIO: './tema-obligatorio.svg',
  NO_OBLIGATORIO: './tema-no-obligatorio.svg',
};

export default InfoTema;
