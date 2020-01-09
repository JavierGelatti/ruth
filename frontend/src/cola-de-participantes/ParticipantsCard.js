import React from 'react';
import Card from '@material-ui/core/Card';
import ParticipantCounter from './ParticipantCounter';
import { CardSubcontainer, cardContainerStyle, CardName, UserAvatar } from './ParticipantsCard.styled';

class ParticipantsCard extends React.Component {

  estadoOrador() {
    if(this.estaEncolado()){
      return { detalle: "encolado"};
    } else if (this.hablo()) {
      return { detalle: "hablo", seconds: Math.round((this.props.participant.fin - this.props.participant.inicio)/1000)}
    } else {
      return { detalle: "hablando", seconds: Math.round((Date.now() - this.props.participant.inicio)/1000)}
    }
  }

  hablo() {
    return this.props.participant.fin !== null;
  }

  estaEncolado() {
    return this.props.participant.inicio === null;
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
            <ParticipantCounter key={this.props.key} estadoOrador={this.estadoOrador()} />
          </Card>
    );
  }
}

export default ParticipantsCard;
