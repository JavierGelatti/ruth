import React from 'react';
import Card from '@material-ui/core/Card';
import ParticipantTimer from './ParticipantTimer';
import { CardSubcontainer, cardContainerStyle, CardName, UserAvatar } from './ParticipantsCard.styled';

class ParticipantsCard extends React.Component {
  render() {
    return (
          <Card key={this.props.key} style={cardContainerStyle(this.props.participant.isTalking)} onClick={this.props.onNext}>
            <CardSubcontainer>
              <UserAvatar isTalking={this.props.participant.isTalking}/>
              <CardName>
                {this.props.participant.nombre}
              </CardName>
            </CardSubcontainer>
            <ParticipantTimer key={this.props.key} participant={this.props.participant}/>
          </Card>
    );
  }
}

export default ParticipantsCard;
