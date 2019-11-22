import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SeleccionImagen, SeleccionContainer, TitulosSidebar } from './Sidebar.styled';

class SidebarElement extends React.Component {
  render() {
    return (
        <SeleccionContainer isActive={this.props.isActive}>
          <SeleccionImagen>
            <FontAwesomeIcon icon={this.props.icon} size="5x" />
          </SeleccionImagen>
          <TitulosSidebar>{this.props.title}</TitulosSidebar>
        </SeleccionContainer>
    );
  }
}

export default SidebarElement;
