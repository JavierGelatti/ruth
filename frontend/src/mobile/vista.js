import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp, faThumbsDown, faHashtag, faSync, faHandPaper, faHandPointRight,
} from '@fortawesome/free-solid-svg-icons';
import ParticipantsCard from '../cola-de-participantes/ParticipantsCard';
import { ReactionButton } from './ReactionButton';
import { SelectPineToTalkPopUp } from './SelectPineToTalkPopUp';
import { 
  MobileContainer, MobileUsableArea, TitleContainer, 
  SubjectReactionsContainer, ParticipantsContainer, HeaderContainer,
  ActionContainerStyle, SubjectTitleStyle
} from './vista.styled';

const subjectTitleStyle = {
  
};

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
      <MobileContainer>
        <MobileUsableArea>
          <HeaderContainer>
            <span style={{ color: 'white', paddingLeft: '1rem' }}> 10Pines Roots </span>
          </HeaderContainer>
          <TitleContainer>
            <SubjectTitleStyle> 
              {getTemaById(this.props.tema)}
            </SubjectTitleStyle>
            <SubjectReactionsContainer>
              <ReactionButton isBig isActive={this.state.subjectThumbsUpClicked} isDisabled={this.state.subjectThumbsDownClicked} icon={faThumbsUp} onClick={this.onSubjectThumbsUpClick}/>
              <ReactionButton isBig isActive={this.state.subjectThumbsDownClicked} isDisabled={this.state.subjectThumbsUpClicked} icon={faThumbsDown} onClick={this.onSubjectThumbsDownClick}/>
              <ReactionButton isBig isActive={this.state.subjectSlackClicked} icon={faHashtag} onClick={this.onSubjectSlackClick}/>
              <ReactionButton isBig isActive={this.state.subjectRecommendingEndingClicked} icon={faSync} onClick={this.onSubjectRecommendingEndingClicked}/>
            </SubjectReactionsContainer>
          </TitleContainer>
          <ParticipantsContainer>
            <ParticipantsCard interactive={true} participant={hardcodedParticipant} isParticipantTalking={true}/>
            <ActionContainerStyle>
              {
                !this.state.wannaTalk
                  ? <Button onClick={this.onWannaTalkClick} style={{
                    width: '14rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }} color={'primary'} variant={'contained'} size={'large'} >
                    <span style={{ marginRight: '1rem' }}> Quiero Hablar </span>
                    <FontAwesomeIcon icon={faHandPaper} color={'white'} size={'2x'}/>
                  </Button>
                  : <Button onClick={this.onWannaStopTalkClick} style={{
                    width: '14rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }} color={'secondary'} variant={'contained'} size={'large'} >
                    <span style={{ marginRight: '1rem' }}> Dejar de Hablar </span>
                    <FontAwesomeIcon icon={faHandPaper} color={'white'} size={'2x'}/>
                  </Button>
              }
              <Button onClick={this.onWantOtherPersonToTalk} style={{
                marginTop: '1rem', marginBottom: '1rem', width: '14rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }} variant={'contained'} size={'large'} >
                <span style={{ marginRight: '1rem' }}> Que Hable  </span>
                <FontAwesomeIcon icon={faHandPointRight} color={'black'} size={'2x'}/>
              </Button>
            </ActionContainerStyle>
          </ParticipantsContainer>
          <SelectPineToTalkPopUp
            isDisabled={!this.state.wantOtherToTalk}
            onExit={() => this.setState({ wantOtherToTalk: false })}
            availablePines={this.state.availablePines}
            handlePineChange={this.handlePineChange}
          />
        </MobileUsableArea>
      </MobileContainer>
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
