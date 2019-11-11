import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.styled';
import Reunion from './reunion/Reunion';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';


const App = ({ location }) => {
  let reunion = {};
  backend
    .getReunion()
    .then((response) => {
      reunion = response;
      return response;
    });

  return (
    <>
      <GlobalStyle/>
      <Switch location={location}>
        <Route exact path="/" render={() => (<ComponenteSegunEstadoDeReunion reunion={reunion}/>)}/>
      </Switch>
    </>
  );
};

const ComponenteSegunEstadoDeReunion = ({ isOpen, ...resto }) => {
  const ComponenteARenderizar = isOpen ? Reunion : EmpezarReunion;
  return <ComponenteARenderizar {...resto} />;
};

export default App;
