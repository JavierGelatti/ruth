import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.styled';
import Reunion from './reunion/Reunion';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';


const App = ({ location }) => {
  const [reunionDeRoots, setReunionDeRoots] = useState({});
  useEffect(() => {
    backend.getReunion().then((reunion) => setReunionDeRoots(reunion));
  }, [location]);

  return (
    <>
      <GlobalStyle/>
      <Switch location={location}>
        <Route exact path="/"
               render={() => (reunionDeRoots.abierta ? <Redirect to="/reunionDeRoots"/>
                 : <EmpezarReunion {...reunionDeRoots} location={location}/>)}/>
        <Route path="/reunionDeRoots"
               render={() => (reunionDeRoots.abierta ? <Reunion {...reunionDeRoots} location={location}/> : <Redirect to="/"/>)}/>
      </Switch>
    </>
  );
};


export default App;
