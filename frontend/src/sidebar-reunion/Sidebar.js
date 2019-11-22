import React from 'react';
import { faChartBar, faBroadcastTower, faComment } from '@fortawesome/free-solid-svg-icons';


import SidebarElement from './SidebarElement';
import { SidebarContainer, Titulo } from './Sidebar.styled';

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

  handleSelection = (name) => {
    this.setState({
      selectedElement: name,
    });
  }

  render() {
    return (
        <SidebarContainer>
          {this.menu.map((seccion) => <div onClick={() => this.handleSelection(seccion.title)}> <SidebarElement icon={seccion.icon} title={seccion.title} isActive={this.state.selectedElement === seccion.title}/> </div>)}
        </SidebarContainer>
    );
  }
}

export default Sidebar;
