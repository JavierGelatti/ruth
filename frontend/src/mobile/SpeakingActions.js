import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandPaper, faHandPointRight,
} from '@fortawesome/free-solid-svg-icons';
import {
    ActionContainerStyle, StyledButton, ActionText
} from './vista.styled';

class SpeakingActions extends React.Component {

    state = {
        wannaTalk: this.props.wannaTalk,
      };

    componentDidUpdate(prevProps){
        if(prevProps.changedProp !== this.props.changedProp){
            this.setState({          
                wannaTalk: this.props.wannaTalk
            });
        }
    }

    render() {
        return (
            <ActionContainerStyle>
                {
                    !this.state.wannaTalk
                        ? <StyledButton onClick={this.props.onWannaTalk}
                            color={'primary'} variant={'contained'} size={'large'} >
                            <ActionText> Quiero Hablar </ActionText>
                            <FontAwesomeIcon icon={faHandPaper} color={'white'} size={'2x'} />
                        </StyledButton>
                        : <StyledButton onClick={this.props.onWannaStopTalk}
                            color={'secondary'} variant={'contained'} size={'large'} >
                            <ActionText> Dejar de Hablar </ActionText>
                            <FontAwesomeIcon icon={faHandPaper} color={'white'} size={'2x'} />
                        </StyledButton>
                }
                <StyledButton onClick={this.props.onWantOtherPersonToTalk}
                    variant={'contained'} size={'large'} >
                    <ActionText> Que Hable  </ActionText>
                    <FontAwesomeIcon icon={faHandPointRight} color={'black'} size={'2x'} />
                </StyledButton>
            </ActionContainerStyle>
        );
    }
}


export default SpeakingActions;
