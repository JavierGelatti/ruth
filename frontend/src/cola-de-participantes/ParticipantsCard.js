import React from 'react';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import {
  faHashtag, faSync, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import ParticipantCounter from './ParticipantCounter';
import {
  CardSubcontainer,
  cardContainerStyle,
  CardName,
  UserAvatar,
  CardInteractionsContainer,
} from './ParticipantsCard.styled';
import { ReactionButton } from '../mobile/ReactionButton';

const subjectReactionsContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid white',
  background: 'rgb(0, 0, 0, 0.7)',
  height: '4.5rem',
};

class ParticipantsCard extends React.Component {
  state = {
    subjectThumbsUpClicked: false,
    subjectThumbsDownClicked: false,
    subjectRecommendingEndingClicked: false,
  };

  estadoOrador() {
    if (this.estaEncolado()) {
      return { detalle: 'encolado' };
    } if (this.hablo()) {
      return { detalle: 'hablo', seconds: Math.ceil((this.props.participant.fin - this.props.participant.inicio) / 1000) };
    }
    // TODO: Algunas veces cuando hay reacciones el número avanza o retrocede.
    return { detalle: 'hablando', seconds: Math.ceil((Date.now() - this.props.participant.inicio) / 1000) };
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
              <UserAvatar isTalking={this.props.isParticipantTalking}/>
              <CardName>
                {this.props.participant.nombre}
              </CardName>
            </CardSubcontainer>
            <ParticipantCounter key={this.props.key} estadoOrador={this.estadoOrador()} />
            {
              this.props.interactive
                && <CardInteractionsContainer>
                  <div style={subjectReactionsContainerStyle}>
                    <ReactionButton isActive={this.state.subjectThumbsUpClicked} 
                      isDisabled={this.state.subjectThumbsDownClicked} icon={faThumbsUp} />
                    <ReactionButton isActive={this.state.subjectThumbsDownClicked} 
                      isDisabled={this.state.subjectThumbsUpClicked} icon={faThumbsDown} />
                    <ReactionButton isActive={this.state.subjectRecommendingEndingClicked} icon={faSync}/>
                  </div>
                </CardInteractionsContainer>
            }
          </Card>
    );
  }
}

export default ParticipantsCard;
