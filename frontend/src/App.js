import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';
import GlobalStyle from './GlobalStyle.styled';
import VistaTemas from './reunion/VistaTemas';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';
import './toast.css';

// NOTA A DESAROLLADERE: Si van a tocar este crchivo, hablen con Joaquito :)
const App = ({ location }) => {
  const [reunionDeRoots, setReunionDeRoots] = useState({});
  useEffect(() => {
    backend.getReunion().then((reunion) => setReunionDeRoots(reunion));
  }, [location]);

  toast.configure({
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    transition: Slide,
  });

  return (
    <>
      <GlobalStyle/>
      <Switch location={location}>
        <Route exact path="/"
               render={() => (reunionDeRoots.abierta ? <Redirect to="/reunionDeRoots"/>
                 : <EmpezarReunion {...reunionDeRoots} location={location}/>)}/>
        <Route exact path="/reunionDeRoots"
               render={() => (reunionDeRoots.abierta ? <VistaTemas {...reunionDeRoots} location={location}/> : <Redirect to="/"/>)}/>
      </Switch>
    </>
  );
};


export default App;
