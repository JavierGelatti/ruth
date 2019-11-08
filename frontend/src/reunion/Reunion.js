import React, {useEffect} from "react";
import {createCerrarReunionThunk, createInicializarReunionThunk, createSeleccionarTemaAction} from "./Reunion.actions";
import {connect} from "react-redux";
import Temario from "../temario/Temario";
import {ReunionContainer} from "./Reunion.styled";
import {Button} from "../components/Button.styled";

const Reunion = (props) => {
  const {indexTemaActual, temas} = props; //state
  const {onInit, onCerrarReunion, onChangeTemaActual} = props; //dispatch

  const onInitUseEffect = () => {
    onInit(indexTemaActual)
  };
  useEffect(onInitUseEffect, []);

  if (!temas) return null;

  return (
    <ReunionContainer>
      <Temario indexTemaActual={indexTemaActual} temario={temas} handleClickDeTema={onChangeTemaActual}/>
      Tema actual: {temas[indexTemaActual].titulo}
      <Button onClick={onCerrarReunion}> Cerrar reunion </Button>
    </ReunionContainer>);
};

const stateToProps = state => state.reunion;
const dispatchToProps = dispatch => ({
  onInit: (indexTemaActual) => dispatch(createInicializarReunionThunk(indexTemaActual)),
  onCerrarReunion: () => dispatch(createCerrarReunionThunk()),
  onChangeTemaActual: (indexTemaSeleccionado) => dispatch(createSeleccionarTemaAction(indexTemaSeleccionado))
});

export default connect(stateToProps, dispatchToProps)(Reunion);
