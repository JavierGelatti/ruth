import backend from "../api/backend";
import {push} from "connected-react-router";

export const actionTypes = Object.freeze({
  SET_ESTADO_DE_REUNION: 'SET_ESTADO_DE_REUNION',
  GET_TEMAS: 'GET_TEMAS'
});

export const createCargarReunionAction = (temas) => ({type:actionTypes.GET_TEMAS, temas});
export const createSetEstadoDeReunionAction = (reunionEnCurso) => ({type: actionTypes.SET_ESTADO_DE_REUNION, reunionEnCurso});

export const createEmpezarReunionThunk = () => (dispatch) => {
  return backend
    .empezarLaReunion()
    .then(() => dispatch(createSetEstadoDeReunionAction(true)))
    .then(() => push('/reunion/temas/0'));
};

export const createGetTemasThunk = () => (dispatch) => {
  return backend
    .getReunion()
    .then(createCargarReunionAction)
    .then(dispatch);
};

export const createCerrarReunionThunk = () => dispatch =>{
  return backend
    .cerrarReunion()
    .then(() => dispatch(createSetEstadoDeReunionAction(false)))
};
