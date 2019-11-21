import React from 'react';
import { SidebarContainer, Titulo } from './Sidebar.styled';
import TemaActual from './TemaActual';
import Presentacion from './Presentacion';
import Analytics from './Analytics';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: true,
      presentacion: false,
      analytics: false,
    };
  }

  handleTemaActual = () => {
    alert('Pruebita del click');
  }

  render() {
    return (
        <SidebarContainer>
          <div onClick={this.handleTemaActual}> <TemaActual/> </div>
          <div onClick={this.handleTemaActual}> <Presentacion/> </div>
          <div onClick={this.handleTemaActual}> <Analytics/> </div>
        </SidebarContainer>
    );
  }
}

export default Sidebar;
