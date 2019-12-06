import React from 'react';
import {
  TemaItemContainer, TituloTema, ImagenTema, ImagenTemaContainer,
} from './TemaItem.styled';

class InfoTema extends React.Component {
tipoImagen = (tema) => {
  switch (tema.obligatoriedad) {
    case 'OBLIGATORIO':
      return './tema-obligatorio.svg';
    case 'NO_OBLIGATORIO':
      return duracion[tema.duracion];
    default:
      return null;
  }
}


render() {
  return (
        <TemaItemContainer onClick = {() => this.props.seleccionarTema(this.props.index)}>
            <TituloTema>{this.props.tema.titulo}</TituloTema>
            <ImagenTemaContainer>
                <ImagenTema src={this.tipoImagen(this.props.tema)} />
            </ImagenTemaContainer>
        </TemaItemContainer>
  );
}
}

const duracion = {
  CORTO: './tema-corto.svg',
  MEDIO: './tema-mediano.svg',
  LARGO: './tema-largo.svg',
};

export default InfoTema;
