import React from 'react';
import {
  Arrow, TemarioContainer, Temas, Titulo,
} from './Temario.styled';

class Temario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <TemarioContainer isActive={this.state.isActive}>
        <Arrow onMouseEnter={() => this.setState({ isActive: true })}> + </Arrow>
        <Temas onMouseLeave={() => this.setState({ isActive: false })}>
          <Titulo> Temario </Titulo>
        </Temas>
      </TemarioContainer>
    );
  }
}

export default Temario;
