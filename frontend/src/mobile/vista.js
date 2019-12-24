import React from 'react';
import { Button, TextField } from '@material-ui/core';

class Vista extends React.Component {
    state = {
        nombre: ""
    }

    handleNameChange = (event) => {
        this.setState({ nombre: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>Mobile</h1>
                <TextField value={this.state.nombre} onChange={this.handleNameChange} />
                <Button onClick={() => this.props.dispatch("Quiero Hablar")}>Quiero hablar</Button>
                <Button onClick={() => this.props.dispatch("No Quiero Hablar")}>NO quiero hablar</Button>
            </div>
        );
    }
}


export default Vista;
