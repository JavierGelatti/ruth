import React from 'react';
import { faChartBar, faBroadcastTower, faComment } from '@fortawesome/free-solid-svg-icons';


import SidebarElement from './SidebarElement';
import { SidebarContainer, Titulo } from './Sidebar.styled';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: 0,
    };
  }

  handleSelection = (itemId) => {
    this.setState({
      selectedElement: itemId,
    });
  }

  render() {
    return (
        <SidebarContainer>
          <div onClick={() => this.handleSelection(0)}> <SidebarElement icon={faBroadcastTower} title={'Tema Actual'} isActive={this.state.selectedElement === 0}/> </div>
          <div onClick={() => this.handleSelection(1)}> <SidebarElement icon={faComment} title={'Presentación'} isActive={this.state.selectedElement === 1}/> </div>
          <div onClick={() => this.handleSelection(2)}> <SidebarElement icon={faChartBar} title={'Analytics'} isActive={this.state.selectedElement === 2}/> </div>
        </SidebarContainer>
    );
  }
}

export default Sidebar;
