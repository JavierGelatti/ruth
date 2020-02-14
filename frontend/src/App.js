import React, { useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import GlobalStyle from './GlobalStyle.styled';
import EmpezarReunion from './empezar-reunion/EmpezarReunion';
import backend from './api/backend';
import './toast.css';
import { ReduxWebSocketWrapper } from './ReduxWebSocketWrapper';

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
    <ReduxWebSocketWrapper reunion={reunion} temas={temas}/>
  </>;
};


export default App;
