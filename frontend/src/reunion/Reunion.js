import React, {useEffect} from "react";
import {createCerrarReunionThunk, createGetTemasThunk} from "./Reunion.actions";
import {connect} from "react-redux";
import Temario from "../temario/Temario";
import {ReunionContainer} from "./Reunion.styled";
import {Button} from "../components/Button.styled";

const Reunion = (props) => {
  const {indexTemaActual, temas} = props; //state
  const {onInit, onCerrarReunion} = props; //dispatch

  const onInitUseEffect = () => {
    onInit()
  };
  useEffect(onInitUseEffect, []);

  if (!temas) return null;

  return (
    <ReunionContainer>
      <Temario indexTemaActual={indexTemaActual} temario={temas}/>
      Tema actual: {temas[indexTemaActual].titulo}
      <Button onClick={onCerrarReunion}> Cerrar reunion </Button>
    </ReunionContainer>);
};

const stateToProps = state => state.reunion;
const dispatchToProps = dispatch => ({
  onInit: () => dispatch(createGetTemasThunk()),
  onCerrarReunion: () => dispatch(createCerrarReunionThunk())
});

export default connect(stateToProps, dispatchToProps)(Reunion);
