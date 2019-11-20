import React from 'react';
import { Redirect } from 'react-router-dom';
import { ReunionContainer } from './Reunion.styled';
import InfoTema from '../temario/InfoTema';
import DescripcionTema from '../temario/DescripcionTema';
import SideBarIzquierda from '../temario/SideBarIzquierda';
//import Temario from '../temario/Temario';
//import { Button } from '../components/Button.styled';
//import backend from '../api/backend';

class Reunion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }


  //handleCerrarReunion = () => backend.cerrarReunion().then(() => this.setState({ redirect: true }));

  render() {
    return (
      <ReunionContainer>
        <InfoTema/>
        <DescripcionTema/>
        <SideBarIzquierda/>
        {/* <Temario/>
        Tema actual
      <Button onClick={this.handleCerrarReunion}> Cerrar reunion </Button> */}
      </ReunionContainer>);
  }
}

export default Reunion;
