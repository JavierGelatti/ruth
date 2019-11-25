import React from 'react';
import Temario from '../temario/Temario';
import Sidebar from '../sidebar-reunion/Sidebar';
import { ReunionContainer } from './Reunion.styled';
import VistaActual from './VistaActual';

class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      selectedElement: 'Tema Actual',
    };
  }

  handleSelection = (name) => {
    this.setState({
      selectedElement: name,
    });
  }

  render() {
    return (
      <ReunionContainer>
        <Temario/>
        <VistaActual vista={this.state.selectedElement}/>
        <Sidebar handleSelection={this.handleSelection} selectedElement={this.state.selectedElement}/>
      </ReunionContainer>);
  }
}

export default Reunion;
