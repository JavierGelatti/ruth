import React from 'react';
import { ToastsStore } from 'react-toasts';
import Sidebar from '../sidebar-reunion/Sidebar';
import { ReunionContainer } from './Reunion.styled';
import TemaActual from '../tipos-vista-principal/TemaActual';
import Presentacion from '../tipos-vista-principal/Presentacion';
import Analytics from '../tipos-vista-principal/Analytics';
import Temario from '../temario/Temario';
import backend from '../api/backend';

class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: 'Tema Actual',
      temas: [],
      estadoDeTemas: 'cargando',
      indiceTemaAMostrar: null,
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
      return ToastsStore.error('No se puede iniciar un tema que ya fue iniciado');
    }
    if (this.state.indiceTemaAMostrar !== this.indiceTemaATratar()) {
      return ToastsStore.error('Existe otro tema para tratar');
    }
    return this.requestActualizarTema({ id: this.temaSeleccionado().id, inicio: Date.now(), fin: null });
  }

  terminarTema = () => {
    this.requestActualizarTema({
      id: this.temaSeleccionado().id,
      inicio: this.temaSeleccionado().inicio,
      fin: Date.now(),
    });
    ToastsStore.success('Tema finalizado');
  }

  requestActualizarTema = (datosTema) => {
    backend.actualizarTema(datosTema)
      .then(() => this.obtenerTemas())
      .catch(() => {
        ToastsStore.error('No se pudo actualizar el tema');
      });
  }

  obtenerTemas() {
    return backend.getTemas().then((temas) => {
      this.setState({
        temas: temas.sort((tema1, tema2) => tema1.prioridad - tema2.prioridad),
        estadoDeTemas: 'ok',
      });
    })
      .then(() => this.setState({ indiceTemaAMostrar: this.indiceTemaATratar() }))
      .catch(() => this.setState({ estadoDeTemas: 'error' }));
  }

  temaSeleccionado() {
    return this.state.temas[this.state.indiceTemaAMostrar || this.indiceTemaATratar()];
  }

  seleccionarTema = (index) => {
    this.setState({ indiceTemaAMostrar: index });
  }

  ultimoTema() {
    return this.indiceTemaATratar() === this.state.temas.length - 1;
  }

  indiceTemaATratar() {
    const { temas, estadoDeTemas } = this.state;
    if (estadoDeTemas === 'ok') {
      const temaSinFinalizar = [...Array(temas.length).keys()]
        .find((indexTema) => temas[indexTema].fin === null);
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
    switch (this.state.estadoDeTemas) {
      case ('cargando'): return null;
      case ('error'): return null;
      case ('ok'): return (
        <ReunionContainer>
          <Temario temas = {this.state.temas}
                    seleccionarTema = {this.seleccionarTema}/>
          <VistaSeleccionada tema={this.temaSeleccionado()}
            terminarTema={this.terminarTema}
            empezarTema={this.empezarTema} />
          <Sidebar handleSelection={this.handleSelection}
            selectedElement={this.state.selectedElement} />
        </ReunionContainer>
      );
      default: return null;
    }
  }
}

export default Reunion;
