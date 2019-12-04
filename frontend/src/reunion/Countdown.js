import React from 'react';
import { CountdownContainer } from './Countdown.styled';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activo: this.props.activo,
      segundos: this.props.segundos,
    };
  }

  componentDidMount = () => {
    if (this.state.activo) {
      this.runCountdown();
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.activo !== prevProps.activo) {
      this.setState({
        activo: this.props.activo,
        segundos: this.props.segundos,
      });
      this.props.activo ? this.runCountdown() : this.parar();
    }
  }

  runCountdown = () => {
    this.myInterval = setInterval(() => {
      const { segundos } = this.state;
      if (segundos > 0) {
        this.setState({
          segundos: segundos - 1,
        });
      } else {
        this.parar();
      }
    }, 1000);
  }

  parar = () => {
    clearInterval(this.myInterval);
  }

  render() {
    const segundos = this.state.segundos % 60;
    const minutos = Math.floor(this.state.segundos / 60);

    return (
            <CountdownContainer>
                { this.state.segundos === 0
                  ? 'Tiempo Acabado'
                  : <span>{minutos}:{segundos < 10 ? `0${segundos}` : segundos}</span>
                }
            </CountdownContainer>
    );
  }
}
