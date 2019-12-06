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
      estadoDeTemas: 'cargando',
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
    this.requestActualizarTema({ id: this.temaSeleccionado().id, inicio: this.temaSeleccionado().inicio, fin: Date.now() });
    if (this.ultimoTema()) {
      alert('Reunión finalizada');
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
        estadoDeTemas: 'ok',
      });
    })
      .catch(() => this.setState({ estadoDeTemas: 'error' }));
  }

  temaSeleccionado() {
    return this.state.temas[this.indiceTemaATratar()];
  }

  ultimoTema() {
    return this.indiceTemaATratar() === this.state.temas.length - 1;
  }

  indiceTemaATratar() {
    const { temas, estadoDeTemas } = this.state;
    if (estadoDeTemas === 'ok') {
      const temaSinFinalizar = [...Array(temas.length).keys()].find((indexTema) => temas[indexTema].fin === null);
      const ultimoTema = temas.length - 1;
      if (temaSinFinalizar === undefined) {
        return ultimoTema;
      }
      return temaSinFinalizar;
    }
    return null;
  }

  segundosRestantes = () => {
    const { inicio, fin, cantidadDeMinutosDelTema } = this.temaSeleccionado();
    if (inicio === null) {
      return cantidadDeMinutosDelTema * 60;
    }
    const tiempo = fin === null ? Date.now() : Date.parse(fin);
    return Math.round(cantidadDeMinutosDelTema * 60
        - (tiempo - Date.parse(inicio)) / 1000);
  }

  temaActivo = () => {
    const { inicio, fin } = this.temaSeleccionado();
    return inicio !== null && fin === null;
  }

  render() {
    const VistaSeleccionada = this.obtenerVista();
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    switch (this.state.estadoDeTemas) {
      case ('cargando'): return null;
      case ('error'): return null;
      case ('ok'): return (
        <ReunionContainer>
          <VistaSeleccionada tema={this.temaSeleccionado()}
            terminarTema={this.terminarTema}
            empezarTema={this.empezarTema}
            segundosRestantes={this.segundosRestantes()}
            temaActivo= {this.temaActivo()}/>
          <Sidebar handleSelection={this.handleSelection}
            selectedElement={this.state.selectedElement}
            link={this.temaSeleccionado().linkDePresentacion} />
        </ReunionContainer>
      );
      default: return null;
    }
  }
}

export default Reunion;
