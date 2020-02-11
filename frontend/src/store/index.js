import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import produce from 'immer';
import oradoresReducer from './oradores';

export function reaccionesReducer(state = [], evento) {
  switch (evento.type) {
    case 'Reiniciar reacciones':
      return [];
    case 'Reaccionar': {
      const eventReaction = evento.reaccion;
      if (state.some((stateReaction) => stateReaction.name === eventReaction)) {
        return state.map((stateReaction) => {
          if (stateReaction.name === eventReaction) {
            return { ...stateReaction, value: stateReaction.value + 1 };
          }
          return stateReaction;
        });
      }

      return state.concat([{ name: eventReaction, value: 1 }]);
    }

    default: return state;
  }
}

export const temaReducer = (state, action) => produce(state, (draft) => {
  draft.oradores = oradoresReducer(state.oradores, action);
  draft.reacciones = reaccionesReducer(state.reacciones, action);
});

function compareTemaByPriority(tema1, tema2) {
  if (tema2.prioridad === null) {
    return -1;
  } if (tema1.prioridad === null) {
    return 1;
  }
  return tema2.prioridad - tema1.prioridad;
}

function compareTema(tema1, tema2) {
  if (tema1.obligatoriedad === 'OBLIGATORIO' && tema2.obligatoriedad === 'OBLIGATORIO') {
    return compareTemaByPriority(tema1, tema2);
  }

  if (tema1.obligatoriedad === 'OBLIGATORIO') {
    return -1;
  } if (tema2.obligatoriedad === 'OBLIGATORIO') {
    return 1;
  }
  return compareTemaByPriority(tema1, tema2);
}

export const reducer = (state = { temas: null, reunion: null }, action) => produce(state, (draft) => {
  switch (action.type) {
    case 'Empezar Reunion': {
      draft.temas = action.temas.map((tema) => temaReducer(tema, action)).sort(compareTema);
      draft.reunion = action.reunion;
      break;
    }
    case 'Empezar Tema': {
      const tema = draft.temas.find((t) => t.id === action.idTema);
      tema.inicio = new Date(action.fecha).toISOString();

      break;
    }
    case 'Terminar Tema': {
      const tema = draft.temas.find((t) => t.id === action.idTema);
      const ahora = new Date(action.fecha).toISOString();
      if (tema.fin === null && tema.inicio !== null) {
        tema.fin = ahora;

        const orador = tema.oradores.find((o) => o.fin === null && o.inicio !== null);
        if (orador) {
          orador.fin = ahora;
        }
      }
    }
      break;
    default:
      if (draft.temas) {
        const temaIndex = draft.temas.findIndex((tema) => tema.id === action.idTema);
        draft.temas[temaIndex] = temaReducer(state.temas[temaIndex], action);
      }
      break;
  }
});

const wsForwarder = (ws) => (store) => (next) => (action) => {
  if (!action.comesFromWS) {
    // We don't dispatch actions that we send to the ws since we'll
    // see them twice, in the future we could be smarter.
    ws.send(JSON.stringify(action));
  } else {
    next(action);
  }
};

export default (ws) => configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), wsForwarder(ws)],
});
