import {Button, EmpezarRootsContainer, Title} from "./EmpezarReunion.styled";
import React from "react";
import {createEmpezarReunionThunk} from "../reunion/Reunion.actions";
import {connect} from "react-redux";

const EmpezarReunion = ({onClickStart}) => {
  return (
    <EmpezarRootsContainer>
      <Title> Aplicacion para moderar la Reunion de Roots</Title>
      <Button onClick={onClickStart}> Empezar reunión </Button>
    </EmpezarRootsContainer>
  );
};

const stateToProps = null;
const dispatchToProps = (dispatch) => ({
  onClickStart: () => dispatch(createEmpezarReunionThunk())
});

export default connect(stateToProps, dispatchToProps)(EmpezarReunion);

