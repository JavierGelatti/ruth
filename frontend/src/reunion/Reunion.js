import React from 'react';
import Sidebar from '../sidebar-reunion/Sidebar';
import { ReunionContainer } from './Reunion.styled';
import TemaActual from '../tipos-vista-principal/TemaActual';
import Presentacion from '../tipos-vista-principal/Presentacion';
import Analytics from '../tipos-vista-principal/Analytics';
import Temario from '../temario/Temario';


class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: 'Tema Actual',
      temas: [{ titulo: 'Action items roots anterior' }, { titulo: 'Tema 1' }, { titulo: 'Un tema obligatorio' }],
    };
  }

  vistas = [TemaActual, Presentacion, Analytics]

  obtenerVista = () => this.vistas.find((vista) => vista.canHandleView(this.state.selectedElement))

  handleSelection = (name) => {
    this.setState({
      selectedElement: name,
    });
  }

  render() {
    const VistaSeleccionada = this.obtenerVista();
    return (
      <ReunionContainer>
        <Temario temas = {this.state.temas}/>
        <VistaSeleccionada/>
        <Sidebar handleSelection={this.handleSelection}
                  selectedElement={this.state.selectedElement}/>
      </ReunionContainer>);
  }
}

export default Reunion;
