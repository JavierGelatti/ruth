import React from 'react';
import { SeleccionImagen, SeleccionContainer, TitulosSidebar } from './Sidebar.styled';

class Presentacion extends React.Component {
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
          <SeleccionImagen src="./presentacion.svg" alt="Presentacion"/>
          <TitulosSidebar>Presentación</TitulosSidebar>
        </SeleccionContainer>
    );
  }
}

export default Presentacion;
