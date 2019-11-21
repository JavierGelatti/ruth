import React from 'react';
import { SidebarContainer, Titulo } from './Sidebar.styled';

class Sidebar extends React.Component {
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
        <SidebarContainer>
            <Titulo> Hola! </Titulo>
        </SidebarContainer>
    );
  }
}

export default Sidebar;
