import { actionTypes } from './Reunion.actions';

const initialState = {
  indexTemaActual: 0,
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ESTADO_DE_REUNION:
      return ({ ...prevState, reunionEnCurso: action.reunionEnCurso });

    case actionTypes.GET_TEMAS:
      return ({ ...prevState, temas: action.temas });
    default:
      return prevState;
  }
};
