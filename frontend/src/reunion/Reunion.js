import React from 'react';
import { toast } from 'react-toastify';
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
      return toast.error('No se puede iniciar un tema que ya fue iniciado');
    }
    if (this.state.indiceTemaAMostrar !== this.indiceTemaATratar()) {
      return toast.error('Existe otro tema para tratar');
    }
    return this.requestActualizarTema({
      id: this.temaSeleccionado().id,
      inicio: Date.now(),
      fin: null,
    });
  }

  terminarTema = () => {
    this.requestActualizarTema({
      id: this.temaSeleccionado().id,
      inicio: this.temaSeleccionado().inicio,
      fin: Date.now(),
    });
    toast.success('Tema finalizado');
  }

  requestActualizarTema = (datosTema) => {
    backend.actualizarTema(datosTema)
      .then(() => this.obtenerTemas())
      .catch(() => {
        toast.error('No se pudo actualizar el tema');
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
    // TO DO: Nunca debería ser null pero al inicio es null...
    if (this.state.indiceTemaAMostrar === null) {
      return this.state.temas[this.indiceTemaATratar()];
    }
    return this.state.temas[this.state.indiceTemaAMostrar];
  }

  seleccionarTema = (temaSeleccionado) => {
    const index = this.state.temas.findIndex((tema) => tema === temaSeleccionado);
    if (index === this.state.indiceTemaAMostrar) return;
    this.setState({ indiceTemaAMostrar: index });
  }

  avanzarTema = () => {
    if (this.state.indiceTemaAMostrar === this.state.temas.length - 1) return;
    this.setState({ indiceTemaAMostrar: this.state.indiceTemaAMostrar + 1 });
  }

  retrocederTema = () => {
    if (this.state.indiceTemaAMostrar === 0) return;
    this.setState({ indiceTemaAMostrar: this.state.indiceTemaAMostrar - 1 });
  }

  ultimoTema = () => this.indiceTemaATratar() === this.state.temas.length - 1

  indiceTemaATratar() {
    const { temas, estadoDeTemas } = this.state;
    if (estadoDeTemas === 'ok') {
      const indiceTemaSinFinalizar = temas.findIndex((tema) => tema.fin === null);
      const ultimoTema = temas.length - 1;
      return indiceTemaSinFinalizar >= 0 ? indiceTemaSinFinalizar : ultimoTema;
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
            <Temario temas={this.state.temas}
              seleccionarTema={this.seleccionarTema} />
            <VistaSeleccionada tema={this.temaSeleccionado()}
              terminarTema={this.terminarTema}
              empezarTema={this.empezarTema}
              segundosRestantes={this.segundosRestantes()}
              temaActivo= {this.temaActivo()}
              avanzarTema= {this.avanzarTema}
              retrocederTema= {this.retrocederTema} />
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
