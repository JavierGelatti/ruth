import React from 'react';
import Card from '@material-ui/core/Card';
import ParticipantTimer from './ParticipantTimer';

const userAvatarStyle = (isTalking) => ({
  backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QRApUFMY11IHznfAbkthPa7HYm6bE1qlZbZTHV8EIK7_FAlx&s')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  margin: !isTalking ? '-2rem 0rem 1rem 0rem' : '-3rem -2rem 1rem -2rem',
  height: '10rem',
  width: !isTalking ? '10rem' : '12rem',
});

const cardContainerStyle = (isTalking) => ({
  margin: !isTalking ? '0rem 1rem 0rem 1rem' : '0rem 1rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: !isTalking ? '15rem' : '18rem',
  width: !isTalking ? '10rem' : '12rem',
  cursor: isTalking ? 'pointer' : '',
});

const nameStyle = {
  width: '10rem',
  textAlign: 'center',
  height: '2rem',
  marginBottom: '1rem',
  marginTop: '0',
};

const cardSubcontainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

class ParticipantsCard extends React.Component {
  render() {
    return (
          <Card key={this.props.key} style={cardContainerStyle(this.props.participant.isTalking)} onClick={this.props.onNext}>
            <div style={cardSubcontainerStyle}>
              <div style={userAvatarStyle(this.props.participant.isTalking)}/>
              <h4 style={nameStyle}>
                {this.props.participant.nombre}
              </h4>
            </div>
            <ParticipantTimer key={this.props.key} participant={this.props.participant}/>
          </Card>
    );
  }
}

export default ParticipantsCard;
