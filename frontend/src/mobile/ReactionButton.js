import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ReactionButton extends React.Component {
  getReactionButtonStyle = () => ({
    height: this.props.isBig ? '4rem' : '3rem',
    width: this.props.isBig ? '4rem' : '3rem',
    borderRadius: '50%',
    background: 'black',
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
    cursor: 'pointer',
    border: `2px solid ${this.getStatusColor()}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  getStatusColor = () => {
    if (this.props.isActive) {
      return 'lightgreen';
    }
    return this.props.isDisabled ? 'grey' : 'white';
  };

  getIconSize = () => (this.props.isBig ? '2x' : 'lg');

  render() {
    return (
      <div style={this.getReactionButtonStyle()}>
        <Button onClick={this.props.onClick}>
          <FontAwesomeIcon icon={this.props.icon} size={this.getIconSize()} color={this.getStatusColor()}/>
        </Button>
      </div>
    );
  }
}
