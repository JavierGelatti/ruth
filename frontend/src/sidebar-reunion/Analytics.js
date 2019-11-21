import React from 'react';
import { SeleccionImagen, SeleccionContainer, TitulosSidebar } from './Sidebar.styled';

class Analytics extends React.Component {
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
          <SeleccionImagen src="./analytics.svg" alt="Analytics"/>
          <TitulosSidebar>Analytics</TitulosSidebar>
        </SeleccionContainer>
    );
  }
}

export default Analytics;
