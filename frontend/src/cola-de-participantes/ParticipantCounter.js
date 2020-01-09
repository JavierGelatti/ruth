import React from 'react';
import Clock from '../clock/Clock';
import { ClockContainer } from '../clock/Clock.styled';

class ParticipantCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: this.props.seconds };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        secondsElapsed: this.props.seconds,
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
    if (this.props.seconds === null) {
      return (<></>);
    }
    return (
        <ClockContainer>
          <Clock seconds={this.state.secondsElapsed}/>
        </ClockContainer>
    );
  }
}

export default ParticipantCounter;
