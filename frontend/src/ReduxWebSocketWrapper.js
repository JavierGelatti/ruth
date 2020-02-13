import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import GlobalStyle from './GlobalStyle.styled';
import TemasHandler from './reunion/TemasHandler';

function getWebSocket() {
  const protocol = window.protocol === 'https:' ? 'wss' : 'ws';
  const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8760';
  return new WebSocket(`${protocol}://${host}/ws`);
}

export const ReduxWebSocketWrapper = (props) => {
  const [store, setStore] = useState();

  useEffect(() => {
    const ws = getWebSocket();
    const newStore = createStore(ws);
    const { reunion, temas } = props;
    newStore.dispatch({
      type: 'Empezar Reunion', comesFromWS: true, reunion, temas,
    });

    ws.onmessage = (mensaje) => {
      JSON.parse(mensaje.data).forEach((rawEvento) => {
        const { data, ...evento } = JSON.parse(rawEvento);
        const { tipo, ...rawEvent } = data;
        const nextEvent = {
          ...evento, ...rawEvent, comesFromWS: true, type: tipo,
        };
        newStore.dispatch(nextEvent);
      });
    };
    setStore(newStore);
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
