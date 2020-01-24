import React from 'react';
import {
  QueueContainer, QueuedLeftCardsStyle, QueuedCardsLeftContainerStyle, QueuedRightCardsStyle, QueuedCardsRightContainerStyle,
} from './ParticipantsQueue.styled';
import ParticipantsCard from './ParticipantsCard';

class ParticipantsQueue extends React.Component {
    getQueuedParticipants = () => this.props.participants.filter((participant) => participant.inicio === null && !this.props.isTalking(participant));

    getParticipantsThatAlreadyTalked = () => this.props.participants.filter((participant) => participant.inicio !== null && !this.props.isTalking(participant));

    getTalkingParticipant = () => this.props.participants.find((participant) => this.props.isTalking(participant));

    render() {
      let talkingParticipant = this.getTalkingParticipant();
      return (
          <QueueContainer>
            <QueuedLeftCardsStyle>
              <QueuedCardsLeftContainerStyle>
                { this.getQueuedParticipants().map((participant, index) => <ParticipantsCard interactive={false} participant={participant} key={index}/>)}
              </QueuedCardsLeftContainerStyle>
            </QueuedLeftCardsStyle>
            {talkingParticipant && <ParticipantsCard participant={talkingParticipant} isParticipantTalking/>}
            <QueuedRightCardsStyle>
              <QueuedCardsRightContainerStyle>
                { this.getParticipantsThatAlreadyTalked().map((participant, index) => <ParticipantsCard interactive={false} participant={participant} key={index}/>)}
              </QueuedCardsRightContainerStyle>
            </QueuedRightCardsStyle>
          </QueueContainer>
      );
    }
}

export default ParticipantsQueue;
