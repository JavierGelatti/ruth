import React from 'react';
import { toast } from 'react-toastify';
import backend from '../api/backend';
import VistaTemas from './VistaTemas';

class TemasHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temas: [],
      estadoDeTemas: 'cargando',
    };
  }

  componentDidMount() {
    this.obtenerTemas();
  }

  obtenerTemas() {
    return backend.getTemas().then((temas) => {
      this.setState({
        temas: temas.sort((tema1, tema2) => tema1.prioridad - tema2.prioridad),
        estadoDeTemas: 'ok',
      });
    })
      .catch(() => this.setState({ estadoDeTemas: 'error' }));
  }

  requestActualizarTema = (datosTema) => {
    backend.actualizarTema(datosTema)
      .then(() => this.obtenerTemas())
      .catch(() => {
        toast.error('No se pudo actualizar el tema');
      });
  }

  render() {
    // TO DO: Ver qué se debería mostrar en caso de carga o error
    switch (this.state.estadoDeTemas) {
      case ('cargando'): return <h1>Loading...</h1>;
      case ('error'): return <h1>Error!</h1>;
      case ('ok'): return (
          <VistaTemas temas={this.state.temas}
          actualizarTema={this.requestActualizarTema}/>
      );
      default: return null;
    }
  }
}

export default TemasHandler;
