import React from 'react';
import Card from '@material-ui/core/Card';
import {
  faSync, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import ParticipantCounter from './ParticipantCounter';
import {
  CardSubcontainer,
  cardContainerStyle,
  CardName,
  UserAvatar,
} from './ParticipantsCard.styled';
import { ReactionButton } from '../mobile/ReactionButton';
import { SubjectReactionsContainer } from '../components/SubjectReactionsContainer.styled';
import { InteractionsContainer } from '../components/InteractionsContainer.styled';

class ParticipantsCard extends React.Component {
  state = {
    subjectThumbsUpClicked: false,
    subjectThumbsDownClicked: false,
    subjectRecommendingEndingClicked: false,
  };

  state = {
    opinionThumbsUpClicked: false,
    opinionThumbsDownClicked: false,
    opinionSlackClicked: false,
    opinionRecommendingEndingClicked: false,
    wannaTalk: false,
    wantOtherToTalk: false,
    selectedPine: null,
    availablePines: ['fulanito', 'menganito'], // TODO: cambiar por los pinos logueados
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
                && <InteractionsContainer height="18rem" width="12rem">
                  <SubjectReactionsContainer height={4.5} >
                    <ReactionButton isActive={this.state.opinionThumbsUpClicked} 
                      onClick={this.onPersonSpeakingThumbsUpClick}
                      isDisabled={this.state.opinionThumbsDownClicked} icon={faThumbsUp} />
                    <ReactionButton isActive={this.state.opinionThumbsDownClicked} 
                      onClick={this.onPersonSpeakingThumbsDownClick}
                      isDisabled={this.state.opinionThumbsUpClicked} icon={faThumbsDown} />
                    <ReactionButton isActive={this.state.opinionRecommendingEndingClicked} 
                      onClick={this.onPersonSpeakingRecommendingEndingClicked}
                      icon={faSync}/>
                  </SubjectReactionsContainer>
                </InteractionsContainer>
            }
          </Card>
    );
  }
}

export default ParticipantsCard;
