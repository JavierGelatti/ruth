import React from 'react';
import { InfoTemaContainer } from './InfoTema.styled';
import InfoItem from './InfoItem';

class InfoTema extends React.Component {
  imagenTipoDuracion = (tipoDuracion) => {
    switch (tipoDuracion) {
      case 'CORTO':
        return './tema-corto.svg';
      case 'MEDIO':
        return './tema-mediano.svg';
      case 'LARGO':
        return './tema-largo.svg';
      default:
        return null;
    }
  }

  imagenObligatoriedad = (obligatoriedad) => {
    switch (obligatoriedad) {
      case 'OBLIGATORIO':
        return './tema-obligatorio.svg';
      case 'NO_OBLIGATORIO':
        return './tema-no-obligatorio.svg';
      default:
        return null;
    }
  }

  render() {
    const {
      autor, duracion, obligatoriedad, cantidadDeMinutosDelTema,
    } = this.props.tema;
    return (
      <InfoTemaContainer>
        <InfoItem src="./usuarie.png" altText="Usuarie" descripcion={autor}/>
        <InfoItem src={this.imagenTipoDuracion(duracion)} altText="Pino" descripcion={`${cantidadDeMinutosDelTema} min.`}/>
        <InfoItem src={this.imagenObligatoriedad(obligatoriedad)} altText="Obligatorio" descripcion={diccObligatoriedad[obligatoriedad]}/>
      </InfoTemaContainer>
    );
  }
}

const diccObligatoriedad = {
  OBLIGATORIO: 'Obligatorio',
  NO_OBLIGATORIO: 'No obligatorio',
};

export default InfoTema;
