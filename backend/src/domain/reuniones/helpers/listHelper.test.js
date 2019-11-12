import {getLastElement} from "./listHelper";

describe('#getLastElement', () => {
  let list;

  describe('dada una lista', () => {
    describe('si esta vacia', () => {
      beforeEach(() => {
        list = []
      });

      it('retorna un objeto vacio', () => {
        const result = getLastElement(list);
        expect(result).toEqual({});
      });
    });

    describe('si no esta vacia', () => {
      beforeEach(() => {
        list = [{id: 1, titulo: 'untitulo', descr: 'una descr'}, {id: 3, titulo: 'otrotitulo', descr: 'otra descr'}]
      });

      it('retorna el ultimo elemento de la lista', () => {
        const result = getLastElement(list);
        expect(result.id).toBe(3);

      });
    });

  });
});
