import React from 'react';
import {
  faThumbsUp, faThumbsDown, faHashtag, faSync, faHandPaper, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ParticipantsCard from '../cola-de-participantes/ParticipantsCard';
import { ReactionButton } from './ReactionButton';
import {
  MobileUsableArea, SubjectContainer, ParticipantsContainer,
  HeaderContainer, SubjectTitle, TitleName, ActionContainerStyle, StyledButton, ActionText,
} from './vista.styled';
import { ReactionsContainer } from '../components/SubjectReactionsContainer.styled';
import { CardInteractionsContainer } from '../components/InteractionsContainer.styled';

const hardcodedParticipant = { inicio: Date.now(), fin: null, nombre: 'Ari Hablando' };

const getTemaById = (id) => 'Aumento Para Todos!!';

class Vista extends React.Component {
  state = {
    subjectThumbsUpClicked: false,
    subjectThumbsDownClicked: false,
    subjectSlackClicked: false,
    subjectRecommendingEndingClicked: false,
    wannaTalk: false,
  };

  onSubjectThumbsUpClick = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'thumbsUpTemaActual👍' });
    this.setState({ subjectThumbsUpClicked: true, subjectThumbsDownClicked: false });
  };

  onSubjectThumbsDownClick = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'thumbsDownTemaActual' });
    this.setState({ subjectThumbsUpClicked: false, subjectThumbsDownClicked: true });
  };

  onSubjectSlackClick = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'slackTemaActual' });
    this.setState({ subjectSlackClicked: !this.state.subjectSlackClicked });
  };

  onSubjectRecommendingEndingClicked = () => {
    this.props.dispatch({ tipo: 'Reaccionar', reaccion: 'redondearTemaActual' });
    this.setState({ subjectRecommendingEndingClicked: !this.state.subjectRecommendingEndingClicked });
  };

  onWannaTalkClick = () => {
    this.props.dispatch({ tipo: 'Quiero Hablar' });
    this.setState({ wannaTalk: true });
  };

  onWannaStopTalkClick = () => {
    this.props.dispatch({ tipo: 'Quiero Desencolarme' });
    this.setState({ wannaTalk: false });
  };

  render() {
    return (
      <MobileUsableArea>
        <HeaderContainer>
          <TitleName> 10Pines Roots </TitleName>
        </HeaderContainer>
        <CardInteractionsContainer height="30%"
                                   imgURL="url(https://images.assetsdelivery.com/compings_v2/lexanda/lexanda1704/lexanda170400030.jpg)">
          <SubjectTitle>
            {getTemaById(this.props.tema)}
          </SubjectTitle>
          <ReactionsContainer height={6}>
            <ReactionButton isBig isActive={this.state.subjectThumbsUpClicked}
              isDisabled={this.state.subjectThumbsDownClicked} icon={faThumbsUp}
              onClick={this.onSubjectThumbsUpClick} />
            <ReactionButton isBig isActive={this.state.subjectThumbsDownClicked}
              isDisabled={this.state.subjectThumbsUpClicked} icon={faThumbsDown}
              onClick={this.onSubjectThumbsDownClick} />
            <ReactionButton isBig isActive={this.state.subjectSlackClicked} icon={faHashtag}
              onClick={this.onSubjectSlackClick} />
            <ReactionButton isBig isActive={this.state.subjectRecommendingEndingClicked} icon={faSync}
              onClick={this.onSubjectRecommendingEndingClicked} />
          </ReactionsContainer>
        </CardInteractionsContainer>
        <ParticipantsContainer>
          <ParticipantsCard interactive isParticipantTalking dispatch={this.props.dispatch} participant={hardcodedParticipant} />
          <ActionContainerStyle>
            {
              !this.state.wannaTalk
                ? <StyledButton onClick={this.onWannaTalkClick} variant={'contained'} >
                    <ActionText> Quiero Hablar </ActionText>
                    <FontAwesomeIcon icon={faHandPaper} color={'black'} size={'2x'} />
                </StyledButton>
                : <StyledButton color={'secondary'} onClick={this.onWannaStopTalkClick} variant={'contained'} >
                    <ActionText> Dejar de Hablar </ActionText>
                    <FontAwesomeIcon icon={faSignOutAlt} color={'white'} size={'2x'} />
                </StyledButton>
            }
          </ActionContainerStyle>
        </ParticipantsContainer>
      </MobileUsableArea>
    );
  }
}

export default Vista;
