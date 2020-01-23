import React from 'react';
import {
  faThumbsUp, faThumbsDown, faHashtag, faSync
} from '@fortawesome/free-solid-svg-icons';
import ParticipantsCard from '../cola-de-participantes/ParticipantsCard';
import { ReactionButton } from './ReactionButton';
import { SelectPineToTalkPopUp } from './SelectPineToTalkPopUp';
import {
  MobileUsableArea, SubjectContainer, ParticipantsContainer, 
  HeaderContainer, SubjectTitle, TitleName
} from './vista.styled';
import SpeakingActions from './SpeakingActions';
import { SubjectReactionsContainer } from '../components/SubjectReactionsContainer.styled';
import { InteractionsContainer } from '../components/InteractionsContainer.styled';

const hardcodedParticipant = { inicio: Date.now(), fin: null, nombre: 'Ari Hablando' };

const getTemaById = (id) => 'Aumento Para Todos!!';

class Vista extends React.Component {
  state = {
    subjectThumbsUpClicked: false,
    subjectThumbsDownClicked: false,
    subjectSlackClicked: false,
    subjectRecommendingEndingClicked: false,
    wannaTalk: false,
    wantOtherToTalk: false,
    selectedPine: null,
    availablePines: ['fulanito', 'menganito'], // TODO: cambiar por los pinos logueados
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

  onWantOtherPersonToTalk = () => {
    this.setState({ wantOtherToTalk: !this.state.wantOtherToTalk });
  };

  handlePineChange = (event) => {
    this.setState({ selectedPine: event.target.id });
  };

  render() {
    return (
      <MobileUsableArea>
        <HeaderContainer>
          <TitleName> 10Pines Roots </TitleName>
        </HeaderContainer>
        <InteractionsContainer height="30%" 
          imgURL="url(https://images.assetsdelivery.com/compings_v2/lexanda/lexanda1704/lexanda170400030.jpg)">
          <SubjectTitle>
            {getTemaById(this.props.tema)}
          </SubjectTitle>
          <SubjectReactionsContainer height={6}>
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
          </SubjectReactionsContainer>
        </InteractionsContainer>
        <ParticipantsContainer>
          <ParticipantsCard interactive={true} dispatch={this.props.dispatch}
            participant={hardcodedParticipant} isParticipantTalking={true} />
          <SpeakingActions onWannaStopTalk = {this.onWannaStopTalkClick}
            onWannaTalk = {this.onWannaTalkClick} onWantOtherPersonToTalk = {this.onWantOtherPersonToTalk}
            wannaTalk = {this.state.wannaTalk}
          />
        </ParticipantsContainer>
        <SelectPineToTalkPopUp
          isDisabled={!this.state.wantOtherToTalk}
          onExit={() => this.setState({ wantOtherToTalk: false })}
          availablePines={this.state.availablePines}
          handlePineChange={this.handlePineChange}
        />
      </MobileUsableArea>
    );
  }
}

/*
Debug items

            <TextField
              style={{backgroundColor: "white", width: "10rem", marginLeft: "1rem"}}
              id="filled-textarea"
              label={"Nombre de Orador"}
              value={this.props.orador}
              onChange={this.props.onOradorChange}
              variant="filled"
            />


                        <Button onClick={() => this.props.dispatch({ tipo: 'Reiniciar reacciones' })}>Reiniciar reacciones</Button>

                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Hablar' })}>
                  <FontAwesomeIcon icon={faHandHolding} size={"3x"} color={"grey"}/>
                </Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Desencolarme' })}>
                  <FontAwesomeIcon icon={faSync} size={"3x"} color={"grey"}/>
                </Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Dejar de Hablar' })}>
                  <FontAwesomeIcon icon={faSync} size={"3x"} color={"grey"}/>
                </Button>


 */


export default Vista;
