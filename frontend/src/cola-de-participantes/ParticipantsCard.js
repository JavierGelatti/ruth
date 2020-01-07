import React from 'react';
import Card from '@material-ui/core/Card';
import ParticipantCounter from './ParticipantCounter';
import { CardSubcontainer, cardContainerStyle, CardName, UserAvatar } from './ParticipantsCard.styled';

class ParticipantsCard extends React.Component {

  secondsElapsed() {
    if(this.props.participant.inicio === null){
      return 0;
    } else if (this.props.participant.fin !== null) {
      return Math.round((this.props.participant.fin - this.props.participant.inicio)/1000)
    } else {
      return Math.round((Date.now() - this.props.participant.inicio)/1000)
    }
  }

  render() {
    return (
          <Card key={this.props.key} style={cardContainerStyle(this.props.isParticipantTalking)} onClick={this.props.onNext}>
            <CardSubcontainer>
              <UserAvatar isTalking={this.props.isParticipantTalking}/>
              <CardName>
                {this.props.participant.nombre}
              </CardName>
            </CardSubcontainer>
            <ParticipantCounter key={this.props.key} seconds={this.secondsElapsed()} isActive={this.props.isParticipantTalking}/>
          </Card>
    );
  }
}

export default ParticipantsCard;
