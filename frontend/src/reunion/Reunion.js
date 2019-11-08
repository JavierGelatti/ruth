import React, {useEffect} from "react";
import {createGetTemasThunk} from "./Reunion.actions";
import {connect} from "react-redux";
import Temario from "../temario/Temario";
import {ReunionContainer} from "./Reunion.styled";

const Reunion = (props) => {
  const {indexTemaActual, temas} = props; //state
  const {onInit} = props; //dispatch

  const onInitUseEffect = () => {
    onInit()
  };
  useEffect(onInitUseEffect, []);

  if (!temas) return null;

  return (
    <ReunionContainer>
      <Temario indexTemaActual={indexTemaActual} temario={temas}/>
      Tema actual: {temas[indexTemaActual].titulo}
    </ReunionContainer>);
};

const stateToProps = state => state.reunion;
const dispatchToProps = dispatch => ({
  onInit: () => dispatch(createGetTemasThunk())
});

export default connect(stateToProps, dispatchToProps)(Reunion);
