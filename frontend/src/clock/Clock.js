import React from 'react';

class Clock extends React.Component {
  getMinutes = () => {
    let seconds = this.props.seconds
    if(seconds >= 0){
      return Math.floor(seconds / 60);
    } else {
      return Math.ceil(seconds / 60);
    }
  }

  getSeconds = () => {
    return (`0${Math.abs(this.props.seconds) % 60}`).slice(-2);
  }

  render() {
    return (
        <span>
          {this.getMinutes()}:{this.getSeconds()}
        </span>
    );
  }
}

export default Clock;
