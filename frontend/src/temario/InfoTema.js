import React from 'react';
import { InfoTemaContainer } from './InfoTema.styled';
import InfoItem from './InfoItem';

class InfoTema extends React.Component {
  render() {
    return (
      <InfoTemaContainer>
        <InfoItem src="./usuarie.svg" altText="Usuarie" descripcion={this.props.autor}/>
        <InfoItem src="./pino.png" altText="Pino" descripcion={this.props.duracion}/>
        <InfoItem src="./tema-obligatorio.svg" altText="Obligatorio" descripcion={this.props.tipo}/>
      </InfoTemaContainer>
    );
  }
}

export default InfoTema;
