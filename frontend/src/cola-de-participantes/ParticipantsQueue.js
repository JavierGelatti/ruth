import React from 'react';
import {
  QueueContainer, QueuedLeftCardsStyle, QueuedCardsLeftContainerStyle, QueuedRightCardsStyle, QueuedCardsRightContainerStyle,
} from './ParticipantsQueue.styled';
import ParticipantsCard from './ParticipantsCard';

class ParticipantsQueue extends React.Component {
    getQueuedParticipants = () => this.props.participants.filter((participant) => participant.secondsElapsed === 0);

    getParticipantsThatAlreadyTalked = () => this.props.participants.filter((participant) => participant.secondsElapsed !== 0 && !participant.isTalking);

    getTalkingParticipant = () => this.props.participants.find((participant) => participant.isTalking);

    render() {
      return (
          <QueueContainer>
            <QueuedLeftCardsStyle>
              <QueuedCardsLeftContainerStyle>
                { this.getQueuedParticipants().map((participant, index) => <ParticipantsCard participant={participant} key={index}/>)}
              </QueuedCardsLeftContainerStyle>
            </QueuedLeftCardsStyle>
            <div>
              <ParticipantsCard participant={this.getTalkingParticipant()}/>
            </div>
            <QueuedRightCardsStyle>
              <QueuedCardsRightContainerStyle>
                { this.getParticipantsThatAlreadyTalked().map((participant, index) => <ParticipantsCard participant={participant} key={index}/>)}
              </QueuedCardsRightContainerStyle>
            </QueuedRightCardsStyle>
          </QueueContainer>
      );
    }
}

export default ParticipantsQueue;
