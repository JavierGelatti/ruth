import React, {useEffect} from 'react';
import EmpezarReunion from "./empezar-reunion/EmpezarReunion";
import GlobalStyle from "./GlobalStyle.styled";
import {Redirect, Route, Switch} from "react-router-dom";
import Reunion from "./reunion/Reunion";
import connect from "react-redux/es/connect/connect";
import backend from "./api/backend";
import {createSetEstadoDeReunionAction} from "./reunion/Reunion.actions";

const App = ({location, reunionEnCurso, indexTemaActual, onInit}) => {
  const onInitUseEffect = () => {
    onInit()
  };
  useEffect(onInitUseEffect, []);
  return (
    <>
      <GlobalStyle/>
      <Switch location={location}>
        <Route exact path="/" render={() => reunionEnCurso ? <Redirect to={`/reunion/temas/${indexTemaActual}`}/> :
          <EmpezarReunion/>}/>
        <Route path="/reunion/temas/:temaId"
               render={({match}) => reunionEnCurso ? <Reunion indexTemaActual={match.params.temaId}/> :
                 <Redirect to='/'/>}/>
      </Switch>
    </>
  );
};

const stateToProps = state => ({
  reunionEnCurso: state.reunion.reunionEnCurso,
  indexTemaActual: state.reunion.indexTemaActual
});
const dispatchToProps = dispatch => ({
  onInit: () => {
    backend.reunionAbierta().then(createSetEstadoDeReunionAction).then(dispatch);
  }
});

export default connect(stateToProps, dispatchToProps)(App);
