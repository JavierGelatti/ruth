import React from 'react';
import { Button } from '@material-ui/core';

class Vista extends React.Component {
  render() {
    return (
            <div>
                <h1>Mobile</h1>

                <Button onClick={() => this.props.dispatch('Quiero Hablar')}>Quiero hablar</Button>
                <Button onClick={() => this.props.dispatch('No Quiero Hablar')}>NO quiero hablar</Button>
            </div>
    );
  }
}


export default Vista;
