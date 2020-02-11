import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle.styled';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';
import './toast.css';
import TemasHandler from './reunion/TemasHandler';
import createStore from './store';

const App = ({ location }) => {
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
  console.log(JSON.stringify(reunion));
  console.log(JSON.stringify(temas));
  if (!reunion || !temas) {
    return <div>Cargando</div>;
  }

  if (reunion.abierta !== true) {
    return <>
      <GlobalStyle/>
      <EmpezarReunion {...reunion} location={location}/>)}/>
    </>;
  }

  return <>
    <GlobalStyle/>
    <Coso reunion={reunion} temas={temas}/>
  </>;
};

const Coso = (props) => {
  const [store, setStore] = useState();

  useEffect(() => {
    // const ws = new WebSocket(`ws://${window.location.host || 'localhost:8761'}/ws`);
    const ws = new WebSocket('ws://localhost:8760/ws');
    const newStore = createStore(ws);
    const { reunion, temas } = props;
    newStore.dispatch({
      type: 'Empezar Reunion', comesFromWS: true, reunion, temas,
    });

    ws.onmessage = (mensaje) => {
      console.log(mensaje);
      JSON.parse(mensaje.data).forEach((rawEvento) => {
        const { data, ...evento } = JSON.parse(rawEvento);
        const { tipo, ...rawEvent } = data;
        const nextEvent = {
          ...evento, ...rawEvent, comesFromWS: true, type: tipo,
        };
        console.log(nextEvent);
        newStore.dispatch(nextEvent);
      });
      window.store = newStore;
      window.temas = temas;
    };
    setStore(newStore);
    newStore.subscribe(() => {
      console.log('nuevo evento');
    });
  }, [props]);

  if (!store) {
    return <div>Cargando</div>;
  }


  return (
    <Provider store={store}>
      <GlobalStyle/>
      <TemasHandler/>
    </Provider>
  );
};


export default App;
