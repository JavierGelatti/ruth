import React from 'react';
import Sidebar from '../sidebar-reunion/Sidebar';
import { ReunionContainer } from './Reunion.styled';
import TemaActual from '../tipos-vista-principal/TemaActual';
import Presentacion from '../tipos-vista-principal/Presentacion';
import Analytics from '../tipos-vista-principal/Analytics';
import backend from '../api/backend';


class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: 'Tema Actual',
      temas: 'Cargando',
      temaSeleccionado: 0,
    };
  }

  componentDidMount() {
    backend.getTemas().then((temas) => {
      this.setState({ temas });
    }).catch(() => this.setState({ temas: 'Error' }));
  }

  vistas = [TemaActual, Presentacion, Analytics]

  obtenerVista = () => this.vistas.find((vista) => vista.canHandleView(this.state.selectedElement))

  handleSelection = (name) => {
    this.setState({
      selectedElement: name,
    });
  }

  siguienteTema = () => {
    if (this.ultimoTema()) {
      alert('Es el último tema');
    } else {
      this.setState({
        temaSeleccionado: this.state.temaSeleccionado + 1,
      });
    }
  }

  ultimoTema() {
    return this.state.temaSeleccionado === this.state.temas.length - 1;
  }

  render() {
    const VistaSeleccionada = this.obtenerVista();
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    if (this.state.temas === 'Cargando') return null;
    return (
      <ReunionContainer>
        <VistaSeleccionada tema={this.state.temas[this.state.temaSeleccionado]}
                            avanzar={this.siguienteTema}/>
        <Sidebar handleSelection={this.handleSelection}
                  selectedElement={this.state.selectedElement}/>
      </ReunionContainer>);
  }
}

export default Reunion;
