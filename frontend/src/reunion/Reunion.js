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
      estadoDeTemas: 'Cargando',
      temas: [],
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
    return backend.getTemas().then((temas) => {
      this.setState({
        temas: temas.sort((tema1, tema2) => ((tema1.id > tema2.id) ? 1 : -1)),
        estadoDeTemas: 'Cargado',
      });
    })
      .catch(() => this.setState({ estadoDeTemas: 'Error' }));
  }

  temaSeleccionado() {
    return this.state.temas[this.temaATratar()];
  }

  ultimoTema() {
    return this.temaATratar() === this.state.temas.length - 1;
  }

  temaATratar() {
    const { temas, estadoDeTemas } = this.state;
    if (estadoDeTemas === 'Cargado') {
      const temaSinFinalizar = [...Array(temas.length).keys()].find((indexTema) => temas[indexTema].fin === null);
      const ultimoTema = temas.length - 1;
      if (temaSinFinalizar === undefined) {
        return ultimoTema;
      }
      return temaSinFinalizar;
    }
    return null;
  }

  render() {
    const VistaSeleccionada = this.obtenerVista();
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    if (this.state.estadoDeTemas === 'Cargando') return null;
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
