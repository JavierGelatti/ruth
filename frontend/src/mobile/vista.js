import React from 'react';
import { Button } from '@material-ui/core';

class Vista extends React.Component {
  render() {
    return (
            <div>
                <h1>Mobile</h1>
                <Button onClick={() => this.props.dispatch('Quiero Hablar')}>Quiero hablar</Button>
                <Button onClick={() => this.props.dispatch('No Quiero Hablar')}>No quiero hablar</Button>
                <Button onClick={() => this.props.dispatch('Up')}>+1</Button>
                <Button onClick={() => this.props.dispatch('Down')}>-1</Button>
            </div>
    );
  }
}


export default Vista;
