import React from 'react';
import {
  Arrow, TemarioContainer, Temas, Titulo, LeyendaEmpresa, ExtensionLeyendaEmpresa, ContenidoTemario,
} from './Temario.styled';
import ListaTemario from './ListaTemario';

class Temario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    return (
      <TemarioContainer isActive={this.state.isActive}>
        <Arrow src="./pino-blanco.svg" onMouseEnter={() => this.setState({ isActive: true })} />
        <Temas onMouseLeave={() => this.setState({ isActive: true })}>
          <LeyendaEmpresa>10 Pines</LeyendaEmpresa>
          <ExtensionLeyendaEmpresa>Creative Software Developement</ExtensionLeyendaEmpresa>
          <ContenidoTemario>
            <Titulo> Temario </Titulo>
            <ListaTemario temas = {this.props.temas}
                        seleccionarTema = {this.props.seleccionarTema}/>
          </ContenidoTemario>
        </Temas>
      </TemarioContainer>
    );
  }
}

export default Temario;
