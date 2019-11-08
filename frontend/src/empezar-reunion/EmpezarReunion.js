import React from 'react';
import { connect } from 'react-redux';
import { Button, EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { createEmpezarReunionThunk } from '../reunion/Reunion.actions';

const EmpezarReunion = ({ onClickStart }) => (
    <EmpezarRootsContainer>
      <Title> Aplicacion para moderar la Reunion de Roots</Title>
      <Button onClick={onClickStart}> Empezar reunión </Button>
    </EmpezarRootsContainer>
);

const stateToProps = null;
const dispatchToProps = (dispatch) => ({
  onClickStart: () => dispatch(createEmpezarReunionThunk()),
});

export default connect(stateToProps, dispatchToProps)(EmpezarReunion);
