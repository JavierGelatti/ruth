import reunionReducer from './Reunion.reducer';
import {
  createCargarReunionAction,
  createSeleccionarTemaAction,
  createSetEstadoDeReunionAction,
} from './Reunion.actions';

const initialState = {
  indexTemaActual: 0,
  temas: [],
};

describe('El reductor de la reunion', () => {
  let action;
  let prevState;
  let expectedState;
  const subject = () => reunionReducer(prevState, action);

  describe('Al recibir una accion desconocida', () => {
    beforeEach(() => {
      prevState = initialState;
      action = ({ type: 'SARLANGA' });
    });

    it('No hace nada', () => {
      expect(subject()).toBe(prevState);
    });
  });


  describe('Al recibir la accion SET_ESTADO_DE_REUNION', () => {
    beforeEach(() => {
      prevState = initialState;
      expectedState = { ...prevState, reunionEnCurso: true };
      action = createSetEstadoDeReunionAction(true);
    });

    it('Setea  los temas de la reunion', () => {
      expect(subject()).toEqual(expectedState);
    });
  });


  describe('Al recibir la accion GET_TEMAS', () => {
    beforeEach(() => {
      prevState = initialState;
      const temas = [{ titulo: 'Un titulo', descripcion: 'una descripcion' }, {
        titulo: 'Otro titulo',
        descripcion: 'otra descripcion',
      }];
      expectedState = { ...prevState, temas };
      action = createCargarReunionAction(temas);
    });

    it('Setea  los temas de la reunion', () => {
      expect(subject()).toEqual(expectedState);
    });
  });


  describe('Al recibir la accion UPDATE_TEMA_ACTUAL', () => {
    beforeEach(() => {
      const temas = [{ titulo: 'Un titulo', descripcion: 'una descripcion' }, {
        titulo: 'Otro titulo',
        descripcion: 'otra descripcion',
      }];
      prevState = { ...initialState, temas };
    });

    describe('Cuando el index del tema es mayor a los temas que hay', () => {
      beforeEach(() => {
        const unIndexInvalido = 3;
        action = createSeleccionarTemaAction(unIndexInvalido);
      });

      it('Se queda con el estado anterior', () => {
        expect(subject()).toEqual(prevState);
      });
    });

    describe('Cuando el index del tema es menor a los temas que hay', () => {
      beforeEach(() => {
        const unIndexInvalido = -1;
        action = createSeleccionarTemaAction(unIndexInvalido);
      });

      it('Se queda con el estado anterior', () => {
        expect(subject()).toEqual(expectedState);
      });
    });

    describe('Cuando el index del tema esta dentro del rango', () => {
      beforeEach(() => {
        const unIndexValido = 1;
        expectedState = { ...prevState, indexTemaActual: unIndexValido };
        action = createSeleccionarTemaAction(unIndexValido);
      });

      it('Setea el index correspondiente', () => {
        expect(subject()).toEqual(expectedState);
      });
    });
  });
});
