import React from 'react';
import {
  faSync, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import ParticipantCounter from './ParticipantCounter';

import {
  CardSubcontainer,
  CardContainer,
  CardInteractionsContainer,
  CardInfoContainer,
  CardName,
  UserAvatar,
} from './ParticipantsCard.styled';
import { ReactionButton } from '../mobile/ReactionButton';
import { ReactionsContainer } from '../components/SubjectReactionsContainer.styled';

class ParticipantsCard extends React.Component {
  state = {
    opinionThumbsUpClicked: false,
    opinionThumbsDownClicked: false,
    opinionRecommendingEndingClicked: false,
  };

  onPersonSpeakingThumbsUpClick = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'thumbsUpOpinionActual👍' });
    this.setState({ opinionThumbsUpClicked: true, opinionThumbsDownClicked: false });
  };

  onPersonSpeakingThumbsDownClick = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'thumbsDownOpinionActual' });
    this.setState({ opinionThumbsUpClicked: false, opinionThumbsDownClicked: true });
  };

  onPersonSpeakingRecommendingEndingClicked = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'redondearOpinionActual' });
    this.setState({ opinionRecommendingEndingClicked: !this.state.opinionRecommendingEndingClicked });
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

  getCardHeight() {
    if (this.props.interactive) return '17em';
    if (this.props.isParticipantTalking) return '15em';
    return '13em';
  }

  getCardWidth() {
    if (this.props.isParticipantTalking) return '13em';
    return '11em';
  }

  render() {
    return (
      <CardContainer
        key={this.props.key}
        isTalking={this.props.isParticipantTalking}
        isInteractive={this.props.interactive}
        height={this.getCardHeight()}
        width={this.getCardWidth()}
      >
        <UserAvatar isTalking={this.props.isParticipantTalking}/>
        <CardInfoContainer>
          <CardName isInteractive={this.props.interactive}> Federico Magdalena Lopez Fonseca </CardName>
          <ParticipantCounter interactive={this.props.interactive} key={this.props.key} estadoOrador={this.estadoOrador()} />
          {
            this.props.interactive
            && <CardInteractionsContainer>
              <ReactionsContainer height={4.5} >
                <ReactionButton isActive={this.state.opinionThumbsUpClicked}
                                onClick={this.onPersonSpeakingThumbsUpClick}
                                isDisabled={this.state.opinionThumbsDownClicked} icon={faThumbsUp} />
                <ReactionButton isActive={this.state.opinionThumbsDownClicked}
                                onClick={this.onPersonSpeakingThumbsDownClick}
                                isDisabled={this.state.opinionThumbsUpClicked} icon={faThumbsDown} />
                <ReactionButton isActive={this.state.opinionRecommendingEndingClicked}
                                onClick={this.onPersonSpeakingRecommendingEndingClicked}
                                icon={faSync}/>
              </ReactionsContainer>
            </CardInteractionsContainer>
          }
        </CardInfoContainer>
      </CardContainer>
    );
  }
}

export default ParticipantsCard;
