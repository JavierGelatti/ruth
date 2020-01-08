import React from 'react';
import Clock from '../clock/Clock'

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
        <div style={timerStyle}>
          <Clock seconds={this.state.secondsElapsed}/>
        </div>
    );
  }
  
}

export default ParticipantCounter;
