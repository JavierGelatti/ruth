import React from 'react';

const timerStyle = {
  fontColor: 'grey',
};

class ParticipantCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: this.props.seconds };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        secondsElapsed: this.props.seconds
      });
    }
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.runWatch();
    }
  }

    getMinutes = () => Math.floor(this.state.secondsElapsed / 60);

    getSeconds = () => (`0${this.state.secondsElapsed % 60}`).slice(-2);

    runWatch = () => {
      this.incrementer = setInterval(() => { this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }); }, 1000);
    };

    stopWatch = () => {
      clearInterval(this.incrementer);
    };

    render() {
      if(this.props.seconds === null){
        return (<></>);
      }
      return (
          <div>
            <span style={timerStyle}>
              {this.getMinutes()} : {this.getSeconds()}
            </span>
          </div>
      );
    }
}

export default ParticipantCounter;
