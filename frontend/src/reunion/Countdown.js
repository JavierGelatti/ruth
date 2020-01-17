import React from 'react';
import { CountdownContainer } from './Countdown.styled';
import Clock from '../clock/Clock';

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
    if (this.props.activo !== prevProps.activo || this.props.segundos !== prevProps.segundos) {
      this.setState({
        activo: this.props.activo,
        segundos: this.props.segundos,
      });
      if (prevProps.activo && this.props.activo) return;
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
    return (
            <CountdownContainer>
                <Clock seconds={this.state.segundos}/>
            </CountdownContainer>
    );
  }
}
