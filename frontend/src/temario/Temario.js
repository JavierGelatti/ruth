import React from 'react';
import {
  Arrow, TemarioContainer, Temas, Titulo,
} from './Temario.styled';
import ListaTemario from './ListaTemario';

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
        <Arrow src="./pino-blanco.svg" onMouseEnter={() => this.setState({ isActive: true })} />
        <Temas onMouseLeave={() => this.setState({ isActive: false })}>
          <Titulo> Temario </Titulo>
          <ListaTemario temas = {this.props.temas}
                        seleccionarTema = {this.props.seleccionarTema}/>
        </Temas>
      </TemarioContainer>
    );
  }
}

export default Temario;
