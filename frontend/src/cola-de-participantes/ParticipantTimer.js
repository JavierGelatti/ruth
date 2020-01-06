import React from 'react';

const timerStyle = {
  fontColor: 'grey',
};

class ParticipantTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: this.props.participant.secondsElapsed };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        secondsElapsed: this.props.participant.secondsElapsed
      });
    }
  }
  
  componentDidMount() {
    if (this.props.participant.isTalking) {
      this.runWatch();
    }
  }

    getMinutes = () => Math.floor(this.state.secondsElapsed / 60);

    getSeconds = () => (`0${this.state.secondsElapsed % 60}`).slice(-2);

    runWatch = () => {
      const self = this;
      this.incrementer = setInterval(() => { self.setState({ secondsElapsed: self.state.secondsElapsed + 1 }); }, 1000);
    };

    stopWatch = () => {
      clearInterval(this.incrementer);
    };

    render() {
      return (
          <div>
            <span style={timerStyle}>
              {this.getMinutes()} : {this.getSeconds()}
            </span>
          </div>
      );
    }
}

export default ParticipantTimer;
