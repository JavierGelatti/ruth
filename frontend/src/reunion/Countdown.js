import React from 'react';
import { CountdownContainer } from './Countdown.styled';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inicio: this.props.inicio,
      segundos: this.segundosRestantes(),
      duracion: this.props.duracion * 60,
    };
  }

  segundosRestantes() {
    return this.props.inicio === null ? this.props.duracion * 60
      : Math.round(this.props.duracion * 60 - (Date.now() - this.props.inicio) / 1000);
  }

  componentDidMount() {
    if (this.state.inicio === null) {
      return;
    }
    this.runCountdown();
  }

  componentDidUpdate(prevProps) {
    if (this.props.inicio !== prevProps.inicio) {
      this.setState({
        inicio: this.props.inicio,
        segundos: this.segundosRestantes(),
        duracion: this.props.duracion * 60,
      });
      if (this.props.inicio !== null) {
        this.runCountdown();
      } else {
        this.parar();
      }
    }
  }

  runCountdown() {
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

  parar() {
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
