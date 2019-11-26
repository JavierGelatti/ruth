import React from 'react';
import { Redirect } from 'react-router-dom';
import backend from '../api/backend';
import { Button } from '../components/Button.styled';
import TemaActual from '../tipos-vista-principal/TemaActual';
import Presentacion from '../tipos-vista-principal/Presentacion';
import Analytics from '../tipos-vista-principal/Analytics';
import Countdown from './Countdown';

class VistaActual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      selectedElement: 'Tema Actual',
      countdownHabilitado: false,
    };
  }

    vistas = [TemaActual, Presentacion, Analytics]

    handleCerrarReunion = () => backend.cerrarReunion()
      .then(() => this.setState({ redirect: true }));

    obtenerVista = () => this.vistas.find((vista) => vista.canHandleView(this.props.vista))

    handleEmpezarTema = () => {
      this.setState({
        countdownHabilitado: true,
      });
    }

    mostrarCountdown = () => {
      if (this.state.countdownHabilitado) {
        return <Countdown/>;
      }
      return null;
    }

    render() {
      if (this.state.redirect) return <Redirect to="/" />;

      return (
           <div>
              {this.mostrarCountdown()}
              <Button onClick={this.handleEmpezarTema}>Empezar Tema</Button>
              <Button onClick={this.handleCerrarReunion}>Cerrar Reunión</Button>
              {this.obtenerVista().render()}
           </div>
      );
    }
}

export default VistaActual;
