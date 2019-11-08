import React from 'react';
import { connect } from 'react-redux';
import { EmpezarRootsContainer, Title } from './EmpezarReunion.styled';
import { createEmpezarReunionThunk } from '../reunion/Reunion.actions';
import { Button } from '../components/Button.styled';

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
