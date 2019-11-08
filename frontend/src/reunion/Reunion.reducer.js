import { actionTypes } from './Reunion.actions';

const initialState = {
  indexTemaActual: 0,
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ESTADO_DE_REUNION: {
      return ({ ...prevState, reunionEnCurso: action.reunionEnCurso });
    }
    case actionTypes.GET_TEMAS: {
      return ({ ...prevState, temas: action.temas });
    }
    case actionTypes.UPDATE_TEMA_ACTUAL: {
      const esUnIndiceValido = action.indexTemaActual < prevState.temas.length && action.indexTemaActual >= 0;
      return ({
        ...prevState,
        indexTemaActual: esUnIndiceValido ? action.indexTemaActual : prevState.indexTemaActual,
      });
    }

    default: {
      return prevState;
    }
  }
};
