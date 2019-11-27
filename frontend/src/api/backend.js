import Requester from './requester';

const requester = Requester.createDefaultRequester();

const Backend = {
  getReunion() {
    return requester.get('/reunionActual');
  },

  empezarReunion() {
    return this.guardarDatosReunion()
      .then(() => requester.post('/reunionDeRoots', { abierta: true }));
  },

  cerrarReunion() {
    return requester.put('/reunionActual', { abierta: false });
  },

  guardarDatosReunion() {
    return requester.get('/temas/guardar');
  },
};

export default Backend;
