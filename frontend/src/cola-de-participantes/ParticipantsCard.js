import React from 'react';
import Card from '@material-ui/core/Card';
import ParticipantCounter from './ParticipantCounter';
import { CardSubcontainer, cardContainerStyle, CardName, UserAvatar } from './ParticipantsCard.styled';
import getGravatarUrlFor from '../api/gravatar';

class ParticipantsCard extends React.Component {

  estadoOrador() {
    if(this.estaEncolado()){
      return { detalle: "encolado"};
    } else if (this.hablo()) {
      return { detalle: "hablo", seconds: Math.ceil((this.props.participant.fin - this.props.participant.inicio)/1000)}
    } else {
      // TODO: Algunas veces cuando hay reacciones el número avanza o retrocede.
      return { detalle: "hablando", seconds: Math.ceil((Date.now() - this.props.participant.inicio)/1000)}
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
          <Card key={this.props.key} style={cardContainerStyle(this.props.isParticipantTalking)}>
            <CardSubcontainer>
              <UserAvatar isTalking={this.props.isParticipantTalking} avatar={getGravatarUrlFor('alen.munoz@10pines.co')}/>
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
