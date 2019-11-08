import backend from "../api/backend";
import {push} from "connected-react-router";

export const actionTypes = Object.freeze({
  SET_ESTADO_DE_REUNION: 'SET_ESTADO_DE_REUNION',
  GET_TEMAS: 'GET_TEMAS',
  UPDATE_TEMA_ACTUAL: 'UPDATE_TEMA_ACTUAL'
});

export const createCargarReunionAction = (temas) => ({type: actionTypes.GET_TEMAS, temas});
export const createSetEstadoDeReunionAction = (reunionEnCurso) => ({
  type: actionTypes.SET_ESTADO_DE_REUNION,
  reunionEnCurso
});
export const createSeleccionarTemaAction = indexTemaActual => ({type: actionTypes.UPDATE_TEMA_ACTUAL, indexTemaActual});

export const createEmpezarReunionThunk = () => (dispatch, getState) => {
  return backend
    .empezarLaReunion()
    .then(() => dispatch(createSetEstadoDeReunionAction(true)))
    .then(() => dispatch(push(`/reunion/temas`)));
};

export const createInicializarReunionThunk = (indexTemaActual) => (dispatch) => {
  return backend
    .getReunion()
    .then(temas => dispatch(createCargarReunionAction(temas)))
    .then(() => dispatch(createSeleccionarTemaAction(indexTemaActual)));
};

export const createCerrarReunionThunk = () => dispatch => {
  return backend
    .cerrarReunion()
    .then(() => dispatch(createSetEstadoDeReunionAction(false)))
};
