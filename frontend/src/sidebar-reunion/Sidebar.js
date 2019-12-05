import React from 'react';
import { faChartBar, faBroadcastTower, faComment } from '@fortawesome/free-solid-svg-icons';


import SidebarElement from './SidebarElement';
import { SidebarContainer, ElementoContainer } from './Sidebar.styled';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: 'Tema Actual',
    };
  }

  menu = [{ icon: faBroadcastTower, title: 'Tema Actual' },
    { icon: faComment, title: 'Presentación' },
    { icon: faChartBar, title: 'Analytics' }];

  habilitarPresentacion = (titulo) => {
    if (titulo === 'Presentación') {
      return this.props.link !== null;
    }
    return true;
  }

  render() {
    return (
        <SidebarContainer>
          {this.menu.map((seccion) => <ElementoContainer habilitar={this.habilitarPresentacion(seccion.title)} onClick={() => this.props.handleSelection(seccion.title)}> <SidebarElement icon={seccion.icon} title={seccion.title} isActive={this.props.selectedElement === seccion.title}/> </ElementoContainer>)}
        </SidebarContainer>
    );
  }
}

export default Sidebar;
