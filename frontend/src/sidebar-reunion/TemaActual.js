import React from 'react';
import { SeleccionImagen, SeleccionContainer, TitulosSidebar } from './Sidebar.styled';

class TemaActual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: true,
      presentacion: false,
      analytics: false,
    };
  }

  render() {
    return (
        <SeleccionContainer>
          <SeleccionImagen src="./tema-actual.svg" alt="TemaActual"/>
          <TitulosSidebar>Tema Actual</TitulosSidebar>
        </SeleccionContainer>
    );
  }
}

export default TemaActual;
