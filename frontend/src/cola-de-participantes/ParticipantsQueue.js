import React from 'react';
import { QueueContainer } from './ParticipantsQueue.styled';
import ParticipantsCard from './ParticipantsCard';

const queuedLeftCardsStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  justifyContent: 'center',
  paddingTop: '1rem',
  alignItems: 'center',
};

const queuedRightCardsStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  justifyContent: 'center',
  paddingTop: '1rem',
  alignItems: 'center',
  opacity: '0.5',
};

const queuedCardsLeftContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRight: '1px solid silver',
  paddingRight: '1rem',
  justifyContent: 'flex-end',
  width: '100%',
};

const queuedCardsRightContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderLeft: '1px solid silver',
  paddingLeft: '1rem',
  width: '100%',

};

class ParticipantsQueue extends React.Component {
    getQueuedParticipants = () => this.props.participants.filter((participant) => participant.secondsElapsed === 0);

    getParticipantsThatAlreadyTalked = () => this.props.participants.filter((participant) => participant.secondsElapsed !== 0 && !participant.isTalking);

    getTalkingParticipant = () => this.props.participants.find((participant) => participant.isTalking);

    render() {
      return (
          <QueueContainer>
            <div style={queuedLeftCardsStyle}>
              <div style={queuedCardsLeftContainerStyle}>
                { this.getQueuedParticipants().map((participant, index) => <ParticipantsCard participant={participant} key={index}/>)}
              </div>
            </div>
            <div>
              <ParticipantsCard participant={this.getTalkingParticipant()}/>
            </div>
            <div style={queuedRightCardsStyle}>
              <div style={queuedCardsRightContainerStyle}>
                { this.getParticipantsThatAlreadyTalked().map((participant, index) => <ParticipantsCard participant={participant} key={index}/>)}
              </div>
            </div>
          </QueueContainer>
      );
    }
}

export default ParticipantsQueue;
