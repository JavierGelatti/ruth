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
    this.obtenerTemas();
  }

  vistas = [TemaActual, Presentacion, Analytics]

  obtenerVista = () => this.vistas.find((vista) => vista.canHandleView(this.state.selectedElement))

  handleSelection = (name) => {
    this.setState({
      selectedElement: name,
    });
  }

  empezarTema = () => {
    if (this.temaSeleccionado().inicio !== null) {
      return;
    }
    this.requestActualizarTema({ id: this.temaSeleccionado().id, inicio: Date.now(), fin: null });
  }

  terminarTema = () => {
    if (this.temaSeleccionado().inicio === null) {
      alert('El tema no se encuentra iniciado.');
    }
    this.requestActualizarTema({ id: this.temaSeleccionado().id, inicio: this.temaSeleccionado().inicio, fin: Date.now() });
    if (this.ultimoTema()) {
      alert('Es el último tema');
    } else {
      this.setState({
        temaSeleccionado: this.state.temaSeleccionado + 1,
      });
    }
  }

  requestActualizarTema = (datosTema) => {
    backend.actualizarTema(datosTema)
      .then(() => this.obtenerTemas())
      .catch(() => {
        alert('No se pudo actualizar el tema :(');
      });
  }

  obtenerTemas() {
    backend.getTemas().then((temas) => {
      this.setState({ temas: temas.sort((tema1, tema2) => ((tema1.id > tema2.id) ? 1 : -1)) });
    }).catch(() => this.setState({ temas: 'Error al actualizar temas' }));
  }

  temaSeleccionado() {
    return this.state.temas[this.state.temaSeleccionado];
  }

  ultimoTema() {
    return this.state.temaSeleccionado === this.state.temas.length - 1;
  }

  temaATratar() {
    const { temas } = this.state;
    if (temas !== 'Cargando' || temas !== 'Error') {
      return temas.find((tema) => tema.fin === null);
    }
    return null;
  }

  render() {
    const VistaSeleccionada = this.obtenerVista();
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    if (this.state.temas === 'Cargando') return null;
    return (
      <ReunionContainer>
        <VistaSeleccionada tema={this.temaSeleccionado()}
                            terminarTema={this.terminarTema}
                            empezarTema={this.empezarTema}/>
        <Sidebar handleSelection={this.handleSelection}
                  selectedElement={this.state.selectedElement}/>
      </ReunionContainer>);
  }
}

export default Reunion;
