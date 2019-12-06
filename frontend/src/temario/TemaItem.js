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
      return this.tipoDuracion(tema.duracion);
    default:
      return null;
  }
}

tipoDuracion = (duracion) => {
  switch (duracion) {
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


render() {
  return (
        <TemaItemContainer onClick = {() => this.props.seleccionarTema(this.props.tema)}>
            <TituloTema>{this.props.tema.titulo}</TituloTema>
            <ImagenTemaContainer>
                <ImagenTema src={this.tipoImagen(this.props.tema)} />
            </ImagenTemaContainer>
        </TemaItemContainer>
  );
}
}

export default InfoTema;
