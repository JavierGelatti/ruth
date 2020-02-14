import React from 'react';

class Clock extends React.Component {
  getMinutes = () => Math.floor(this.props.seconds / 60);

  getSeconds = () => (`0${this.props.seconds % 60}`).slice(-2);

  render() {
    if (this.props.seconds < 0) {
      return ('Tiempo Acabado');
    }
    return (
        <span>
          {this.getMinutes()}:{this.getSeconds()}
        </span>
    );
  }
}

export default Clock;
