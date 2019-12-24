import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Vista from './vista';

class Mobile extends React.Component {

    dispatch = (event) => {
        console.log(event)
    }

    render() {
        return (
            <Vista dispatch={this.dispatch}/>
        );
    }
}


export default Mobile;
