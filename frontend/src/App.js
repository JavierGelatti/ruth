import React, { useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.styled';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';
import './toast.css';
import { ReduxWebSocketWrapper } from './ReduxWebSocketWrapper';
import Mobile from './mobile';
import Oradores from './oradores';
import TestChart from './chart';
import TemasHandler from './reunion/TemasHandler';

const App = ({ location, usuario }) => {
  const [temas, setTemas] = useState();
  const [reunion, setReunion] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const reunionResponse = await backend.getReunion();
      const temasResponse = await backend.getTemas();
      setReunion(reunionResponse);
      setTemas(temasResponse || {});
    };
    fetchData();
  }, []);

  toast.configure({
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    transition: Slide,
  });

  if (!reunion || !temas) {
    return <div>Cargando</div>;
  }

  if (reunion.abierta !== true) {
    return <>
      <GlobalStyle/>
      <EmpezarReunion {...reunion}/>)}/>
    </>;
  }

  return <>
    <GlobalStyle/>
    <ReduxWebSocketWrapper reunion={reunion} temas={temas} usuario={usuario}>
      <Switch>
        <Route exact path="/mobile" component={() => <Mobile usuario={usuario}/>}/>
        <Route exact path="/oradores" component={Oradores}/>
        <Route exact path="/chart" component={TestChart}/>
        <Route exact path="/" component={TemasHandler} />
      </Switch>
    </ReduxWebSocketWrapper>
  </>;
};


export default App;
